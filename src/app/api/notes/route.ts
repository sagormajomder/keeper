import { mongoConnect } from '@/lib/mongoConnect';
import { NOTE } from '@/types/type';
import { NextRequest, NextResponse } from 'next/server';

// Get All Note
export async function GET() {
  try {
    const { db, client } = await mongoConnect();

    const notes = await db.collection('notes').find().toArray();

    const formattedNotes = notes.map(note => ({
      ...note,
      id: note._id.toString(),
    }));

    return NextResponse.json(formattedNotes, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to get notes' }, { status: 500 });
  }
}

// Note Create
export async function POST(req: NextRequest) {
  try {
    const { db, client } = await mongoConnect();

    const data: NOTE = await req.json();

    if (!data.noteTitle) {
      client.close();
      return NextResponse.json(
        { error: 'Note Title is required' },
        { status: 400 }
      );
    }

    const formattedNewNote = {
      ...data,
      createdAt: new Date().toISOString(),
    };

    const result = await db.collection('notes').insertOne(formattedNewNote);

    return NextResponse.json(
      { message: 'Note created', id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to create note' },
      { status: 500 }
    );
  }
}
