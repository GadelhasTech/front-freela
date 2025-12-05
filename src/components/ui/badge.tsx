export function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-md text-sm font-medium border ${className}`}
    >
      {children}
    </span>
  );
}
