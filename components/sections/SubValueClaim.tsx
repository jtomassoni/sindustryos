type SubValueClaimProps = {
  claim: string
  detail?: string
  className?: string
}

/** Confident, slightly cheeky “pays for itself” lines used across marketing pages. */
export default function SubValueClaim({ claim, detail, className = '' }: SubValueClaimProps) {
  return (
    <aside
      className={`border-l-2 border-primary-500 pl-5 md:pl-6 ${className}`}
      aria-label="Subscription value"
    >
      <p className="text-accent-400 text-xs md:text-sm font-medium tracking-wide uppercase mb-2">
        For the cost of the sub
      </p>
      <p className="text-lg md:text-xl text-white font-display font-medium leading-snug text-balance">
        {claim}
      </p>
      {detail ? (
        <p className="mt-2 text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
          {detail}
        </p>
      ) : null}
    </aside>
  )
}
