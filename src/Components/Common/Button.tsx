import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type: "submit" | "button" | "reset";
  styles: string;
  onClick?: () => void;
}

function Button({ type, styles, children, onClick = () => {} }: ButtonProps) {
  return (
    <button
      type={type}
      className={`bg-primary cursor-pointer text-white ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
