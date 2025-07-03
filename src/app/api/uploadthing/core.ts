import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  profilePicture: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  }),
};

export type OurFileRouter = typeof ourFileRouter;
