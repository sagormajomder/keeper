import PropTypes from "prop-types";

NoteList.propTypes = {
  noteList: PropTypes.array.isRequired,
};

function NoteList({ noteList }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {noteList}
    </ul>
  );
}

export default NoteList;
