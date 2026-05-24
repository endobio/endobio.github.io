import { CheckIcon } from '@heroicons/react/20/solid'

export default function Problem() {
  const currentApproach = [
    'Soil moisture monitoring',
    'Temperature sensors',
    'pH measurement',
    'Salinity & EC tracking',
    'Nutrient concentration',
    'Weather data',
  ]

  const issues = [
    'These signals are indirect',
    'Disease detection is delayed',
    'Visible symptoms mean weeks of undetected pathogen activity',
    'By then, crop damage is often irreversible',
  ]

  const earlySignals = [
    'Root exudates',
    'Quorum sensing molecules',
    'Microbial metabolites',
    'Pathogen metabolites',
    'Stress-response compounds',
    'Electrochemical behavior shifts',
  ]

  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            The Problem
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Modern agriculture monitors the environment well — but ignores the biological signaling layer occurring in the rhizosphere, where disease detection happens earliest.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Current Approach */}
          <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              What Agriculture Monitors Today
            </h3>
            <ul className="space-y-4">
              {currentApproach.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">The Problem</h4>
              <ul className="space-y-2">
                {issues.map((issue) => (
                  <li key={issue} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Early Detection Signals */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 ring-1 ring-emerald-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              The Earliest Biological Signals
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              These compounds appear <span className="font-semibold">weeks before visible crop symptoms</span>:
            </p>
            <ul className="space-y-3">
              {earlySignals.map((signal) => (
                <li key={signal} className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{signal}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-emerald-200">
              <p className="text-sm font-semibold text-gray-900 mb-2">
                The Opportunity
              </p>
              <p className="text-sm text-gray-600">
                Detect disease through biological signal intelligence before crop damage becomes irreversible.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-gray-900 p-8 text-white">
          <h3 className="text-xl font-bold mb-4">
            The Rhizosphere is Massively Under-Instrumented
          </h3>
          <p className="text-gray-300">
            Agriculture has sophisticated environmental monitoring, but almost no scalable real-time monitoring of the biochemical signaling layer surrounding roots. EndoBio changes this by deploying distributed biosensing networks that detect biological signals continuously, directly in the soil.
          </p>
        </div>
      </div>
    </div>
  )
}
