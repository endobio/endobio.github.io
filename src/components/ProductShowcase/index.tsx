import { useEffect, useRef, useState, type ReactNode } from 'react'

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

// ─── Phone frame ─────────────────────────────────────────────────────────────

function PhoneFrame({
  src,
  alt,
  visible,
  delay = 0,
}: {
  src: string
  alt: string
  visible: boolean
  delay?: number
}) {
  return (
    <div
      className="relative group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.97)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {/* Glow behind phone */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        style={{ background: 'radial-gradient(ellipse at center, #4caf50 0%, transparent 70%)' }}
      />
      <img
        src={src}
        alt={alt}
        className="relative z-10 mx-auto drop-shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 ease-out"
        style={{ maxHeight: 620, width: 'auto' }}
      />
    </div>
  )
}

// ─── Feature row ──────────────────────────────────────────────────────────────

function FeatureRow({
  step,
  label,
  headline,
  body,
  bullets,
  imageSrc,
  imageAlt,
  reverse = false,
  children,
}: {
  step: string
  label: string
  headline: string
  body: string
  bullets: string[]
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  children?: ReactNode
}) {
  const { ref, visible } = useReveal()

  const textCol = (
    <div
      className="flex flex-col justify-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : reverse ? 'translateX(24px)' : 'translateX(-24px)',
        transition: 'opacity 0.7s ease 100ms, transform 0.7s ease 100ms',
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span
          className="text-xs font-bold tracking-widest uppercase"
          style={{ color: '#4caf50' }}
        >
          {label}
        </span>
        <span className="text-xs text-gray-300 font-mono">{step}</span>
      </div>

      <h3
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight"
        style={{ letterSpacing: '-0.02em' }}
      >
        {headline}
      </h3>
      <p className="text-gray-600 leading-7 mb-7 text-base">{body}</p>

      <ul className="space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
            <span
              className="mt-1 h-4 w-4 flex-shrink-0 rounded-full flex items-center justify-center"
              style={{ background: '#f0faf0', border: '1px solid rgba(76,175,80,0.3)' }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#4caf50' }} />
            </span>
            {b}
          </li>
        ))}
      </ul>

      {children}
    </div>
  )

  const imageCol = (
    <PhoneFrame src={imageSrc} alt={imageAlt} visible={visible} delay={200} />
  )

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      {reverse ? (
        <>
          {imageCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imageCol}
        </>
      )}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ProductShowcase() {
  const headerReveal = useReveal()

  return (
    <section
      className="py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fafffe 0%, #f0faf0 40%, #fafffe 100%)' }}
    >
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={headerReveal.ref}
          className="text-center mb-24"
          style={{
            opacity: headerReveal.visible ? 1 : 0,
            transform: headerReveal.visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#4caf50' }}
          >
            The Platform
          </p>

          {/* Step labels */}
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            {['Discover', 'Detect', 'Respond'].map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
                  {s}
                </span>
                {i < 2 && (
                  <svg className="h-5 w-5 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                )}
              </span>
            ))}
          </div>

          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            From biological discovery to field-scale detection and real-world action.
          </p>
        </div>

        {/* Feature rows */}
        <div className="space-y-32">

          {/* DISCOVER */}
          <FeatureRow
            step="01"
            label="Discover"
            headline="The intelligence layer powering the platform."
            body="EndoBio continuously analyzes disease reports, scientific literature, genomic data, and biological signals to identify emerging threats and prioritize new sensing targets."
            bullets={[
              'Regional disease intelligence from aggregated field data',
              'Knowledge graph connecting pathogens, biomarkers, and intervention windows',
              'AI-guided sensor target selection — designed from biology up',
              'Literature mining across agricultural and molecular biology research',
            ]}
            imageSrc="/screenshots/discover.png"
            imageAlt="EndoBio Discovery — Configure sensor suite and identify regional risks"
          />

          {/* DETECT */}
          <FeatureRow
            step="02"
            label="Detect"
            headline="Biological signals, weeks before symptoms."
            body="Buried molecular sensors monitor biological signals beneath the soil surface, revealing disease activity before visible symptoms emerge — while intervention is still effective."
            bullets={[
              'Root-zone molecular sensing across the field grid',
              'Spatial heat-mapping of disease pressure and activity',
              'Adaptive sampling based on environmental and biological context',
              'Lead time of weeks, not days — earlier than any visual monitoring',
            ]}
            imageSrc="/screenshots/detect.png"
            imageAlt="EndoBio Detection — SCN monitoring field heatmap with sensor grid"
            reverse
          />

          {/* RESPOND */}
          <FeatureRow
            step="03"
            label="Respond"
            headline="Decisions grounded in field biology."
            body="EndoBio transforms field observations into actionable recommendations, helping growers intervene earlier and respond with confidence — before yield loss becomes irreversible."
            bullets={[
              'Prioritized intervention steps: Confirm, Treat, Prevent',
              'Treatment timing recommendations informed by disease biology',
              'Integration with existing farm management systems',
              'Outcome monitoring to close the feedback loop',
            ]}
            imageSrc="/screenshots/respond.png"
            imageAlt="EndoBio Response — Mitigation plan with confirm, treat, and prevent workflow"
          />

        </div>
      </div>

      {/* Full-width composite — visible until individual shots are added */}
      <div className="mt-32 mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="rounded-3xl overflow-hidden ring-1 ring-gray-200/60"
          style={{ boxShadow: '0 24px 80px rgba(76,175,80,0.08), 0 4px 20px rgba(0,0,0,0.06)' }}
        >
          <img
            src="/screenshots/composite.png"
            alt="EndoBio platform — Discovery, Detection, and Response screens"
            className="w-full h-auto"
          />
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">
          EndoBio biological intelligence platform — Discover · Detect · Respond
        </p>
      </div>
    </section>
  )
}
