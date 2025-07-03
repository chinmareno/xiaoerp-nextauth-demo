"use client";

import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const imageSchema = z.object({
  image: z
    .instanceof(FileList)
    .refine((file) => file.length === 1, "Please select an image")
    .refine(
      (file) => file[0] && file[0].size <= MAX_FILE_SIZE,
      "Image size must be less than 5MB",
    )
    .refine(
      (file) => file[0] && ACCEPTED_IMAGE_TYPES.includes(file[0].type),
      "Only .jpg, .jpeg, .png and .webp formats are supported",
    ),
});
