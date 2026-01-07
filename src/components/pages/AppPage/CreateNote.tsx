'use client';

import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/Heading';
import { NOTE } from '@/types/type';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function CreateNote() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NOTE>();

  async function handleNoteAdd(data: NOTE) {
    const newNote = data;

    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    });

    const result = await res.json();
    // console.log(result);

    if (result.id) {
      toast.success('Note is created Successfully');
      reset();
      router.refresh();
    }
  }
  return (
    <section className='w-full flex flex-col items-center justify-center p-4'>
      <Heading text='Write your note' className='text-center mb-6' />
      <div className='w-full max-w-2xl'>
        <form
          className='space-y-4 w-full flex flex-col items-center'
          onSubmit={handleSubmit(handleNoteAdd)}>
          <div className='sm:w-xl w-full space-y-4'>
            <input
              className='bg-[#eff2fc] dark:bg-primary/10 focus:outline-none focus:ring-1 focus:ring-primary/50 w-full rounded-lg px-5 py-4 text-base placeholder:text-muted-foreground/70'
              type='text'
              placeholder='Enter note title'
              {...register('noteTitle', { required: true })}
            />
            {errors.noteTitle?.type === 'required' && (
              <p className='text-destructive text-sm w-full px-1'>
                Note Title is required!
              </p>
            )}
            <textarea
              className='bg-[#eff2fc] dark:bg-primary/10 focus:outline-none focus:ring-1 focus:ring-primary/50 rounded-lg px-5 py-4 w-full min-h-[120px] resize-none text-base placeholder:text-muted-foreground/70'
              placeholder='Take a note'
              {...register('noteContent')}
            />
          </div>
          <Button
            type='submit'
            className='self-center bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-2 rounded-md font-medium transition-colors'>
            Save Note
          </Button>
        </form>
      </div>
    </section>
  );
}
