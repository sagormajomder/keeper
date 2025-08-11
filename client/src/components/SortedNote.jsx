import Button from "./common/Button";

// SortedNote.propTypes = {
//   setSortBy: PropTypes.func.isRequired,
// };

function SortedNote({ setSortBy }) {
  return (
    <div className="sm:text-body text-caption flex grow-1 flex-wrap gap-2">
      <Button
        type="button"
        style="rounded-sm px-3 py-1"
        onClick={() => setSortBy("oldest")}
      >
        Sort by oldest
      </Button>
      <Button
        type="button"
        style=" rounded-sm px-3 py-1"
        onClick={() => setSortBy("latest")}
      >
        Sort by latest
      </Button>
    </div>
  );
}

export default SortedNote;
