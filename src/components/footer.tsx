import SocialLinks from "@/src/components/social-links"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          <p className="text-xs sm:text-sm text-gray-600">© {currentYear} | Todos os direitos reservados</p>

          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
