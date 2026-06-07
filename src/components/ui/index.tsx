import { type ReactNode } from 'react'

// ─── Section ────────────────────────────────────────────────────────────────

type SectionVariant = 'white' | 'muted' | 'green-tint' | 'dark'

const sectionBg: Record<SectionVariant, string> = {
  white: 'bg-white',
  muted: 'bg-stone-50',
  'green-tint': 'bg-emerald-50/40',
  dark: 'bg-gray-950 text-white',
}

export function Section({
  variant = 'white',
  className = '',
  children,
  id,
}: {
  variant?: SectionVariant
  className?: string
  children: ReactNode
  id?: string
}) {
  return (
    <section id={id} className={`py-24 sm:py-32 ${sectionBg[variant]} ${className}`}>
      {children}
    </section>
  )
}

// ─── Container ──────────────────────────────────────────────────────────────

export function Container({
  className = '',
  narrow = false,
  children,
}: {
  className?: string
  narrow?: boolean
  children: ReactNode
}) {
  return (
    <div className={`mx-auto ${narrow ? 'max-w-4xl' : 'max-w-7xl'} px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

// ─── Eyebrow ────────────────────────────────────────────────────────────────

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
        light ? 'text-emerald-300' : 'text-[#4caf50]'
      }`}
    >
      {children}
    </p>
  )
}

// ─── Heading ────────────────────────────────────────────────────────────────

export function Heading({
  as: Tag = 'h2',
  size = 'xl',
  children,
  className = '',
  light = false,
}: {
  as?: 'h1' | 'h2' | 'h3'
  size?: 'sm' | 'md' | 'xl' | '2xl'
  children: ReactNode
  className?: string
  light?: boolean
}) {
  const sizes: Record<string, string> = {
    sm: 'text-2xl font-bold tracking-tight',
    md: 'text-3xl font-bold tracking-tight',
    xl: 'text-4xl font-bold tracking-tight sm:text-5xl',
    '2xl': 'text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl',
  }
  return (
    <Tag
      className={`${sizes[size]} ${light ? 'text-white' : 'text-gray-900'} ${className}`}
      style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
    >
      {children}
    </Tag>
  )
}

// ─── Card ────────────────────────────────────────────────────────────────────

export function Card({
  children,
  className = '',
  hover = false,
  padding = 'lg',
}: {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}) {
  const paddings = { sm: 'p-5', md: 'p-6', lg: 'p-8' }
  return (
    <div
      className={`rounded-2xl bg-white ring-1 ring-gray-200 ${paddings[padding]} ${
        hover ? 'hover:shadow-md transition-shadow duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

// ─── StatCard ────────────────────────────────────────────────────────────────

export function StatCard({
  value,
  label,
  sub,
  accent = false,
}: {
  value: string
  label: string
  sub?: string
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        accent
          ? 'bg-[#4caf50] text-white'
          : 'bg-white ring-1 ring-gray-200'
      }`}
    >
      <p
        className={`text-4xl font-bold tracking-tight mb-1 ${accent ? 'text-white' : 'text-[#4caf50]'}`}
        style={{ letterSpacing: '-0.02em' }}
      >
        {value}
      </p>
      <p className={`font-semibold text-sm ${accent ? 'text-emerald-100' : 'text-gray-900'}`}>
        {label}
      </p>
      {sub && (
        <p className={`text-xs mt-1 ${accent ? 'text-emerald-200' : 'text-gray-500'}`}>{sub}</p>
      )}
    </div>
  )
}

// ─── CTAButton ───────────────────────────────────────────────────────────────

export function CTAButton({
  href,
  variant = 'primary',
  children,
  onClick,
}: {
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
  onClick?: () => void
}) {
  const styles: Record<string, string> = {
    primary:
      'rounded-full bg-[#4caf50] px-8 py-3 text-sm font-semibold text-white hover:bg-[#45a049] transition-colors shadow-sm',
    secondary:
      'rounded-full bg-white ring-1 ring-gray-300 px-8 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors',
    ghost:
      'inline-flex items-center gap-1.5 text-sm font-semibold text-[#4caf50] hover:text-[#45a049] transition-colors',
  }
  return (
    <a href={href} className={styles[variant]} onClick={onClick}>
      {children}
    </a>
  )
}

// ─── GradientPanel ────────────────────────────────────────────────────────────

export function GradientPanel({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl p-8 sm:p-10 text-white ${className}`}
      style={{ background: 'linear-gradient(135deg, #3d9e42 0%, #4caf50 50%, #6abf6e 100%)' }}
    >
      {children}
    </div>
  )
}

// ─── PageHero ─────────────────────────────────────────────────────────────────

export function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string
  title: ReactNode
  body?: string
  children?: ReactNode
}) {
  return (
    <div className="relative isolate pt-14">
      {/* Soft green blur */}
      <div className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4caf50] to-[#a5d6a7] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8 text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h1" size="2xl">{title}</Heading>
        {body && (
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">{body}</p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>

      {/* Bottom blur */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a5d6a7] to-[#4caf50] opacity-15 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}

// ─── IconBox ─────────────────────────────────────────────────────────────────

export function IconBox({
  children,
  size = 'md',
  className = '',
}: {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const sizes = { sm: 'h-9 w-9', md: 'h-12 w-12', lg: 'h-14 w-14' }
  return (
    <div
      className={`${sizes[size]} rounded-xl flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ background: '#f0faf0' }}
    >
      {children}
    </div>
  )
}

// ─── ProgressBadge ────────────────────────────────────────────────────────────

export function ProgressBadge({ status }: { status: 'done' | 'active' | 'next' }) {
  const cfg = {
    done: { dot: 'bg-[#4caf50]', text: 'text-[#4caf50]', label: 'Complete' },
    active: { dot: 'bg-amber-500', text: 'text-amber-600', label: 'In progress' },
    next: { dot: 'bg-gray-300', text: 'text-gray-400', label: 'Upcoming' },
  }
  const c = cfg[status]
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${c.text}`}>
      <span className={`h-2 w-2 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  )
}
