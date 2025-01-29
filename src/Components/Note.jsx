import PropTypes from "prop-types";
import Edit from "../assets/Edit.svg";
import Delete from "../assets/Trash.svg";

Note.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  onEditNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

function Note({ id, title, note, onEditNote, onDeleteNote }) {
  return (
    <li className="bg-primary/10 relative rounded-lg p-4 shadow-md">
      <h3 className="text-h3 mb-1 font-semibold">{title}</h3>
      <p>{note}</p>
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <img
          className="cursor-pointer"
          src={Edit}
          alt="edit icon"
          onClick={() => onEditNote(id)}
        />
        <img
          className="cursor-pointer"
          src={Delete}
          alt="delete icon"
          onClick={() => onDeleteNote(id)}
        />
      </div>
    </li>
  );
}

export default Note;
