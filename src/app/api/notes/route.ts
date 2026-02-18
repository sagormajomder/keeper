import prisma from '@/lib/db';
import { NOTE } from '@/types/type';
import { NextRequest, NextResponse } from 'next/server';

// Get All Notes
export async function GET() {
  try {
    const result = await prisma.note.findMany();
    // console.log('GET Result', result);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to get notes' }, { status: 500 });
  }
}

// Create Note
export async function POST(req: NextRequest) {
  try {
    const data: NOTE = await req.json();

    if (!data.noteTitle) {
      return NextResponse.json(
        { error: 'Note Title is required' },
        { status: 400 },
      );
    }

    const formatedData = {
      ...data,
      createdAt: new Date().toISOString(),
    };

    // console.log(formatedData);

    const result = await prisma.note.create({ data: formatedData });
    // console.log('Server result', result);

    return NextResponse.json(
      { message: 'Note created', note: result },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to create note' },
      { status: 500 },
    );
  }
}
