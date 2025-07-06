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
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { GoogleAuthButton } from "../_components/GoogleAuthButton";
import { z } from "zod";
import { toast } from "sonner";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/dashboard");
    if (session.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session.status, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res && !res?.error) {
        router.push("/dashboard");
      } else {
        if (res?.code === "Invalid Credential") {
          toast.error("Invalid email or password");
        } else if (res?.code === "Invalid Input") {
          toast.error("Please enter a valid email and password");
        } else {
          toast.error("An unexpected error occurred during login");
        }
      }
    } catch (e) {
      console.log("An unexpected error occurred during login:");
      console.log(e);
    }
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center pb-[10.5vh]">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Login to your account</CardDescription>
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
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card text-muted-foreground px-2">
                Or continue with
              </span>
            </div>
          </div>
          <GoogleAuthButton text="Continue with Google" />

          <div className="text-center text-sm">
            <span className="text-muted-foreground">
              Don't have an account?
            </span>
            <Button variant="link" className="h-auto p-0 font-normal">
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
