/*
  Warnings:

  - The primary key for the `ClosedSaaS` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ClosedSaaS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `OpenSaas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `OpenSaas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Type` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Type` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `A` on the `_ClosedSaaSToOpenSaas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_ClosedSaaSToOpenSaas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_OpenSaasToType` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_OpenSaasToType` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_ClosedSaaSToOpenSaas" DROP CONSTRAINT "_ClosedSaaSToOpenSaas_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClosedSaaSToOpenSaas" DROP CONSTRAINT "_ClosedSaaSToOpenSaas_B_fkey";

-- DropForeignKey
ALTER TABLE "_OpenSaasToType" DROP CONSTRAINT "_OpenSaasToType_A_fkey";

-- DropForeignKey
ALTER TABLE "_OpenSaasToType" DROP CONSTRAINT "_OpenSaasToType_B_fkey";

-- AlterTable
ALTER TABLE "ClosedSaaS" DROP CONSTRAINT "ClosedSaaS_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ClosedSaaS_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OpenSaas" DROP CONSTRAINT "OpenSaas_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "OpenSaas_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Type" DROP CONSTRAINT "Type_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Type_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_ClosedSaaSToOpenSaas" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_OpenSaasToType" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_ClosedSaaSToOpenSaas_AB_unique" ON "_ClosedSaaSToOpenSaas"("A", "B");

-- CreateIndex
CREATE INDEX "_ClosedSaaSToOpenSaas_B_index" ON "_ClosedSaaSToOpenSaas"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OpenSaasToType_AB_unique" ON "_OpenSaasToType"("A", "B");

-- CreateIndex
CREATE INDEX "_OpenSaasToType_B_index" ON "_OpenSaasToType"("B");

-- AddForeignKey
ALTER TABLE "_OpenSaasToType" ADD CONSTRAINT "_OpenSaasToType_A_fkey" FOREIGN KEY ("A") REFERENCES "OpenSaas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OpenSaasToType" ADD CONSTRAINT "_OpenSaasToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClosedSaaSToOpenSaas" ADD CONSTRAINT "_ClosedSaaSToOpenSaas_A_fkey" FOREIGN KEY ("A") REFERENCES "ClosedSaaS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClosedSaaSToOpenSaas" ADD CONSTRAINT "_ClosedSaaSToOpenSaas_B_fkey" FOREIGN KEY ("B") REFERENCES "OpenSaas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
