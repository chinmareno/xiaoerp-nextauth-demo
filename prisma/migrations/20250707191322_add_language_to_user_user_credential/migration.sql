-- CreateEnum
CREATE TYPE "Language" AS ENUM ('en', 'zh', 'id');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "language" "Language" NOT NULL DEFAULT 'en';

-- AlterTable
ALTER TABLE "UserCredential" ADD COLUMN     "language" "Language" NOT NULL DEFAULT 'en';
