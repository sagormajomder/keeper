// import PropTypes from "prop-types";
import { useState } from "react";
import CreateNote from "./CreateNote";
import Header from "./Header";
import NoteArea from "./NoteArea";
import Search from "./Search";

const InitialNotes = [
  {
    id: crypto.randomUUID(),
    title: "Today is a great day",
    content: "It is a sample text",
    date: 1738393206862,
  },
  {
    id: crypto.randomUUID(),
    title: "React is awesome",
    content: "React allows us to build reusable UI components efficiently.",
    date: 1738479606862,
  },
  {
    id: crypto.randomUUID(),
    title: "JavaScript is powerful",
    content:
      "JavaScript is the backbone of web development and enables dynamic interactions.",
    date: 1738566006862,
  },
  {
    id: crypto.randomUUID(),
    title: "Stay consistent",
    content:
      "Consistency and practice are the keys to mastering any programming language.",
    date: 1738652406862,
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

// Main.propTypes = {
//   children: PropTypes.node.isRequired,
// };
function Main({ children }) {
  return <main className="lg:px-16">{children}</main>;
}
