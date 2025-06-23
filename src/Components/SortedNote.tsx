import Button from "./common/Button";
type SortedNoteProps = {
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

function SortedNote({ setSortBy }: SortedNoteProps) {
  return (
    <div className="sm:text-body text-caption flex grow-1 flex-wrap gap-2">
      <Button
        type="button"
        styles="rounded-sm px-3 py-1"
        onClick={() => setSortBy("oldest")}
      >
        Sort by oldest
      </Button>
      <Button
        type="button"
        styles=" rounded-sm px-3 py-1"
        onClick={() => setSortBy("latest")}
      >
        Sort by latest
      </Button>
    </div>
  );
}

export default SortedNote;
