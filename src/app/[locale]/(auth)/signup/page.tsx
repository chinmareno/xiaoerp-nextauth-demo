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
import { DiscordAuthButton } from "../_components/DiscordAuthButton";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const SignupPage = () => {
  const session = useSession();
  if (session.status === "authenticated") redirect("/dashboard");
  return (
    <div className="flex h-screen w-screen items-center justify-center pb-[10.5vh]">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
          <CardDescription>Signup to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DiscordAuthButton text="Sign up with Discord" />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background text-muted-foreground px-2">
                Or signup with
              </span>
            </div>
          </div>

          <form onSubmit={() => console.log("Succeed")} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                ></Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm password">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                ></Button>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>

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
      );
    </div>
  );
};

export default SignupPage;
