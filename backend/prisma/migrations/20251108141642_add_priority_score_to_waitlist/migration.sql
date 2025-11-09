/*
  Warnings:

  - Added the required column `priority_score` to the `waitlist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "waitlist" ADD COLUMN     "priority_score" INTEGER NOT NULL;
