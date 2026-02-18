-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "noteTitle" TEXT NOT NULL,
    "noteContent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
