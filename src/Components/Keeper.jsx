import { useState } from "react";
import CreateNote from "./CreateNote";
import Header from "./Header";
import NoteArea from "./NoteArea";

const InitialNotes = [
  {
    id: crypto.randomUUID(),
    title: "Today is a great day",
    content: "It is a sample text",
  },
  {
    id: crypto.randomUUID(),
    title: "React is awesome",
    content: "React allows us to build reusable UI components efficiently.",
  },
  {
    id: crypto.randomUUID(),
    title: "JavaScript is powerful",
    content:
      "JavaScript is the backbone of web development and enables dynamic interactions.",
  },
  {
    id: crypto.randomUUID(),
    title: "Stay consistent",
    content:
      "Consistency and practice are the keys to mastering any programming language.",
  },
];

function Keeper() {
  const [noteList, setNoteList] = useState(InitialNotes);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Add new Note
  const handleAddNote = function (newNote) {
    setNoteList((currList) => [...currList, newNote]);
  };

  // Edit Note
  const handleEditNote = function (id) {
    // console.log(id);
    const noteObj = noteList.find((n) => n.id === id);
    setTitle(noteObj.title);
    setContent(noteObj.content);
    handleDeleteNote(id);
  };

  // Delete Note
  const handleDeleteNote = function (id) {
    // console.log(id);
    setNoteList((currList) => currList.filter((n) => n.id !== id));
  };

  return (
    <>
      <Header search={search} onSearch={setSearch} />
      <main className="lg:px-16">
        <CreateNote
          title={title}
          onTitle={setTitle}
          content={content}
          onContent={setContent}
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
