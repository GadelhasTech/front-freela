import Image from "next/image"

export default function HeroImage() {
  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex-shrink-0">
      <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-yellow-200 to-orange-100 shadow-lg">
        <Image
          src="/woman-freelancer-professional-smiling.jpg"
          alt="Freelancer profissional sorridente"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
        />
      </div>
    </div>
  )
}
