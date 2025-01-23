import PropTypes from 'prop-types';
function Button({ children }) {
  return <button className='btn btn-post'>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Button;
