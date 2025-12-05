import Link from "next/link"

export default function NavLinks() {
  const links = [
    { href: "/criar", label: "Quero contratar" },
    { href: "/trabalhar", label: "Quero trabalhar" },
  ]

  return (
    <nav className="hidden md:flex items-center gap-8 lg:gap-12">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm md:text-base font-medium text-gray-900 hover:text-purple-700 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
