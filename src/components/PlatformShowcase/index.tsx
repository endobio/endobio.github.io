export default function PlatformShowcase() {
  const pillars = [
    {
      title: 'Discover',
      description: "EndoBio's knowledge graph maps crop diseases, molecular biomarkers, geography, and intervention timing from scientific literature, genomic data, and field observations.",
      icon: '🔍',
    },
    {
      title: 'Detect',
      description: 'Buried molecular sensors monitor root-zone chemistry before visual symptoms appear. Biological signals are detected at the earliest stages of disease development.',
      icon: '📊',
    },
    {
      title: 'Respond',
      description: 'Field intelligence is translated into scouting, irrigation, and treatment recommendations. Every alert comes with ranked response options tailored to your operation.',
      icon: '✓',
    },
  ]

  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            How EndoBio Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A complete platform for biological intelligence, from discovery to decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="rounded-2xl bg-white ring-1 ring-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{pillar.icon}</div>
                <div>
                  <p className="text-sm font-semibold text-[#4caf50] uppercase tracking-widest">
                    Step {index + 1}
                  </p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-700 leading-7">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connection visual */}
        <div className="mt-16 flex justify-center items-center gap-4 text-gray-400 hidden sm:flex">
          <div className="text-2xl font-light">→</div>
          <div className="text-2xl font-light">→</div>
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#4caf50]/10 to-[#a5d6a7]/10 border border-[#4caf50]/20 p-8">
          <p className="text-center text-sm font-semibold text-[#4caf50] uppercase tracking-widest mb-2">
            The Biological Intelligence Loop
          </p>
          <p className="text-center text-gray-700">
            Every detection improves the knowledge graph. Every response generates field observations that strengthen future predictions. The system continuously learns.
          </p>
        </div>
      </div>
    </div>
  )
}
