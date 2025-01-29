import { useState } from "react";
import CreateNote from "./CreateNote";
import Header from "./Header";
import NoteArea from "./NoteArea";

const InitialNotes = [
  {
    id: crypto.randomUUID(),
    title: "Hello World!",
    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    id: crypto.randomUUID(),
    title: "Today is a great day",
    note: "It is a sample text",
  },
];

function Keeper() {
  const [noteList, setNoteList] = useState(InitialNotes);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  // Add new Note
  const handleAddNote = function (newNote) {
    setNoteList((currList) => [...currList, newNote]);
  };

  // Edit Note
  const handleEditNote = function (id) {
    // console.log(id);
    setTitle(noteList.find((n) => n.id === id).title);
    setNoteText(noteList.find((n) => n.id === id).note);
    handleDeleteNote(id);
  };

  // Delete Note
  const handleDeleteNote = function (id) {
    // console.log(id);
    setNoteList(noteList.filter((n) => n.id !== id));
  };

  return (
    <>
      <Header search={search} onSearch={setSearch} />
      <main className="lg:px-16">
        <CreateNote
          title={title}
          setTitle={setTitle}
          noteText={noteText}
          setNoteText={setNoteText}
          onAddNote={handleAddNote}
        />
        <NoteArea
          search={search}
          noteList={noteList}
          onEditNote={handleEditNote}
          onDeleteNote={handleDeleteNote}
        />
      </main>
    </>
  );
}

export default Keeper;
