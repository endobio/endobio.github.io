export default function WhyNow() {
  const reasons = [
    {
      title: 'Climate Pressure',
      body: 'Increasing disease pressure and environmental volatility are creating demand for earlier detection and intervention.',
    },
    {
      title: 'Industry Transformation',
      body: 'Agriculture is rapidly adopting precision technologies and data-driven decision making.',
    },
    {
      title: 'AI-Enabled Discovery',
      body: 'Advances in biological data mining and machine learning enable identification of molecular signals previously inaccessible in field environments.',
    },
  ]

  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Why Now?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Three converging forces are opening a window that hasn't existed before.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-xl bg-white p-8 ring-1 ring-gray-200">
                <div className="h-1 w-12 bg-[#4caf50] rounded mb-6" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-7">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
