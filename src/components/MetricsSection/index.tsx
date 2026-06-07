export default function MetricsSection() {
  const metrics = [
    {
      value: '>170M',
      label: 'bushels lost annually',
      description: 'to major soybean diseases'
    },
    {
      value: '>$2B',
      label: 'crop value destroyed',
      description: 'in a dry year'
    },
    {
      value: '$4–5B+',
      label: 'economic impact',
      description: 'in severe disease years'
    }
  ];

  return (
    <div className="relative isolate bg-[#f5f5f7] py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
            Why We Started With Soybeans
          </h2>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 sm:grid-cols-3">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center border-b border-[#e5e5e5] p-9 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <div className="mb-4">
                <div className="text-6xl sm:text-7xl font-bold text-[#4caf50] tracking-tight">
                  {metric.value}
                </div>
              </div>
              <div className="mb-2">
                <p className="text-xl font-semibold text-[#1d1d1f]">
                  {metric.label}
                </p>
              </div>
              <p className="text-[#6e6e73]">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <p className="text-center text-lg leading-8 text-[#6e6e73]">
            Soybean disease represents one of the largest unmet opportunities in agriculture.
            EndoBio begins with soybean pathogens and stressors before expanding to additional
            crops and biological threats.
          </p>
        </div>
      </div>
    </div>
  )
}
