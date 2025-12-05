import Link from "next/link";
import NavLinks from "./navbar-links";
import AuthButtons from "./auth-buttons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-5">
          <Link
            href="/"
            className="flex-shrink-0 text-xl md:text-2xl font-bold text-purple-700 hover:text-purple-800 transition-colors"
            aria-label="GadelhaWork's - Home"
          >
            GadelhaWork&apos;s
          </Link>

          <NavLinks />

          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
