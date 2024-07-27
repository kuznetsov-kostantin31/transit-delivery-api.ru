/*
  Warnings:

  - You are about to drop the column `is_done` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "is_done",
ADD COLUMN     "isDone" BOOLEAN NOT NULL DEFAULT false;
