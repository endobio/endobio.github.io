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
      value: '$4-5B+',
      label: 'economic impact',
      description: 'in severe disease years'
    }
  ];

  return (
    <div className="relative isolate bg-[#f5f5f7] py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#4caf50]">
            Current treatments fail late
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
            The Scale of the Problem
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#6e6e73]">
            Current solutions fail because we only see the damage after disease strikes
          </p>
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

        <div className="mt-16 border-t border-gray-200 pt-12">
          <p className="text-center text-sm text-gray-600">
            Based on 2024 Crop Protection Network (CPN) survey data and soybean price assumptions of ~$10.50/bu
          </p>
        </div>
      </div>
    </div>
  )
}
