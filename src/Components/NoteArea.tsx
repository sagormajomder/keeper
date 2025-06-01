import { useState, type JSX } from "react";
import type { NoteAreaProps } from "../types/types";
import Heading from "./Common/Heading";
import Note from "./Note";
import NoteList from "./NoteList";
import SortedNote from "./SortedNote";

function NoteArea({
  noteList,
  search,
  onEditNote,
  onDeleteNote,
}: NoteAreaProps) {
  const [sortBy, setSortBy] = useState("latest");

  const filteredNotes = noteList
    .filter(
      (note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase()),
    )
    .slice()
    .sort((a, b) => (sortBy === "latest" ? b.date - a.date : a.date - b.date));

  const modifiedNoteList: JSX.Element[] = filteredNotes.map((note) => (
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
