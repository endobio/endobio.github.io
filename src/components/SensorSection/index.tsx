const callouts = [
  'Nematodes and pathogens alter root-zone molecular signatures.',
  'Those signals diffuse into soil water.',
  'EndoBio detects them before visible disease emerges.',
]

export default function SensorSection() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#4caf50]">
            Root-zone sensing
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
            The Sensor
          </h2>
          <p className="mt-5 max-w-xl text-xl leading-8 text-[#6e6e73]">
            A buried molecular sensor that reads soil water for early biological stress signals.
          </p>

          <div className="mt-10 space-y-4">
            {callouts.map((callout, index) => (
              <div key={callout} className="flex gap-4 rounded-3xl bg-white p-5 ring-1 ring-black/5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f0faf0] text-sm font-bold text-[#4caf50]">
                  {index + 1}
                </span>
                <p className="pt-1 text-base leading-7 text-[#1d1d1f]/78">{callout}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[560px] overflow-hidden border-x border-[#eeeeee] bg-white sm:min-h-[720px] lg:min-h-[820px]">
          <img
            src="/new-sensor.avif"
            alt="EndoBio sensor buried beside soybean roots in the root zone."
            className="absolute inset-0 h-full w-full object-cover object-[62%_54%] lg:object-[60%_54%]"
          />
        </div>
      </div>
    </section>
  )
}
