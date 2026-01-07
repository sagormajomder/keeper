import { mongoConnect } from '@/lib/mongoConnect';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

// Get Single Note
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const { db } = await mongoConnect();
    const note = await db
      .collection('notes')
      .findOne({ _id: new ObjectId(id) });

    if (!note) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json(note);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch note' },
      { status: 500 }
    );
  }
}

// Update Note
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const { noteTitle, noteContent } = body;

    const { db } = await mongoConnect();
    const result = await db.collection('notes').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          noteTitle,
          noteContent,
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Note updated', result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to update note' },
      { status: 500 }
    );
  }
}

// Delete Note
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const { db, client } = await mongoConnect();

    const result = await db
      .collection('notes')
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Note deleted', result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to delete note' },
      { status: 500 }
    );
  }
}
