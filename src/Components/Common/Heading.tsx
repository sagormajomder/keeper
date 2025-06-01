import type { HeadingProps } from "../../types/types";

function Heading({ text, styles = "" }: HeadingProps) {
  return <h2 className={`text-h2 font-semibold ${styles}`}>{text}</h2>;
}

export default Heading;
