import posthog from '../../lib/posthog'

const stats = [
  { value: '6-8 weeks', label: 'lead time before visible symptoms' },
  { value: '3 layers', label: 'discovery, detection, and response' },
  { value: 'Field scale', label: 'root-zone biological intelligence' },
]

export default function Hero() {
  return (
    <section className="overflow-hidden bg-white pt-14">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-14 text-center sm:pb-10 sm:pt-20 lg:px-8">
        <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4caf50]">
          Nature speaks. We listen.
        </p>
        <h1
          className="mx-auto max-w-5xl font-bold text-[#1d1d1f]"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.6rem)',
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
          }}
        >
          Plants are talking.
          <br />
          <span className="text-[#4caf50]">EndoBio listens.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6e6e73] sm:text-xl">
          We detect the biological signals of crop disease before visible symptoms appear,
          turning invisible root-zone chemistry into actionable field intelligence.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/#/farmers"
            className="rounded-full bg-[#4caf50] px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            onClick={() => posthog.capture('hero_cta_clicked', { cta_type: 'pilot', location: 'hero' })}
          >
            Join Pilot Program
          </a>
          <a
            href="/#/investors"
            className="rounded-full bg-[#f0faf0] px-8 py-3.5 text-sm font-semibold text-[#0b5f2a] transition-colors hover:bg-[#e3f4e4]"
            onClick={() => posthog.capture('hero_cta_clicked', { cta_type: 'investors', location: 'hero' })}
          >
            For Investors
          </a>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-10 -z-0 h-56 bg-[#f5f5f7]" />
        <div
          className="relative overflow-hidden rounded-[28px] bg-white p-5 ring-1 ring-black/5 sm:p-6"
          style={{ boxShadow: '0 32px 90px rgba(0,0,0,0.10), 0 12px 30px rgba(76,175,80,0.10)' }}
        >
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl bg-[#f5f5f7] p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">Field Zone K12</p>
                  <p className="mt-1 text-lg font-bold text-[#1d1d1f]">Early biological signal detected</p>
                </div>
                <span className="rounded-full bg-[#fff1e8] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e85d04]">
                  6-8 weeks
                </span>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#dfeede]">
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.65) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.65) 1px, transparent 1px)',
                    backgroundSize: '11.11% 14.28%',
                  }}
                />
                <div className="absolute left-[18%] top-[48%] h-28 w-28 rounded-full bg-[#e85d04] opacity-70 blur-2xl" />
                <div className="absolute left-[56%] top-[18%] h-32 w-32 rounded-full bg-[#ffb703] opacity-70 blur-2xl" />
                <div className="absolute left-[68%] top-[54%] h-24 w-24 rounded-full bg-[#e85d04] opacity-60 blur-xl" />
                {Array.from({ length: 54 }).map((_, i) => (
                  <span
                    key={i}
                    className="absolute h-2.5 w-2.5 rounded-full bg-white ring-2 ring-[#0b5f2a]/45"
                    style={{
                      left: `${8 + (i % 9) * 10.5}%`,
                      top: `${11 + Math.floor(i / 9) * 13}%`,
                    }}
                  />
                ))}
                <div className="absolute left-[43%] top-[55%] rounded-full bg-[#0b5f2a] px-3 py-1 text-xs font-bold text-white shadow-lg">
                  K12
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {[
                ['Discovery', 'Knowledge graph selects sensing targets for regional risk.'],
                ['Detection', 'Root-zone signals reveal disease pressure before symptoms.'],
                ['Response', 'Alerts become scouting, treatment timing, and prevention plans.'],
              ].map(([title, body], index) => (
                <div key={title} className="rounded-3xl bg-[#f5f5f7] p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f0faf0] text-sm font-bold text-[#4caf50]">
                      0{index + 1}
                    </span>
                    <h2 className="text-lg font-bold text-[#1d1d1f]">{title}</h2>
                  </div>
                  <p className="text-sm leading-6 text-[#6e6e73]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pb-20">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold tracking-tight text-[#4caf50] sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
