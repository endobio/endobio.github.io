import posthog from '../../lib/posthog'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-14 text-[#071018]">
      <img
        src="/new-hero.avif"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-contain object-bottom sm:object-cover sm:object-center"
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-white/45 to-white/10 sm:bg-gradient-to-r sm:from-white sm:via-white/65 sm:to-white/5" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-white via-white/70 to-transparent" />

      <div className="mx-auto flex min-h-[800px] max-w-[1536px] px-5 pb-64 pt-12 sm:min-h-[820px] sm:px-8 sm:pb-28 sm:pt-16 lg:px-14">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#2f6f2f] sm:mb-6 sm:gap-3 sm:text-base">
            <span className="h-3 w-3 rounded-full bg-[#3a7f35]" />
            Early Biological Intelligence
          </p>

          <h1
            className="font-bold text-[#071018]"
            style={{
              fontSize: 'clamp(3rem, 7.5vw, 6.4rem)',
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
            }}
          >
            Plants are talking.
            <br />
            <span className="text-[#2f6f2f]">EndoBio listens.</span>
          </h1>

          <h2 className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-[#071018] sm:mt-8 sm:text-4xl">
            Detect crop disease before symptoms appear.
          </h2>

          <p className="mt-5 max-w-[600px] text-base leading-7 text-[#34383d] sm:mt-6 sm:text-xl sm:leading-8">
            EndoBio transforms invisible root-zone biology into actionable field intelligence,
            helping growers identify disease weeks before visible symptoms emerge.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="/#/farmers"
              className="inline-flex justify-center rounded-full bg-[#4caf50] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4caf50]/20 transition-opacity hover:opacity-85"
              onClick={() => posthog.capture('hero_cta_clicked', { cta_type: 'pilot', location: 'hero' })}
            >
              Join Pilot Program
            </a>
            <a
              href="/#/investors"
              className="inline-flex justify-center rounded-full bg-white/85 px-8 py-3.5 text-sm font-semibold text-[#0b5f2a] ring-1 ring-[#4caf50]/20 backdrop-blur transition-colors hover:bg-white"
              onClick={() => posthog.capture('hero_cta_clicked', { cta_type: 'investors', location: 'hero' })}
            >
              For Investors
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
