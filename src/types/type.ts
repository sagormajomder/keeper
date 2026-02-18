export type HeadingProps = {
  text: string;
  className?: string;
};

export type NOTE = {
  id: string;
  noteTitle: string;
  noteContent?: string | null;
  createdAt: string;
};
