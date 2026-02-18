import { Prisma, PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const noteData: Prisma.noteCreateInput[] = [
  {
    noteTitle: 'This is a default Post',
    noteContent: 'This is default post content',
  },
];

export async function main() {
  for (const note of noteData) {
    await prisma.note.create({ data: note });
  }
}

main();
