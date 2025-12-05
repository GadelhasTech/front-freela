import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GadelhaWork's - Freelancers Qualificados",
  description:
    "Conecte-se com freelancers qualificados prontos para trabalhar no seu projeto. Publicação gratuita, satisfação garantida e pagamentos protegidos.",
  generator: "v0.app",
  keywords: ["freelancers", "trabalho remoto", "contratar", "projetos"],
  openGraph: {
    title: "GadelhaWork's - Freelancers Qualificados",
    description: "Conecte-se com freelancers qualificados prontos para trabalhar no seu projeto.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
