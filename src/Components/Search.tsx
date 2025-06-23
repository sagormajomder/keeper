import SearchIcon from "../assets/Search.svg";

type SearchComponentProps = {
  search: string;
  dispatch: React.Dispatch<{
    type: string;
    payload: string;
  }>;
};

function Search({ search, dispatch }: SearchComponentProps) {
  return (
    <div className="relative flex w-full items-center sm:w-3/5">
      <img src={SearchIcon} alt="Search Icon" className="absolute left-3" />
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        className="bg-primary/10 focus:outline-primary/75 w-full rounded-lg py-2 pl-10 shadow-lg"
        onChange={(e) =>
          dispatch({
            type: "note/searched",
            payload: e.target.value,
          })
        }
      />
    </div>
  );
}

export default Search;
