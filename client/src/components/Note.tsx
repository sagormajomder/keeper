import Edit from "../assets/Edit.svg";
import Delete from "../assets/Trash.svg";
import type { ID, POST } from "../types/types";

type NoteType = Omit<POST, "date">;
type NoteProps = {
  note: NoteType;
  dispatch: React.Dispatch<{
    type: string;
    payload: ID;
  }>;
};

function Note({ note, dispatch }: NoteProps) {
  const { id, title, content } = note;
  return (
    <li className="bg-primary/10 relative rounded-lg p-4 shadow-md">
      <h3 className="text-h3 mb-1 pr-10 font-semibold">{title}</h3>
      <p>{content}</p>
      {/* delete and update note Icons */}
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <img
          className="cursor-pointer"
          src={Edit}
          alt="edit icon"
          onClick={() => dispatch({ type: "note/edited", payload: id })}
        />
        <img
          className="cursor-pointer"
          src={Delete}
          alt="delete icon"
          onClick={() => dispatch({ type: "note/deleted", payload: id })}
        />
      </div>
    </li>
  );
}

export default Note;
