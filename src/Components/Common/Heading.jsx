import PropTypes from "prop-types";

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
};

function Heading({ text, style = "" }) {
  return <h2 className={"text-h2 mb-2 font-semibold " + style}>{text}</h2>;
}

export default Heading;
