-- CreateTable
CREATE TABLE "OpenSaas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logo" BYTEA,
    "website" TEXT NOT NULL,
    "github" TEXT NOT NULL,

    CONSTRAINT "OpenSaas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClosedSaaS" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "logo" BYTEA,
    "website" TEXT NOT NULL,

    CONSTRAINT "ClosedSaaS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OpenSaasToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ClosedSaaSToOpenSaas" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "OpenSaas_website_key" ON "OpenSaas"("website");

-- CreateIndex
CREATE UNIQUE INDEX "OpenSaas_github_key" ON "OpenSaas"("github");

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ClosedSaaS_website_key" ON "ClosedSaaS"("website");

-- CreateIndex
CREATE UNIQUE INDEX "_OpenSaasToType_AB_unique" ON "_OpenSaasToType"("A", "B");

-- CreateIndex
CREATE INDEX "_OpenSaasToType_B_index" ON "_OpenSaasToType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClosedSaaSToOpenSaas_AB_unique" ON "_ClosedSaaSToOpenSaas"("A", "B");

-- CreateIndex
CREATE INDEX "_ClosedSaaSToOpenSaas_B_index" ON "_ClosedSaaSToOpenSaas"("B");

-- AddForeignKey
ALTER TABLE "_OpenSaasToType" ADD CONSTRAINT "_OpenSaasToType_A_fkey" FOREIGN KEY ("A") REFERENCES "OpenSaas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OpenSaasToType" ADD CONSTRAINT "_OpenSaasToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClosedSaaSToOpenSaas" ADD CONSTRAINT "_ClosedSaaSToOpenSaas_A_fkey" FOREIGN KEY ("A") REFERENCES "ClosedSaaS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClosedSaaSToOpenSaas" ADD CONSTRAINT "_ClosedSaaSToOpenSaas_B_fkey" FOREIGN KEY ("B") REFERENCES "OpenSaas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
