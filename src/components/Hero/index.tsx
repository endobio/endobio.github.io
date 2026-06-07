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
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/50 to-black/55 lg:bg-gradient-to-r lg:from-white lg:via-white/55 lg:to-white/5" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

      <div className="mx-auto max-w-[1536px] px-5 pb-6 pt-10 sm:px-8 sm:pb-8 sm:pt-14 lg:px-14">
        <div className="grid min-h-[780px] grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#2f6f2f] sm:mb-6 sm:gap-3 sm:text-base">
              <span className="h-3 w-3 rounded-full bg-[#3a7f35]" />
              Early Biological Intelligence
            </p>

            <h1
              className="font-bold text-[#071018]"
              style={{
                fontSize: 'clamp(2.65rem, 5.2vw, 4.8rem)',
                lineHeight: 0.98,
                letterSpacing: '-0.02em',
              }}
            >
              Detect crop disease
              <br />
              <span className="text-[#2f6f2f]">before symptoms appear.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#34383d] sm:mt-7 sm:text-xl sm:leading-8">
              EndoBio&apos;s root-zone molecular sensors reveal biological activity weeks before
              visible symptoms, so you can act earlier and protect yield.
            </p>
          </div>

          <div className="flex flex-col items-stretch lg:items-end">
            <div className="mt-8 w-full rounded-3xl bg-white/90 p-4 shadow-2xl ring-1 ring-black/5 backdrop-blur-md sm:mt-10 sm:max-w-xl sm:p-6 lg:mt-8">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#e8f0df] sm:h-16 sm:w-16">
                  <span className="h-7 w-7 rounded-full bg-[#4f853d] sm:h-8 sm:w-8" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#2f6f2f] sm:text-sm">
                    Early Detection Alert
                  </p>
                  <h2 className="mt-1 text-lg font-bold leading-tight text-[#071018] sm:mt-2 sm:text-2xl">
                    Soybean Cyst Nematode
                  </h2>
                  <p className="mt-1 text-sm leading-5 text-[#34383d] sm:text-base">
                    Field K12 · 6-8 weeks lead time
                  </p>
                </div>
                <span className="hidden rounded-2xl bg-[#fff0ec] px-4 py-3 text-sm font-bold uppercase tracking-wide text-[#b8261c] sm:inline-flex">
                  High Risk
                </span>
              </div>
            </div>

            <div className="mt-auto w-full rounded-3xl bg-white/92 p-4 shadow-2xl ring-1 ring-black/5 backdrop-blur-md sm:p-6 lg:mb-8 lg:max-w-5xl lg:p-8">
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
                {metrics.map((metric) => (
                  <div
                    key={metric.value}
                    className="flex items-center gap-4 rounded-2xl bg-white/45 p-3 sm:rounded-none sm:bg-transparent sm:p-0 sm:pr-5 sm:border-r sm:border-black/10 sm:last:border-r-0"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#a8cba1] text-[#2f6f2f] sm:h-14 sm:w-14">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#2f6f2f]" />
                    </span>
                    <div>
                      <p className="text-base font-bold uppercase leading-tight text-[#2f6f2f] sm:text-lg lg:text-xl">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-sm leading-5 text-[#1d1d1f] sm:leading-6">
                        {metric.label}
                      </p>
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
