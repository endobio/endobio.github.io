export default function BiologicalLoop() {
  const phases = [
    {
      num: '01',
      title: 'Discover',
      description: 'Historical disease reports, scientific literature, genomic data, and metabolomics are integrated into a biological knowledge graph.',
      details: 'This discovery engine identifies biomarkers associated with pathogens, environmental stress, and crop health.'
    },
    {
      num: '02',
      title: 'Detect',
      description: 'Custom molecular sensors continuously monitor the root zone, measuring biological signals before visible symptoms emerge.',
      details: 'Environmental measurements, biological markers, and adaptive sampling strategies provide real-time insight.'
    },
    {
      num: '03',
      title: 'Respond',
      description: 'Sensor observations are transformed into actionable recommendations — scouting priorities, treatment timing, and risk alerts.',
      details: 'Every response generates new field observations that improve future discovery and model development.'
    },
    {
      num: '04',
      title: 'Learn',
      description: 'Field outcomes feed back into the knowledge graph, continuously improving biological understanding.',
      details: 'This creates a virtuous cycle where detection improves and predictions become more accurate over time.'
    },
  ]

  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            The Biological Intelligence Loop
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Agriculture today operates largely on visible symptoms and historical observations. EndoBio creates a continuous feedback loop between biological discovery, field-scale sensing, and agricultural action.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {phases.map((phase) => (
            <div
              key={phase.num}
              className="rounded-2xl bg-white p-8 ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#4caf50] text-white font-bold text-lg mb-6 flex-shrink-0">
                {phase.num}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {phase.title}
              </h3>
              <p className="text-sm text-gray-700 leading-6 mb-3">
                {phase.description}
              </p>
              <p className="text-xs text-gray-600 leading-5">
                {phase.details}
              </p>
            </div>
          ))}
        </div>

        {/* Flywheel callout */}
        <div className="rounded-2xl bg-gradient-to-r from-[#4caf50] to-[#a5d6a7] p-8 text-white">
          <div className="space-y-3 text-sm font-medium">
            <div className="flex items-center gap-3">
              <span className="opacity-75">→</span>
              <span>Knowledge Graph informs Sensor Design</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="opacity-75">→</span>
              <span>Sensor Data powers Decision Support</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="opacity-75">→</span>
              <span>Field Outcomes feed New Discovery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
