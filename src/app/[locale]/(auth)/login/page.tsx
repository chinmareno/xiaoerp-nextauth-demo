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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useScopedI18n } from "@/app/public/locales/client";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Invalid password"),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const scopedT = useScopedI18n("auth.login");
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res && !res?.error) {
        router.push("/dashboard");
      } else {
        setIsLoading(false);
        if (res?.code === "Invalid Credential") {
          toast.error(scopedT("error.invalidCredential"));
        } else if (res?.code === "Invalid Input") {
          toast.error(scopedT("error.invalidInput"));
        } else {
          toast.error(scopedT("error.uncaughtError"));
        }
      }
    } catch (e) {
      setIsLoading(false);
      toast.error(scopedT("error.uncaughtError"));

      console.log("An unexpected error occurred during login:");
      console.log(e);
    }
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center pb-[10.5vh]">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {scopedT("title")}
          </CardTitle>
          <CardDescription> {scopedT("desc")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email"> {scopedT("emailLabel")}</Label>
              <Input
                id="email"
                type="text"
                placeholder={scopedT("emailPlaceholder")}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-600">
                  {errors.email.message && scopedT("error.invalidEmail")}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password"> {scopedT("passwordLabel")}</Label>
              <Input
                id="password"
                type="password"
                placeholder={scopedT("passwordPlaceholder")}
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message && scopedT("error.invalidPassword")}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              {scopedT("loginButton")}
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card text-muted-foreground px-2">
                {scopedT("separator")}
              </span>
            </div>
          </div>
          <GoogleAuthButton text={scopedT("googleButton")} />

          <div className="text-center text-sm">
            <span className="text-muted-foreground">
              {scopedT("noAccount")}
            </span>
            <Button
              disabled={isLoading}
              variant="link"
              className="h-auto p-0 font-normal"
            >
              <Link href="/signup"> {scopedT("signUpLink")}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
