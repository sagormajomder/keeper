export default function Container({
  children,
  className = '',
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <div className={`w-11/12 mx-auto px-4 ${className}`}>{children}</div>;
}
