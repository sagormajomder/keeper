import Heading from '@/components/ui/Heading';
import prisma from '@/lib/db';
import { NOTE } from '@/types/type';
import NoteActions from './NoteActions';

export default async function NoteArea() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notes`, {
    cache: 'no-store',
  });

  const notes: NOTE[] = await res.json();

  return (
    <section className='mb-10'>
      <div className='mb-2 flex flex-wrap items-center gap-1 sm:gap-6'>
        <Heading text='All notes' />
        <p className='text-s1'>Total note: {notes.length}</p>
      </div>
      {!notes.length ? (
        <p>Please create your first note</p>
      ) : (
        <ul className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 lg:grid-cols-4'>
          {notes.map(note => (
            <Note key={note.id} note={note} />
          ))}
        </ul>
      )}
    </section>
  );
}

function Note({ note }: Readonly<{ note: NOTE }>) {
  const { noteTitle, noteContent, id } = note;

  return (
    <li className='bg-primary/10 relative rounded-lg p-4 shadow-md'>
      <h3 className='text-h3 mb-1 pr-10 font-semibold'>{noteTitle}</h3>
      <p>{noteContent}</p>
      {/* delete and update note */}
      <NoteActions id={id} />
    </li>
  );
}
