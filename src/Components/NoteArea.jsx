import PropTypes from "prop-types";
import Heading from "./Common/Heading";
import NoteList from "./NoteList";

NoteArea.propTypes = {
  noteList: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  onEditNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

function NoteArea({ noteList, search, onEditNote, onDeleteNote }) {
  if (noteList.length === 0) return;

  return (
    <section className="mb-10">
      <Heading text="All notes" />
      <NoteList
        noteList={noteList}
        search={search}
        onEditNote={onEditNote}
        onDeleteNote={onDeleteNote}
      />
    </section>
  );
}

export default NoteArea;
