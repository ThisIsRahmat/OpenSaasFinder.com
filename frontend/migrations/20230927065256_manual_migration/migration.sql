/*
  Warnings:

  - You are about to drop the column `activity` on the `OpenSaas` table. All the data in the column will be lost.
  - Added the required column `logo` to the `ClosedSaaS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `OpenSaas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClosedSaaS" ADD COLUMN     "logo" BYTEA NOT NULL;

-- AlterTable
ALTER TABLE "OpenSaas" DROP COLUMN "activity",
ADD COLUMN     "logo" BYTEA NOT NULL;
