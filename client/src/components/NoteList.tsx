type NoteListProps = {
  modifiedNoteList: React.JSX.Element[];
};
function NoteList({ modifiedNoteList }: NoteListProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {modifiedNoteList}
    </ul>
  );
}

export default NoteList;
