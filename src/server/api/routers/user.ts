import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { utapi } from "@/server/uploadthing";
import { TRPCError } from "@trpc/server";
import { hashPassword, verifyPassword } from "@/lib/bcrypt";
import type { Language } from "@prisma/client";
import { cookies } from "next/headers";

export const userRouter = createTRPCRouter({
  verifyUserSession: protectedProcedure.query(async ({ ctx }) => {
    const isCredential = ctx.session.user.isCredential;
    const isExist = isCredential
      ? await ctx.db.userCredential.findUnique({
          where: { id: ctx.session.user.id },
          select: { id: true },
        })
      : await ctx.db.user.findUnique({
          where: { id: ctx.session.user.id },
          select: { id: true },
        });

    return isExist;
  }),

  createUser: publicProcedure
    .input(
      z.object({
        email: z.string().email("Invalid email address"),
        password: z
          .string()
          .min(8)
          .refine((val) => /[A-Z]/.test(val))
          .refine((val) => /[a-z]/.test(val))
          .refine((val) => /\d/.test(val)),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const existingUser = await ctx.db.userCredential.findUnique({
        where: {
          email: input.email.toLowerCase(),
        },
        select: { email: true },
      });
      if (existingUser) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "A user with this email already exists",
        });
      }
      const temporaryUsername = input.email.split("@")[0]!;
      const hashedPassword = await hashPassword(input.password);
      const cookieLanguage = (await cookies()).get("Next-Locale")
        ?.value as Language;
      await ctx.db.userCredential.create({
        data: {
          name: temporaryUsername,
          email: input.email.toLowerCase(),
          password: hashedPassword,
          language: cookieLanguage,
        },
        select: { id: true },
      });
    }),

  getUser: protectedProcedure.query(async ({ ctx }) => {
    const isCredential = ctx.session.user.isCredential;
    const user = isCredential
      ? await ctx.db.userCredential.findUnique({
          where: { id: ctx.session.user.id },
          select: { name: true, image: true, language: true },
        })
      : await ctx.db.user.findUnique({
          where: { id: ctx.session.user.id },
          select: { name: true, image: true, language: true },
        });
    if (!user)
      throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

    return user;
  }),

  changeUsername: protectedProcedure
    .input(z.string().min(1))
    .mutation(async ({ ctx, input }) => {
      const isCredential = ctx.session.user.isCredential;

      void (isCredential
        ? await ctx.db.userCredential.update({
            data: {
              name: input,
            },
            where: {
              id: ctx.session.user.id,
            },
            select: { id: true },
          })
        : await ctx.db.user.update({
            data: {
              name: input,
            },
            where: {
              id: ctx.session.user.id,
            },
            select: { id: true },
          }));
    }),

  changeProfilePicture: protectedProcedure
    .input(
      z.object({
        key: z.string().min(1, "Key is required"),
        url: z.string().url("Invalid URL"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const isCredential = ctx.session.user.isCredential;

      const existingImage = isCredential
        ? await ctx.db.userCredential.findUnique({
            where: {
              id: ctx.session.user.id,
            },
            select: { imageKey: true },
          })
        : await ctx.db.user.findUnique({
            where: {
              id: ctx.session.user.id,
            },
            select: { imageKey: true },
          });

      if (existingImage?.imageKey)
        await utapi.deleteFiles(existingImage.imageKey);

      void (isCredential
        ? await ctx.db.userCredential.update({
            data: {
              image: input.url,
              imageKey: input.key,
            },
            where: {
              id: ctx.session.user.id,
            },
            select: { id: true },
          })
        : await ctx.db.user.update({
            data: {
              image: input.url,
              imageKey: input.key,
            },
            where: {
              id: ctx.session.user.id,
            },
            select: { id: true },
          }));
    }),

  verifyPassword: protectedProcedure
    .input(
      z.object({
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const currentPassword = await ctx.db.userCredential.findUnique({
        where: { id: ctx.session.user.id },
        select: { password: true },
      });
      if (currentPassword) {
        const isVerified = await verifyPassword(
          input.password,
          currentPassword.password,
        );
        return isVerified;
      }
    }),

  changePassword: protectedProcedure
    .input(
      z.object({
        password: z
          .string()
          .min(8)
          .refine((val) => /[A-Z]/.test(val))
          .refine((val) => /[a-z]/.test(val))
          .refine((val) => /\d/.test(val)),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const oldPassword = await ctx.db.userCredential.findUnique({
        where: { id: ctx.session.user.id },
        select: { password: true },
      });

      if (oldPassword) {
        const isSamePassword = await verifyPassword(
          input.password,
          oldPassword.password,
        );
        if (isSamePassword)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "New password must be different from the old password",
          });
      }

      const hashedPassword = await hashPassword(input.password);

      await ctx.db.userCredential.update({
        where: { id: ctx.session.user.id },
        data: { password: hashedPassword },
      });
    }),

  changeLanguage: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const isCredential = ctx.session.user.isCredential;
      const localeLanguage = input as Language;

      void (isCredential
        ? await ctx.db.userCredential.update({
            data: {
              language: localeLanguage,
            },
            where: {
              id: ctx.session.user.id,
            },
            select: { id: true },
          })
        : await ctx.db.user.update({
            data: {
              language: localeLanguage,
            },
            where: {
              id: ctx.session.user.id,
            },
            select: { id: true },
          }));
    }),
});
