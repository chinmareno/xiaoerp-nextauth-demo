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
import { useScopedI18n } from "@/app/public/locales/client";

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
  const scopedT = useScopedI18n("auth.signup");

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
              toast.error(scopedT("error.emailExist"));
            } else {
              toast.error(scopedT("error.uncaughtError"));
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
        toast.success(scopedT("accountCreated"));
      } else {
        toast.success(scopedT("accountCreatedLogin"));
        router.push("/login");
      }
    } catch (e) {
      const trpcError = e instanceof TRPCClientError;
      if (!trpcError) {
        console.log("UncaughtError on Signup:   ", e);
        toast.error(scopedT("error.uncaughtError"));
      }
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center pb-[10.5vh]">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {scopedT("title")}
          </CardTitle>
          <CardDescription>{scopedT("desc")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{scopedT("emailLabel")}</Label>
              <Input
                id="email"
                type="text"
                placeholder={scopedT("emailPlaceholder")}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-600">
                  {scopedT("error.invalidEmail")}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{scopedT("passwordLabel")}</Label>
              <Input
                id="password"
                type="password"
                placeholder={scopedT("passwordPlaceholder")}
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-600">
                  {scopedT("error.invalidPassword")}
                </p>
              )}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {/[a-z]/.test(passwordValue) ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Dot className="h-4 w-4" />
                  )}
                  <p className="text-sm">
                    {scopedT("passwordRequirement.oneLowerCase")}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {/[A-Z]/.test(passwordValue) ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Dot className="h-4 w-4" />
                  )}
                  <p className="text-sm">
                    {scopedT("passwordRequirement.oneUpperCase")}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {/\d/.test(passwordValue) ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Dot className="h-4 w-4" />
                  )}
                  <p className="text-sm">
                    {scopedT("passwordRequirement.includeNumber")}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {passwordValue.length >= 8 ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Dot className="h-4 w-4" />
                  )}
                  <p className="text-sm">
                    {scopedT("passwordRequirement.minChar")}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm password">
                {scopedT("confirmPasswordLabel")}
              </Label>
              <Input
                id="confirm password"
                type="password"
                placeholder={scopedT("confirmPasswordPlaceholder")}
                {...register("confirmPassword")}
              />
              {errors.confirmPassword &&
                passwordValue !== confirmPasswordValue && (
                  <p className="text-sm text-red-600">
                    {scopedT("error.invalidConfirmPassword")}
                  </p>
                )}
            </div>

            <Button
              disabled={
                mutate.status === "pending" || mutate.status === "success"
              }
              type="submit"
              className="w-full"
            >
              {scopedT("signupButton")}
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
              {scopedT("haveAccount")}
            </span>
            <Button asChild variant="link" className="h-auto p-0 font-normal">
              <Link href="/login">{scopedT("loginLink")}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
