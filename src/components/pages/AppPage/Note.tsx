'use client';
import { NOTE } from '@/types/type';
import { Pencil, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Note({ note }: Readonly<{ key: string; note: NOTE }>) {
  const router = useRouter();
  const { noteTitle, noteContent, id } = note;

  async function handleNoteDelete(id: string) {
    const res = await fetch(`/api/notes/${id}`, {
      method: 'DELETE',
    });
    const result = await res.json();
    if (result.result.deletedCount) {
      toast.success('Note is Deleted');
      router.refresh();
    }
  }

  function handleNoteEdit() {
    router.push(`/?edit=${id}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <li className='bg-primary/10 relative rounded-lg p-4 shadow-md'>
      <h3 className='text-h3 mb-1 pr-10 font-semibold'>{noteTitle}</h3>
      <p>{noteContent}</p>
      {/* delete and update note Icons */}
      <div className='absolute top-2 right-2 flex items-center gap-2'>
        <Trash
          onClick={() => handleNoteDelete(id)}
          className='text-destructive cursor-pointer  hover:text-chart-1 transition-colors'
        />
        <Pencil
          onClick={handleNoteEdit}
          className='text-chart-5 cursor-pointer hover:text-chart-4 transition-colors'
        />
      </div>
    </li>
  );
}
