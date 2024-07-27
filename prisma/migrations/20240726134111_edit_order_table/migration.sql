/*
  Warnings:

  - Added the required column `state` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "State" AS ENUM ('waiting', 'getting_ready', 'ready');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "is_done" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "state" "State" NOT NULL;
