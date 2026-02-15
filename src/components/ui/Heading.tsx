import { HeadingProps } from '@/types/type';

function Heading({ text, className = '' }: Readonly<HeadingProps>) {
  return <h2 className={`text-h2 font-semibold ${className}`}>{text}</h2>;
}

export default Heading;
