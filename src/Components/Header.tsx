function Header({ children }: React.PropsWithChildren) {
  return (
    <header className="mb-10 items-center gap-10 sm:flex">
      <h1 className="text-h1 text-primary text-center font-bold">Keeper</h1>
      {children}
    </header>
  );
}

export default Header;
