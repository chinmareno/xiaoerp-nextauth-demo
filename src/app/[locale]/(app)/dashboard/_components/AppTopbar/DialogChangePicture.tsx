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
import { getImageSchema } from "@/schema/imageSchema";
import { useUploadThing } from "@/lib/uploadthing";
import { useLoadingStore } from "@/hooks/useLoadingStore";
import { toast } from "sonner";
import { PencilIcon } from "lucide-react";

type Props = {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  isUploadPicture: boolean;
  setIsUploadPicture: Dispatch<React.SetStateAction<boolean>>;
};

export const DialogChangePicture = ({
  setIsOpen,
  isUploadPicture,
  setIsUploadPicture,
}: Props) => {
  const { setLoading, resetLoading, finishLoading } = useLoadingStore();
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);

  const imageSchema = getImageSchema();
  type FormData = z.infer<typeof imageSchema>;

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
  const username = data?.name ?? "User";

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

  const { startUpload, isUploading } = useUploadThing("profilePicture", {
    onUploadBegin: () => {
      resetLoading();
      setLoading(30);
      setIsOpen(false);
      reset();
    },
    onClientUploadComplete: (res) => {
      const key = res[0]?.key;
      const url = res[0]?.ufsUrl;
      if (!key || !url) return finishLoading();
      setLoading(65);
      mutate.mutate({ key, url });
    },

    onUploadError: () => {
      toast.error("Failed to change profile picture. Please try again.");
      setIsUploadPicture(false);
    },
  });

  const utils = api.useUtils();

  const mutate = api.user.changeProfilePicture.useMutation({
    onMutate: () => {
      setLoading(80);
      setIsUploadPicture(true);
    },
    onSuccess: async () => {
      await utils.user.getUser.invalidate();
      toast.success("Profile picture updated successfully!");
    },
    onSettled() {
      setIsUploadPicture(false);
      finishLoading();
    },
  });

  const onSubmit = async (image: FormData) => {
    if (isUploading || isUploadPicture)
      return toast.error("Upload in progress, please wait.");
    setIsUploadPicture(true);
    const file = image.image[0];
    if (!file || !(file instanceof File))
      return toast.error("Invalid file type");
    await startUpload([file]);
  };

  return (
    <Dialog open={true}>
      <DialogContent
        onXIconClick={() => setIsOpen(false)}
        className="sm:max-w-[425px]"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Edit image</DialogTitle>
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
            <Label
              htmlFor="image"
              className="relative overflow-visible hover:cursor-pointer"
            >
              <Avatar className="relative h-40 w-40">
                {previewImageUrl ? (
                  <AvatarImage src={previewImageUrl} />
                ) : (
                  <AvatarFallback>
                    {username?.charAt(0)?.toUpperCase()}
                  </AvatarFallback>
                )}
              </Avatar>
              <PencilIcon className="absolute top-3 right-3 z-50 h-7 w-7 rounded-full bg-black/60 p-1 text-slate-200" />
            </Label>
            {errors.root && (
              <p className="text-destructive text-xs">{errors.root.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button onClick={handleClose} variant="outline" type="button">
              Cancel
            </Button>
            {previewImage ? (
              <Button disabled={isUploading} type="submit">
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
