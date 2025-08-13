import SearchIcon from "../assets/Search.svg";

function Search({ search, onSearch }) {
  return (
    <div className="relative flex w-full items-center sm:w-3/5">
      <img src={SearchIcon} alt="Search Icon" className="absolute left-3" />

      <input
        type="text"
        className="bg-primary/10 focus:outline-primary/75 w-full rounded-lg py-2 pl-10 shadow-lg"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
