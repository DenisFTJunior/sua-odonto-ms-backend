-- CreateEnum
CREATE TYPE "Origin" AS ENUM ('INBOUND', 'RECOMMENDATION', 'OUTBOUND', 'OTHER');

-- CreateTable
CREATE TABLE "patients" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "points" INTEGER DEFAULT 0,
    "origin" "Origin" DEFAULT 'OTHER',

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "patients_email_key" ON "patients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "patients_phone_key" ON "patients"("phone");
