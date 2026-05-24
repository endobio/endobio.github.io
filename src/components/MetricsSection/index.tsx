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
    <div className="relative isolate py-24 sm:py-32 lg:py-40">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4caf50] to-[#a5d6a7] opacity-10 sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            The Scale of the Problem
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Current solutions fail because we only see the damage after disease strikes
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-3">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="text-6xl sm:text-7xl font-bold text-[#4caf50] tracking-tight">
                  {metric.value}
                </div>
              </div>
              <div className="mb-2">
                <p className="text-xl font-semibold text-gray-900">
                  {metric.label}
                </p>
              </div>
              <p className="text-gray-600">
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
