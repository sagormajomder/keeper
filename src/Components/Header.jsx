import PropTypes from "prop-types";
import Search from "./Search";
Header.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

function Header({ search, onSearch }) {
  return (
    <header className="mb-10 items-center gap-10 sm:flex">
      <h1 className="text-h1 text-primary text-center font-bold">Keeper</h1>
      <Search search={search} onSearch={onSearch} />
    </header>
  );
}

export default Header;
