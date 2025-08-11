import { useReducer } from "react";
import CreateNote from "../components/CreateNote";
import Header from "../components/Header";
import NoteArea from "../components/NoteArea";
import Search from "../components/Search";
import User from "../components/User";
import type { ID, POST } from "../types/types";

type initialStateType = {
  noteList: POST[];
  search: string;
  title: string;
  content: string;
};

type ActionType = { type: string; payload: POST | string | ID };

const InitialNotes = [
  {
    id: crypto.randomUUID(),
    title: "Today is a great day",
    content: "It is a sample text",
    createdAt: "2025-08-11T06:13:01.477Z",
    updatedAt: "2025-08-11T06:13:01.477Z",
  },
  {
    id: crypto.randomUUID(),
    title: "React is awesome",
    content: "React allows us to build reusable UI components efficiently.",
    createdAt: "2025-07-11T06:13:01.477Z",
    updatedAt: "2025-07-11T06:13:01.477Z",
  },
  {
    id: crypto.randomUUID(),
    title: "JavaScript is powerful",
    content:
      "JavaScript is the backbone of web development and enables dynamic interactions.",
    createdAt: "2025-06-11T06:13:01.477Z",
    updatedAt: "2025-06-11T06:13:01.477Z",
  },
  {
    id: crypto.randomUUID(),
    title: "Stay consistent",
    content:
      "Consistency and practice are the keys to mastering any programming language.",
    createdAt: "2025-05-11T06:13:01.477Z",
    updatedAt: "2025-05-11T06:13:01.477Z",
  },
];

const initialState = {
  noteList: InitialNotes,
  search: "",
  title: "",
  content: "",
};

function reducer(state: initialStateType, action: ActionType) {
  switch (action.type) {
    case "note/searched":
      return {
        ...state,
        search: action.payload as string,
      };
    case "note/titleAdded":
      return {
        ...state,
        title: action.payload as string,
      };
    case "note/contentAdded":
      return {
        ...state,
        content: action.payload as string,
      };
    case "note/created":
      return {
        ...state,
        noteList: [...state.noteList, action.payload as POST],
        title: "",
        content: "",
      };
    case "note/edited": {
      const noteObj = state.noteList.find((note) => note.id === action.payload);

      return {
        ...state,
        noteList: state.noteList.filter((note) => note.id !== action.payload),
        title: noteObj ? noteObj.title : "",
        content: noteObj ? noteObj.content : "",
      };
    }

    case "note/deleted":
      return {
        ...state,
        noteList: state.noteList.filter((note) => note.id !== action.payload),
      };
    default:
      throw new Error("Unknown Action");
  }
}

function AppLayout() {
  const [{ search, title, content, noteList }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  return (
    <>
      <Header>
        <Search search={search} dispatch={dispatch} />
        <User />
      </Header>
      <Main>
        <CreateNote title={title} content={content} dispatch={dispatch} />
        <NoteArea search={search} noteList={noteList} dispatch={dispatch} />
      </Main>
    </>
  );
}

export default AppLayout;
function Main({ children }: React.PropsWithChildren) {
  return <main className="lg:px-16">{children}</main>;
}
