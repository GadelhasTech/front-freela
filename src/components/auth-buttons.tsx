"use client"
import { Button } from "./ui/button"


export default function AuthButtons() {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Button
        variant="outline"
        className="hidden sm:inline-flex border-gray-300 text-xs md:text-base text-gray-900 hover:bg-gray-50 bg-transparent"
        onClick={() => console.log("Login clicked")}
      >
        Login
      </Button>
    </div>

    // <Button
    //     className="bg-purple-700 hover:bg-purple-800 text-white text-xs md:text-base px-3 md:px-6 py-2 md:py-2 h-auto"
    //     onClick={() => console.log("Cadastre-se clicked")}
    //   >
    //     Cadastre-se
    //   </Button>
  )
}
