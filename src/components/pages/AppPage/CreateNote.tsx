'use client';

import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/Heading';
import { NOTE } from '@/types/type';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function CreateNoteContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editNoteId = searchParams.get('edit');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<NOTE>();

  useEffect(() => {
    if (editNoteId) {
      const fetchNote = async () => {
        try {
          const res = await fetch(`/api/notes/${editNoteId}`);
          if (res.ok) {
            const data: NOTE = await res.json();
            setValue('noteTitle', data.noteTitle);
            setValue('noteContent', data.noteContent);
          } else {
            toast.error('Failed to fetch note for editing');
          }
        } catch (error) {
          console.error(error);
          toast.error('An error occurred while fetching the note');
        }
      };
      fetchNote();
    } else {
      reset({
        noteTitle: '',
        noteContent: '',
      });
    }
  }, [editNoteId, setValue, reset]);

  async function handleNoteSubmit(data: NOTE) {
    if (editNoteId) {
      // Update existing note
      const res = await fetch(`/api/notes/${editNoteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.message) {
        toast.success('Note Updated Successfully');
        reset();
        router.push('/');
        router.refresh();
      }
    } else {
      // Create new note
      const newNote = data;
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });

      const result = await res.json();

      if (result.id) {
        toast.success('Note is created Successfully');
        reset();
        router.refresh();
      }
    }
  }
  return (
    <section className='w-full flex flex-col items-center justify-center p-4'>
      <Heading text='Write your note' className='text-center mb-6' />
      <div className='w-full max-w-2xl'>
        <form
          className='space-y-4 w-full flex flex-col items-center'
          onSubmit={handleSubmit(handleNoteSubmit)}>
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
            {editNoteId ? 'Update Note' : 'Save Note'}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default function CreateNote() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreateNoteContent />
    </Suspense>
  );
}
