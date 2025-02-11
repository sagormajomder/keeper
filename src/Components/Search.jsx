import PropTypes from "prop-types";
import SearchIcon from "../assets/Search.svg";
import InputField from "./common/InputField";

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
function Search({ search, onSearch }) {
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
