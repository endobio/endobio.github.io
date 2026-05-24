import {
  BeakerIcon,
  SparklesIcon,
  CpuChipIcon,
  CloudIcon,
} from '@heroicons/react/24/outline'

export default function Platform() {
  const pillars = [
    {
      icon: BeakerIcon,
      title: 'AI-Native Knowledge Graph',
      description:
        'Continuously ingesting and synthesizing scientific literature to identify disease biomarkers, root exudates, pathogen metabolites, and sentinel compounds.',
      highlights: [
        'Automated scientific intelligence',
        'Literature synthesis at scale',
        'Biological relationship mapping',
        'Continuous model evolution',
      ],
    },
    {
      icon: SparklesIcon,
      title: 'Distributed Soil Sensing',
      description:
        'Inexpensive, distributed probes deployed across farms for real-world field data collection and continuous contextual measurement.',
      highlights: [
        'Low-cost sensor nodes',
        'LoRa mesh networking',
        'Solar-capable deployments',
        'Scalable field density',
      ],
    },
    {
      icon: CloudIcon,
      title: 'Electrochemical Biosensing',
      description:
        'Novel approaches to measuring biochemical signals directly in-field using electrochemical methods and molecularly imprinted polymers.',
      highlights: [
        'Electrochemical impedance spectroscopy',
        'Screen-printed electrodes',
        'Selective polymer coatings',
        'Direct metabolite detection',
      ],
    },
    {
      icon: CpuChipIcon,
      title: 'Edge AI & Federated Intelligence',
      description:
        'Local farm intelligence systems that combine sensor data with biological models for real-time disease prediction without cloud dependency.',
      highlights: [
        'Edge inference capability',
        'Farm-specific adaptation',
        'Privacy-preserving design',
        'Resilient architectures',
      ],
    },
  ]

  return (
    <div id="platform" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            The Platform
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Four integrated pillars working together to turn soil biology into actionable intelligence.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div key={pillar.title} className="flex flex-col rounded-2xl bg-white p-8 ring-1 ring-gray-200 hover:ring-emerald-300 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-lg bg-emerald-100 p-3">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {pillar.description}
                </p>

                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Key Technologies
                  </h4>
                  <ul className="space-y-2">
                    {pillar.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-emerald-600 mt-1 flex-shrink-0">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 sm:p-12 text-white">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">
              How It Works
            </h3>
            <p className="text-emerald-50 mb-6">
              A scientific discovery engine identifies pathogen-associated metabolites. Distributed sensors are deployed in-field. Electrochemical probes detect biological signals. Edge AI combines sensor data with soil context. Before visible crop symptoms emerge, farmers receive actionable alerts.
            </p>
            <p className="text-sm text-emerald-100">
              The result: disease detection weeks earlier than conventional approaches, enabling preventative intervention rather than reactive response.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
