"use client";

import { Bell, ImageIcon, KeyRound, LogOut, UserIcon } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { DialogChangeUsername } from "./DialogChangeUsername";
import { useState } from "react";
import { api } from "@/trpc/react";
import { DialogChangePicture } from "./DialogChangePicture";
import { useKeyboard } from "@/hooks/useKeyboard";
import { signOut, useSession } from "next-auth/react";
import { DialogChangePassword } from "./DialogChangePassword";

export const AppTopbar = () => {
  const [isDialogChangeUsernameOpen, setIsDialogChangeUsernameOpen] =
    useState(false);
  const [isDialogChangePictureOpen, setIsDialogChangePictureOpen] =
    useState(false);
  const [isUploadPicture, setIsUploadPicture] = useState(false);
  const [isDialogChangePassword, setIsDialogChangePasswordOpen] =
    useState(false);

  const { data: session } = useSession();

  const { data } = api.user.getUser.useQuery(undefined, {
    placeholderData: { name: "User", image: null },
  });
  const username = data?.name ?? "User";

  useKeyboard(() => {
    if (isDialogChangeUsernameOpen) setIsDialogChangeUsernameOpen(false);
    if (isDialogChangePictureOpen) setIsDialogChangePictureOpen(false);
    if (isDialogChangePassword) setIsDialogChangePasswordOpen(false);
  }, "Escape");

  return (
    <header className="bg-background flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />

      <div className="flex flex-1 items-center justify-between">
        {/* Breadcrumbs */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Overview</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Right side - Notifications and Profile */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </Button>

          {/* Profile Section */}
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:cursor-pointer">
              <div className="flex items-center gap-3 select-none sm:mr-8">
                <Avatar className="h-10 w-10">
                  {data?.image && <AvatarImage src={data?.image} />}
                  <AvatarFallback>
                    {username?.charAt(0)?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <p className="hidden truncate text-sm font-medium sm:block">
                  {username.length > 16
                    ? username.slice(0, 16) + "..."
                    : username}
                </p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-1 sm:mr-8">
              <Card className="w-full pt-1.5 pb-0">
                <CardContent className="space-y-1 p-2 [&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>*]:py-0.5 [&>*]:pr-5 [&>*]:hover:cursor-pointer [&>*]:hover:bg-gray-200">
                  <DropdownMenuItem
                    onClick={() => setIsDialogChangeUsernameOpen(true)}
                  >
                    <UserIcon className="h-4 w-4" />
                    <span>Change Username</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={() => setIsDialogChangePictureOpen(true)}
                  >
                    <ImageIcon className="h-4 w-4" />
                    <span>Change Profile Picture</span>
                  </DropdownMenuItem>
                  {session?.user.isCredential && (
                    <DropdownMenuItem
                      onClick={() => setIsDialogChangePasswordOpen(true)}
                    >
                      <KeyRound className="h-4 w-4" />
                      <span>Change Password</span>
                    </DropdownMenuItem>
                  )}

                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={async () =>
                      await signOut({ redirectTo: "/login" })
                    }
                    className="text-red-600 hover:text-red-700"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </CardContent>
              </Card>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {isDialogChangeUsernameOpen && (
        <DialogChangeUsername setIsOpen={setIsDialogChangeUsernameOpen} />
      )}
      {isDialogChangePictureOpen && (
        <DialogChangePicture
          isUploadPicture={isUploadPicture}
          setIsUploadPicture={setIsUploadPicture}
          setIsOpen={setIsDialogChangePictureOpen}
        />
      )}
      {isDialogChangePassword && (
        <DialogChangePassword setIsOpen={setIsDialogChangePasswordOpen} />
      )}
    </header>
  );
};
