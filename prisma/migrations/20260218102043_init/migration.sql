-- CreateTable
CREATE TABLE "note" (
    "id" SERIAL NOT NULL,
    "noteTitle" TEXT NOT NULL,
    "noteContent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "note_pkey" PRIMARY KEY ("id")
);
