import { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import Header from "./Header";
import NoteArea from "./NoteArea";
import Search from "./Search";

const API_URL = import.meta.env.VITE_API_URL;

// const InitialNotes = [
//   {
//     id: crypto.randomUUID(),
//     title: "Today is a great day",
//     content: "It is a sample text",
//     createdAt: "2025-08-11T06:50:37.455Z",
//     updatedAt: "2025-08-11T06:50:37.455Z",
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "React is awesome",
//     content: "React allows us to build reusable UI components efficiently.",
//     createdAt: "2025-07-11T06:50:37.455Z",
//     updatedAt: "2025-07-11T06:50:37.455Z",
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "JavaScript is powerful",
//     content:
//       "JavaScript is the backbone of web development and enables dynamic interactions.",
//     createdAt: "2025-06-11T06:50:37.455Z",
//     updatedAt: "2025-06-11T06:50:37.455Z",
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "Stay consistent",
//     content:
//       "Consistency and practice are the keys to mastering any programming language.",
//     createdAt: "2025-05-11T06:50:37.455Z",
//     updatedAt: "2025-05-11T06:50:37.455Z",
//   },
// ];

function Keeper() {
  const [noteList, setNoteList] = useState([]);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Add new Note
  const handleAddNote = async function (newNote) {
    try {
      const res = await fetch(`${API_URL}/notes`, {
        method: "POST",
        body: JSON.stringify(newNote),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to creating new note");

      const { data: note } = await res.json();

      setNoteList((currList) => [...currList, note]);
    } catch (error) {
      console.log(error.message);
    }
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
  const handleDeleteNote = async function (noteID) {
    try {
      const res = await fetch(`${API_URL}/notes`, {
        method: "DELETE",
        body: JSON.stringify({ noteID }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to deleting a note");

      const { id } = await res.json();

      setNoteList((currList) => currList.filter((n) => n.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  // Get all notes from DB
  useEffect(function () {
    try {
      async function getNoteList() {
        const res = await fetch(`${API_URL}/notes`);
        if (!res.ok) throw new Error("Failed to getting notes");

        const { data } = await res.json();

        setNoteList(data);
      }

      getNoteList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Header>
        <Search search={search} onSearch={setSearch} />
      </Header>
      <Main>
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
      </Main>
    </>
  );
}

export default Keeper;

function Main({ children }) {
  return <main className="lg:px-16">{children}</main>;
}
