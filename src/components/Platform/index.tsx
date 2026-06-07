export default function BiologicalLoop() {
  const phases = [
    {
      num: '01',
      title: 'Discovery',
      description: 'Historical disease reports, scientific literature, genomic data, and metabolomics are integrated into a biological knowledge graph.',
      details: 'This discovery engine identifies biomarkers associated with pathogens, environmental stress, and crop health.'
    },
    {
      num: '02',
      title: 'Detection',
      description: 'Custom molecular sensors continuously monitor the root zone, measuring biological signals before visible symptoms emerge.',
      details: 'Environmental measurements, biological markers, and adaptive sampling strategies provide real-time insight.'
    },
    {
      num: '03',
      title: 'Response',
      description: 'Sensor observations are transformed into actionable recommendations — scouting priorities, treatment timing, and risk alerts.',
      details: 'Every response generates new field observations that improve future discovery and model development.'
    },
  ]

  return (
    <div className="py-24 sm:py-32 bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-[#4caf50]">
            Soil Intelligence
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] mb-4 sm:text-5xl">
            The Biological Intelligence Loop
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-3xl mx-auto">
            Agriculture today operates largely on visible symptoms and historical observations. EndoBio creates a continuous feedback loop between biological discovery, field-scale sensing, and agricultural action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px overflow-hidden rounded-3xl bg-[#e5e5e5] mb-10">
          {phases.map((phase) => (
            <div
              key={phase.num}
              className="bg-white p-8 transition-colors duration-300 hover:bg-[#fbfffb]"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-[#f0faf0] text-[#4caf50] font-bold text-sm mb-6 flex-shrink-0">
                {phase.num}
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">
                {phase.title}
              </h3>
              <p className="text-sm text-[#1d1d1f]/75 leading-6 mb-3">
                {phase.description}
              </p>
              <p className="text-xs text-[#6e6e73] leading-5">
                {phase.details}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-[#0b2f18] p-8 text-white sm:p-10">
          <div className="grid gap-6 text-sm font-medium sm:grid-cols-3">
            <p><span className="text-[#7ed882]">Knowledge graph</span> guides sensor design.</p>
            <p><span className="text-[#7ed882]">Agentic sensing</span> triggers early responses.</p>
            <p><span className="text-[#7ed882]">Response data</span> drives new recommendations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
