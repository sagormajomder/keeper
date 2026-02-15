'use client';
import { Pencil, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function NoteActions({ id }: Readonly<{ id: string }>) {
  const router = useRouter();
  async function handleNoteDelete(id: string) {
    const res = await fetch(`/api/notes/${id}`, {
      method: 'DELETE',
    });
    const result = await res.json();
    // console.log(result);
    if (result.message) {
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
  );
}
