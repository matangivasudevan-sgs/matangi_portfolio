import Reveal from './Reveal'

/**
 * Consistent section heading used across all sections.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left' : 'text-center'

  return (
    <Reveal>
      <div className={`mx-auto max-w-2xl ${alignment}`}>
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-text">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-heading sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-4 text-sm leading-6 text-muted sm:text-base">{subtitle}</p>}
        <div
          className={`mt-5 h-1 w-12 rounded-full bg-accent ${align === 'left' ? '' : 'mx-auto'}`}
          aria-hidden="true"
        />
      </div>
    </Reveal>
  )
}
