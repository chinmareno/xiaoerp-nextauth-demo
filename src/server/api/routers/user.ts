import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { utapi } from "@/server/uploadthing";

export const userRouter = createTRPCRouter({
  getUser: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
      select: {
        name: true,
        image: true,
      },
    });

    return user;
  }),

  changeUsername: protectedProcedure
    .input(z.string().min(1))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.user.update({
        data: {
          name: input,
        },
        where: {
          id: ctx.session.user.id,
        },
        select: { name: true },
      });
    }),

  changeProfilePicture: protectedProcedure
    .input(
      z.object({
        key: z.string().min(1, "Key is required"),
        url: z.string().url("Invalid URL"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const isFound = await ctx.db.user.findUnique({
        where: {
          id: ctx.session.user.id,
        },
        select: { imageKey: true },
      });
      if (isFound?.imageKey) {
        await utapi.deleteFiles(isFound.imageKey);
      }
      await ctx.db.user.update({
        data: {
          image: input.url,
          imageKey: input.key,
        },
        where: {
          id: ctx.session.user.id,
        },
        select: { image: true },
      });
    }),
});
