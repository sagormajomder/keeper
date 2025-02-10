import PropTypes from "prop-types";
import Heading from "./Common/Heading";
import Note from "./Note";
import NoteList from "./NoteList";

NoteArea.propTypes = {
  noteList: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  onEditNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

function NoteArea({ noteList, search, onEditNote, onDeleteNote }) {
  const modifiedNoteList = [];

  // updated noteList according to search
  noteList.forEach((note) => {
    if (
      note.title.toLowerCase().indexOf(search.toLowerCase()) === -1 &&
      note.content.toLowerCase().indexOf(search.toLowerCase()) === -1
    )
      return;

    modifiedNoteList.push(
      <Note
        note={note}
        key={note.id}
        onEditNote={onEditNote}
        onDeleteNote={onDeleteNote}
      />,
    );
  });

  const numNoteList = modifiedNoteList.length;

  if (!numNoteList)
    return (
      <p className="text-s1 text-center">
        {search ? "Notes are not taken yet 💔" : "Please take some note 🥰"}
      </p>
    );

  return (
    <section className="mb-10">
      <div className="flex justify-between">
        <Heading text="All notes" />
        <p className="text-s1">Total note: {numNoteList}</p>
      </div>
      <NoteList noteList={modifiedNoteList} />
    </section>
  );
}

export default NoteArea;
