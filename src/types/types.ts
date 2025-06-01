import type { Dispatch, JSX, SetStateAction } from "react";

export type HeadingProps = {
  text: string;
  styles?: string;
};

export type ID = `${string}-${string}-${string}-${string}-${string}`;

export type POST = {
  id: ID;
  title: string;
  content: string;
  date: number;
};

export type SearchComponentProps = {
  search: string;
  onSearch: Dispatch<React.SetStateAction<string>>;
};

export type CreateNoteProps = {
  title: string;
  onTitle: Dispatch<SetStateAction<string>>;
  content: string;
  onContent: Dispatch<SetStateAction<string>>;
  onAddNote: (note: POST) => void;
};

export type NoteAreaProps = {
  noteList: POST[];
  search: string;
  onEditNote: (id: ID) => void;
  onDeleteNote: (id: ID) => void;
};

type Note = Pick<POST, "id" | "title" | "content">;
export type NoteProps = Pick<NoteAreaProps, "onEditNote" | "onDeleteNote"> & {
  note: Note;
};

export type SortedNoteProps = {
  setSortBy: Dispatch<SetStateAction<string>>;
};

export type NoteListProps = {
  modifiedNoteList: JSX.Element[];
};
