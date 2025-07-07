"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Dot } from "lucide-react";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { TRPCClientError } from "@trpc/client";
import { useEffect } from "react";
import { GoogleAuthButton } from "../_components/GoogleAuthButton";
import Link from "next/link";

const signupSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8)
      .refine((val) => /[A-Z]/.test(val))
      .refine((val) => /[a-z]/.test(val))
      .refine((val) => /\d/.test(val)),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
  });

type SignUpSchema = z.infer<typeof signupSchema>;

const SignupPage = () => {
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    router.prefetch("/dashboard");
    if (session.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session.status, router]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const passwordValue =
    typeof window !== "undefined" ? (watch("password") ?? "") : "";

  const confirmPasswordValue =
    typeof window !== "undefined" ? (watch("confirmPassword") ?? "") : "";

  const mutate = api.user.createUser.useMutation();
  const onSubmit = async (data: SignUpSchema) => {
    try {
      await mutate.mutateAsync(
        {
          email: data.email,
          password: data.password,
        },
        {
          onError: (e) => {
            const code = e.data?.code;
            if (code === "CONFLICT") {
              toast.error("A user with this email already exists");
            } else {
              console.log("TRPCClientError on Signup:   ", e);
            }
          },
        },
      );
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res && !res?.error) {
        router.push("/dashboard");
      } else {
        toast.success("Account created successfully! Please login.");
        router.push("/login");
      }
    } catch (e) {
      const trpcError = e instanceof TRPCClientError;
      if (!trpcError) console.log("UncaughtError on Signup:   ", e);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center pb-[10.5vh]">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
          <CardDescription>Signup to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-600">
                  Password does not meet requirements
                </p>
              )}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {/[a-z]/.test(passwordValue) ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Dot className="h-4 w-4" />
                  )}
                  <p className="text-sm">One lowercase character</p>
                </div>
                <div className="flex items-center gap-2">
                  {/[A-Z]/.test(passwordValue) ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Dot className="h-4 w-4" />
                  )}
                  <p className="text-sm">One uppercase character</p>
                </div>
                <div className="flex items-center gap-2">
                  {/\d/.test(passwordValue) ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Dot className="h-4 w-4" />
                  )}
                  <p className="text-sm">Includes a number</p>
                </div>
                <div className="flex items-center gap-2">
                  {passwordValue.length >= 8 ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Dot className="h-4 w-4" />
                  )}
                  <p className="text-sm">8 characters minimum</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm password">Confirm Password</Label>
              <Input
                id="confirm password"
                type="password"
                placeholder="Enter your password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword &&
                passwordValue !== confirmPasswordValue && (
                  <p className="text-sm text-red-600">Passwords do not match</p>
                )}
            </div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card text-muted-foreground px-2">
                or Sign up with
              </span>
            </div>
          </div>
          <GoogleAuthButton text="Continue with Google" />
          <div className="text-center text-sm">
            <span className="text-muted-foreground">
              Already have an account?{" "}
            </span>
            <Button asChild variant="link" className="h-auto p-0 font-normal">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
