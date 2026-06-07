export default function TechDevelopment() {
  const areas = [
    'Agricultural disease intelligence platform',
    'Knowledge graph infrastructure',
    'Biomarker discovery workflows',
    'Molecular sensing systems',
    'Root-zone sampling hardware',
    'Adaptive sensor network architecture',
  ]

  return (
    <div id="progress" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-[#4caf50]">
            Traction
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Technology Development
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            Building the foundation for field-scale biological intelligence.
          </p>
          <p className="text-[#1d1d1f]/75 leading-7 mb-10">
            EndoBio combines advances in biological discovery, molecular sensing, edge computing, and artificial intelligence. Current development spans the full technology stack — from knowledge infrastructure to physical hardware.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area) => (
              <div key={area} className="flex items-start gap-3 rounded-2xl bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                <span className="mt-0.5 flex-shrink-0 text-[#4caf50] font-bold">✓</span>
                <p className="text-gray-800 text-sm font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
