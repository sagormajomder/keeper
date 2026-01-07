export default function Container({
  children,
  className = '',
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div className={`max-w-[95vw] mx-auto px-4 ${className}`}>{children}</div>
  );
}
