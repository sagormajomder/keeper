import { useReducer } from "react";
import type { ID, POST } from "../types/types";
import CreateNote from "./CreateNote";
import Header from "./Header";
import NoteArea from "./NoteArea";
import Search from "./Search";

type AppState = {
  noteList: POST[];
  search: string;
  title: string;
  content: string;
};

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

const initialState = {
  noteList: InitialNotes,
  search: "",
  title: "",
  content: "",
};

function reducer(
  state: AppState,
  action: { type: string; payload: POST | string | ID },
): AppState {
  switch (action.type) {
    case "searchNotes":
      return {
        ...state,
        search: action.payload as string,
      };
    case "addNoteTitle":
      return {
        ...state,
        title: action.payload as string,
      };
    case "addNoteContent":
      return {
        ...state,
        content: action.payload as string,
      };
    case "addNote":
      return {
        ...state,
        noteList: [...state.noteList, action.payload as POST],
        title: "",
        content: "",
      };
    case "editNote": {
      const noteObj = state.noteList.find((note) => note.id === action.payload);

      return {
        ...state,
        noteList: state.noteList.filter((note) => note.id !== action.payload),
        title: noteObj ? noteObj.title : "",
        content: noteObj ? noteObj.content : "",
      };
    }

    case "deleteNote":
      return {
        ...state,
        noteList: state.noteList.filter((note) => note.id !== action.payload),
      };
    default:
      throw new Error("Unknown Action");
  }
}

function Keeper() {
  const [{ search, title, content, noteList }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  return (
    <>
      <Header>
        <Search search={search} dispatch={dispatch} />
      </Header>
      <Main>
        <CreateNote title={title} content={content} dispatch={dispatch} />
        <NoteArea search={search} noteList={noteList} dispatch={dispatch} />
      </Main>
    </>
  );
}

export default Keeper;
function Main({ children }: React.PropsWithChildren) {
  return <main className="lg:px-16">{children}</main>;
}
