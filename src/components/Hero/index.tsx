const processSteps = [
  {
    title: 'Pathogens release molecular signals in the root zone.',
  },
  {
    title: 'Signals diffuse through soil water.',
  },
  {
    title: 'Our sensors detect these signals in real time.',
  },
]

const metrics = [
  {
    value: '6-8 weeks',
    label: 'lead time before visible symptoms',
  },
  {
    value: 'Field scale',
    label: 'distributed monitoring across every acre',
  },
  {
    value: 'Root-zone focus',
    label: 'biological intelligence where disease begins',
  },
]

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#f7f8f2] pt-14 text-[#071018]"
      style={{
        backgroundImage: 'url(/new-hero.png)',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/70 to-white/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-t from-black/55 to-transparent" />

      <div className="mx-auto max-w-[1536px] px-6 pb-8 pt-12 sm:px-10 sm:pb-10 sm:pt-16 lg:px-14">
        <div className="grid min-h-[760px] grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex max-w-2xl flex-col">
            <p className="mb-6 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.08em] text-[#2f6f2f] sm:text-base">
              <span className="h-3 w-3 rounded-full bg-[#3a7f35]" />
              Early Biological Intelligence
            </p>

            <h1
              className="font-bold text-[#071018]"
              style={{
                fontSize: 'clamp(3.2rem, 6vw, 5.1rem)',
                lineHeight: 0.98,
                letterSpacing: '-0.02em',
              }}
            >
              Detect crop disease
              <br />
              <span className="text-[#2f6f2f]">before symptoms appear.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#34383d] sm:text-xl">
              EndoBio&apos;s root-zone molecular sensors reveal biological activity weeks before
              visible symptoms, so you can act earlier and protect yield.
            </p>

            <div className="mt-auto hidden max-w-sm space-y-6 pb-24 pt-16 text-white lg:block">
              {processSteps.map((step) => (
                <div key={step.title} className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#a8ef68] bg-black/20 text-[#a8ef68] backdrop-blur">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#a8ef68]" />
                  </span>
                  <p className="text-base leading-6 drop-shadow">{step.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="mt-4 w-full max-w-xl rounded-3xl bg-white/88 p-6 shadow-2xl ring-1 ring-black/5 backdrop-blur-md sm:p-7">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#e8f0df]">
                  <span className="h-8 w-8 rounded-full bg-[#4f853d]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#2f6f2f]">
                    Early Detection Alert
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-[#071018] sm:text-2xl">
                    Soybean Cyst Nematode
                  </h2>
                  <p className="mt-1 text-base text-[#34383d]">Field K12 · 6-8 weeks lead time</p>
                </div>
                <span className="hidden rounded-2xl bg-[#fff0ec] px-4 py-3 text-sm font-bold uppercase tracking-wide text-[#b8261c] sm:inline-flex">
                  High Risk
                </span>
              </div>
            </div>

            <div className="mt-auto w-full max-w-5xl rounded-3xl bg-white/92 p-6 shadow-2xl ring-1 ring-black/5 backdrop-blur-md sm:p-8 lg:mb-8">
              <div className="grid gap-6 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.value} className="flex items-center gap-4 sm:border-r sm:border-black/10 sm:pr-6 sm:last:border-r-0">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#a8cba1] text-[#2f6f2f]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#2f6f2f]" />
                    </span>
                    <div>
                      <p className="text-lg font-bold uppercase text-[#2f6f2f] sm:text-xl">{metric.value}</p>
                      <p className="mt-1 text-sm leading-6 text-[#1d1d1f]">{metric.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
