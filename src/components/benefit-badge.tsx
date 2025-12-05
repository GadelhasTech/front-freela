interface BenefitBadgeProps {
  icon: string
  label: string
}

export default function BenefitBadge({ icon, label }: BenefitBadgeProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 text-gray-700 flex-shrink-0">
      <span className="text-lg sm:text-xl" aria-hidden="true">
        {icon}
      </span>
      <span className="font-medium text-xs sm:text-sm">{label}</span>
    </div>
  )
}
