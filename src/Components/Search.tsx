import SearchIcon from "../assets/Search.svg";
import InputField from "./Common/InputField";

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
      <InputField
        placeholder="Search"
        search={search}
        isSearch={true}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Search;
