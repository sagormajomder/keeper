import Note from "./Note";

import PropTypes from "prop-types";

NoteList.propTypes = {
  noteList: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  onEditNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

function NoteList({ noteList, search, onEditNote, onDeleteNote }) {
  const modifiedNoteList = [];

  noteList.forEach((note) => {
    if (note.title.toLowerCase().indexOf(search.toLowerCase()) === -1) return;

    modifiedNoteList.push(
      <Note
        id={note.id}
        title={note.title}
        note={note.note}
        key={note.id}
        onEditNote={onEditNote}
        onDeleteNote={onDeleteNote}
      />,
    );
  });

  return (
    <ul className="grid gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {modifiedNoteList}
    </ul>
  );
}

export default NoteList;
