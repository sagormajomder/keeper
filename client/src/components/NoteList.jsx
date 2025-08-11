// import PropTypes from "prop-types";

// NoteList.propTypes = {
//   modifiedNoteList: PropTypes.array.isRequired,
// };

function NoteList({ modifiedNoteList }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {modifiedNoteList}
    </ul>
  );
}

export default NoteList;
