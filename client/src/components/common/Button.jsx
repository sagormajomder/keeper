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
