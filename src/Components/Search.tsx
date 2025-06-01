// import SearchIcon from "../assets/Search.svg";
import SearchIcon from "../assets/Search.svg";
import type { SearchComponentProps } from "../types/types";
import InputField from "./Common/InputField";

function Search({ search, onSearch }: SearchComponentProps) {
  return (
    <div className="relative flex w-full items-center sm:w-3/5">
      <img src={SearchIcon} alt="Search Icon" className="absolute left-3" />
      <InputField
        placeholder="Search"
        search={search}
        isSearch={true}
        onSearch={onSearch}
      />
    </div>
  );
}

export default Search;
