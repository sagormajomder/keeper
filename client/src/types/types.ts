export type ID = `${string}-${string}-${string}-${string}-${string}`;

export type POST = {
  id?: ID;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteAreaProps = {
  noteList: POST[];
  search: string;
  dispatch: React.Dispatch<{
    type: string;
    payload: ID;
  }>;
};
