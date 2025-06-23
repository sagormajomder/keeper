import { Link } from "react-router";

function Header({ children }: React.PropsWithChildren) {
  return (
    <header className="mb-10 flex items-center justify-between gap-10">
      <Link to="/app">
        <h1 className="text-h1 text-primary text-center font-bold">Keeper</h1>
      </Link>
      {children}
    </header>
  );
}

export default Header;
