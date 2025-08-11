// import PropTypes from "prop-types";
// Header.propTypes = {
//   children: PropTypes.node.isRequired,
// };

function Header({ children }) {
  return (
    <header className="mb-10 items-center gap-10 sm:flex">
      <h1 className="text-h1 text-primary text-center font-bold">Keeper</h1>
      {children}
    </header>
  );
}

export default Header;
