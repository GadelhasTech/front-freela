import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"

export const metadata = {
  title: "GadelhaWork's - Freelancers Qualificados",
  description: "Conecte-se com freelancers qualificados prontos para trabalhar no seu projeto",
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}
