import { useState } from "react";
import Heading from "./common/Heading";
import Note from "./Note";
import NoteList from "./NoteList";
import SortedNote from "./SortedNote";

function NoteArea({ noteList, search, onEditNote, onDeleteNote }) {
  const [sortBy, setSortBy] = useState("latest");

  const filteredNotes = noteList
    .filter(
      (note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) =>
      sortBy === "latest"
        ? new Date(b.createdAt).getMilliseconds() -
          new Date(a.createdAt).getMilliseconds()
        : new Date(a.createdAt).getMilliseconds() -
          new Date(b.createdAt).getMilliseconds(),
    );

  const modifiedNoteList = filteredNotes.map((note) => (
    <Note
      note={note}
      key={note.id}
      onEditNote={onEditNote}
      onDeleteNote={onDeleteNote}
    />
  ));

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
        <SortedNote setSortBy={setSortBy} />
        <p className="text-s1">Total note: {numNoteList}</p>
      </div>
      <NoteList modifiedNoteList={modifiedNoteList} />
    </section>
  );
}

export default NoteArea;
