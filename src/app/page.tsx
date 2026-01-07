import CreateNote from '@/components/pages/AppPage/CreateNote';
import NoteArea from '@/components/pages/AppPage/NoteArea';

export default function AppPage() {
  return (
    <div className='py-10 space-y-10'>
      <CreateNote />
      {/* <NoteArea /> */}
    </div>
  );
}
