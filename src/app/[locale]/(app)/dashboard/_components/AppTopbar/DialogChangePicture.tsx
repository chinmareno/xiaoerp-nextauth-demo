"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";
import React, { useState, useEffect, type Dispatch } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { api } from "@/trpc/react";
import { imageSchema } from "@/schema/imageSchema";
import { useUploadThing } from "@/lib/uploadthing";
import { useLoadingStore } from "@/hooks/useLoadingStore";

type FormData = z.infer<typeof imageSchema>;

type Props = {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const DialogChangePicture = ({ setIsOpen }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(imageSchema),
  });

  const previewImage = watch("image")?.[0];
  const { data } = api.user.getUser.useQuery(undefined, {
    placeholderData: { name: "User", image: null },
  });
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (previewImage) {
      const url = URL.createObjectURL(previewImage);
      setPreviewImageUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setPreviewImageUrl(data?.image ?? null);
    }
  }, [previewImage, data]);

  const handleClose = () => {
    reset();
    setIsOpen(false);
  };

  const { resetLoading, setLoading } = useLoadingStore();
  const mutate = api.user.changeProfilePicture.useMutation({
    onMutate: () => {
      setIsLoading(true);
      resetLoading();
      setLoading(80);
    },
    onSuccess: async () => {
      await utils.user.getUser.invalidate();
      setLoading(100);
    },
    onSettled() {
      setIsLoading(false);
      setTimeout(resetLoading, 300);
    },
  });

  const utils = api.useUtils();
  const { startUpload } = useUploadThing("profilePicture", {
    onUploadBegin: () => {
      resetLoading();
      setLoading(40);
    },
    onClientUploadComplete: (res) => {
      const key = res[0]?.key;
      const url = res[0]?.ufsUrl;
      if (!key || !url) return;
      mutate.mutate({ key, url });
      setLoading(60);
    },
    onUploadError: () => {
      setIsLoading(false);
      resetLoading();
    },
  });
  const onSubmit = async (image: FormData) => {
    setLoading(20);
    setIsLoading(true);
    const file = image.image[0];
    if (!file || !(file instanceof File)) return;
    await startUpload([file]);
    reset();
    setIsOpen(false);
  };

  const username = data?.name ?? "User";
  return (
    <Dialog open={true} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Upload Profile Image</DialogTitle>
            <DialogDescription>
              Choose an image file (JPG, PNG, or WebP). Maximum size 5MB.
            </DialogDescription>
          </DialogHeader>
          <Input
            id="image"
            type="file"
            accept="image/*"
            className="hidden"
            {...register("image")}
          />

          <div className="flex flex-col items-center gap-2">
            <Label htmlFor="image" className="hover:cursor-pointer">
              <Avatar className="h-40 w-40">
                {previewImageUrl && (
                  <AvatarImage className="" src={previewImageUrl} />
                )}
                <AvatarFallback>
                  {username?.charAt(0)?.toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Label>
            {errors.root && (
              <span className="text-destructive text-xs">
                {errors.root.message}
              </span>
            )}
          </div>

          <DialogFooter>
            <Button onClick={handleClose} variant="outline" type="button">
              Cancel
            </Button>
            {previewImage ? (
              <Button disabled={isLoading} type="submit">
                Save Changes
              </Button>
            ) : (
              <Button onClick={handleClose}>Save Changes</Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
