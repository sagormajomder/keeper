import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./common/Button";
import Heading from "./common/Heading";
import Note from "./Note";
import NoteList from "./NoteList";

NoteArea.propTypes = {
  noteList: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  onEditNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

function NoteArea({ noteList, search, onEditNote, onDeleteNote }) {
  const [sortBy, setSortBy] = useState("latest");
  let modifiedNoteList = [];

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

  if (sortBy === "latest") {
    modifiedNoteList = modifiedNoteList.toSorted(
      (node1, node2) => node2.props.note.date - node1.props.note.date,
    );
  }
  if (sortBy === "oldest") {
    modifiedNoteList = modifiedNoteList.toSorted(
      (node1, node2) => node1.date - node2.date,
    );
  }

  const numNoteList = modifiedNoteList.length;

  if (!numNoteList)
    return (
      <p className="text-s1 text-center">
        {search ? "Notes are not taken yet 💔" : "Please take some note 🥰"}
      </p>
    );

  return (
    <section className="mb-10">
      <div className="mb-2 flex flex-wrap items-center gap-1 sm:gap-6">
        <Heading text="All notes" />

        <div className="sm:text-body text-caption flex grow-1 flex-wrap gap-2">
          <Button
            type="button"
            style="rounded-sm px-3 py-1"
            onClick={() => setSortBy("oldest")}
          >
            Sort by oldest
          </Button>
          <Button
            type="button"
            style=" rounded-sm px-3 py-1"
            onClick={() => setSortBy("latest")}
          >
            Sort by latest
          </Button>
        </div>

        <p className="text-s1">Total note: {numNoteList}</p>
      </div>
      <NoteList modifiedNoteList={modifiedNoteList} />
    </section>
  );
}

export default NoteArea;
