// import PropTypes from "prop-types";

// Button.propTypes = {
//   type: PropTypes.string.isRequired,
//   style: PropTypes.string.isRequired,
//   children: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };

function Button({ type, style, children, onClick = () => {} }) {
  return (
    <button
      type={type}
      className={`bg-primary cursor-pointer text-white ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
