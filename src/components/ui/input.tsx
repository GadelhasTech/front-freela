export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  )
}
