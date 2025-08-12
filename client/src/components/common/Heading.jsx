function Heading({ text, style = "" }) {
  return <h2 className={`text-h2 font-semibold ${style}`}>{text}</h2>;
}

export default Heading;
