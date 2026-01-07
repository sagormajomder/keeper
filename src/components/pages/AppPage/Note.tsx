'use client';
import { NOTE } from '@/types/type';
import { Pencil, Trash } from 'lucide-react';

export default function Note({ note }: Readonly<{ key: string; note: NOTE }>) {
  const { noteTitle, noteContent } = note;
  return (
    <li className='bg-primary/10 relative rounded-lg p-4 shadow-md'>
      <h3 className='text-h3 mb-1 pr-10 font-semibold'>{noteTitle}</h3>
      <p>{noteContent}</p>
      {/* delete and update note Icons */}
      <div className='absolute top-2 right-2 flex items-center gap-2'>
        <Trash />
        <Pencil />
      </div>
    </li>
  );
}
