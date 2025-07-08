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
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenuSeparator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DialogChangeUsername } from "./DialogChangeUsername";
import { useEffect, useState } from "react";
import { api } from "@/trpc/react";
import { DialogChangePicture } from "./DialogChangePicture";
import { useKeyboard } from "@/hooks/useKeyboard";
import { signOut, useSession } from "next-auth/react";
import { DialogChangePassword } from "./DialogChangePassword";
import {
  LanguageSelector,
  type LanguageLocale,
} from "@/components/LanguageSelector";
import { useChangeLocale, useCurrentLocale } from "@/app/public/locales/client";
import defaultAvatar from "src/app/public/avatar/default_profile.png";
import Image from "next/image";
import { useLoadingStore } from "@/hooks/useLoadingStore";

export const AppTopbar = () => {
  const [isDialogChangeUsernameOpen, setIsDialogChangeUsernameOpen] =
    useState(false);
  const [isDialogChangePictureOpen, setIsDialogChangePictureOpen] =
    useState(false);
  const [isUploadPicture, setIsUploadPicture] = useState(false);
  const [isDialogChangePassword, setIsDialogChangePasswordOpen] =
    useState(false);

  const { data: session } = useSession();
  const currentLocale = useCurrentLocale();

  const changeLocale = useChangeLocale();

  const { data, error, isPlaceholderData } = api.user.getUser.useQuery(
    undefined,
    {
      placeholderData: (staleData) => {
        if (staleData) {
          return { ...staleData, language: currentLocale };
        } else {
          return {
            name: "User",
            image: null,
            language: currentLocale,
          };
        }
      },
    },
  );

  const { startLoading, finishLoading } = useLoadingStore();

  useEffect(() => {
    if (error) void signOut();
    if (!isPlaceholderData && data?.language !== currentLocale) {
      changeLocale(data?.language as LanguageLocale);
    } else finishLoading();
  }, [data?.language, error]);

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
                  {data?.image ? (
                    <AvatarImage src={data.image} />
                  ) : (
                    <Image src={defaultAvatar} alt="avatar" />
                  )}
                </Avatar>
                <p className="hidden truncate text-sm font-medium sm:block">
                  {data?.name.length! > 16
                    ? data?.name.slice(0, 16) + "..."
                    : (data?.name ?? "User")}
                </p>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="space-y-1 p-2 [&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>*]:py-0.5 [&>*]:pr-5 [&>*]:hover:cursor-pointer [&>*]:hover:bg-gray-200"
              align="end"
            >
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
                onClick={async () => {
                  startLoading();
                  await signOut({ redirectTo: "/login" });
                  finishLoading();
                }}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <LanguageSelector />
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
