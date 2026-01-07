import Heading from '@/components/ui/Heading';
import { NOTE } from '@/types/type';
import Note from './Note';

export default async function NoteArea() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  const res = await fetch(`${baseUrl}/api/notes`);
  const notes: NOTE[] = await res.json();

  return (
    <section className='mb-10'>
      <div className='mb-2 flex flex-wrap items-center gap-1 sm:gap-6'>
        <Heading text='All notes' />
        {/* <SortedNote setSortBy={setSortBy} /> */}
        <p className='text-s1'>Total note: {notes.length}</p>
      </div>
      <ul className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 lg:grid-cols-4'>
        {notes.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </section>
  );
}
