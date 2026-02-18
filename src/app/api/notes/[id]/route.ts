import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// Get Single Note
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const result = await prisma.note.findUnique({
      where: { id },
    });

    // console.log('sigle NOte', result);

    if (!result) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch note' },
      { status: 500 },
    );
  }
}

// Update Note
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const { noteTitle, noteContent } = body;

    const result = await prisma.note.update({
      where: { id },
      data: { noteTitle, noteContent },
    });
    // console.log(result);

    if (!result) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Note updated', note: result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to update note' },
      { status: 500 },
    );
  }
}

// Delete Note
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;

    const result = await prisma.note.delete({
      where: { id },
    });

    // console.log('Deleted Result', result);

    if (!result) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Note deleted', note: result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to delete note' },
      { status: 500 },
    );
  }
}
