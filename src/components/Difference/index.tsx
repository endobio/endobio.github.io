import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function Difference() {
  const beliefs = [
    {
      title: 'Disease Detection Before Symptoms',
      description:
        'Pathogens and stressed plants alter local chemistry and metabolite composition long before leaf-level symptoms become visible. We detect these signals.',
    },
    {
      title: 'Distributed Sensing Beats Centralized Testing',
      description:
        'Many low-cost probes distributed across farms, feeding local AI systems, outperforms sparse expensive laboratory testing.',
    },
    {
      title: 'Hardware + AI + Science',
      description:
        'Most AI-agriculture companies are software-only. EndoBio builds defensibility through proprietary datasets, knowledge graphs, hardware, and continuous biological signal acquisition.',
    },
    {
      title: 'Context is Everything',
      description:
        'A metabolite signal without context is weak. We combine pH, EC, temperature, moisture, light, environmental history, and biological signatures into probabilistic models.',
    },
  ]

  const advantages = [
    'Agentic AI embedded into discovery, sensing, inference, and workflow orchestration',
    'Low-cost hardware enables scalable sensor deployment across agricultural regions',
    'Continuous learning loop between literature, sensors, farms, and AI systems',
    'Edge-first architecture preserves farm privacy while enabling real-time response',
    'Vertically integrated platform combining science, hardware, and software',
  ]

  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Why EndoBio is Different
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're not building another software analytics layer. We're building infrastructure for biological intelligence.
          </p>
        </div>

        {/* Core Beliefs */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Core Heretical Beliefs
          </h3>
          <div className="grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
            {beliefs.map((belief) => (
              <div key={belief.title} className="rounded-lg bg-white p-6 ring-1 ring-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {belief.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="rounded-2xl bg-white p-8 lg:p-12 ring-1 ring-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Technical Differentiation
          </h3>
          <ul className="space-y-4">
            {advantages.map((advantage) => (
              <li key={advantage} className="flex items-start gap-4">
                <CheckCircleIcon className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Positioning */}
        <div className="mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 p-6 ring-1 ring-emerald-200">
            <h4 className="font-bold text-gray-900 mb-2">
              Traditional AgTech
            </h4>
            <p className="text-sm text-gray-600">
              Focuses on environmental monitoring or software analytics in isolation.
            </p>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 p-6 ring-2 ring-emerald-600 relative">
            <div className="absolute -top-3 left-6 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              EndoBio
            </div>
            <h4 className="font-bold text-gray-900 mb-2">
              Vertically Integrated
            </h4>
            <p className="text-sm text-gray-600">
              Science + hardware + edge AI + federated learning in unified platform.
            </p>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-6 ring-1 ring-purple-200">
            <h4 className="font-bold text-gray-900 mb-2">
              Lab-Based Testing
            </h4>
            <p className="text-sm text-gray-600">
              Sparse, centralized, reactive. Detection happens after damage is done.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
