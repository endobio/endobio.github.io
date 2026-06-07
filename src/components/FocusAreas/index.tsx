const diseases = [
  {
    name: 'Soybean Cyst Nematode (SCN)',
    description: 'The most economically damaging soybean pathogen in North America.',
  },
  {
    name: 'Sudden Death Syndrome (SDS)',
    description: 'Infection often occurs long before symptoms become visible.',
  },
  {
    name: 'Phytophthora Root Rot',
    description: 'Environmental conditions can rapidly drive disease development.',
  },
  {
    name: 'White Mold',
    description: 'Early detection enables more effective intervention and management.',
  },
]

export default function FocusAreas() {
  return (
    <div className="bg-[#f5f5f7] pb-12 pt-24 sm:pb-16 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-[#4caf50]">
            Initial disease systems
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Initial Focus Areas
          </h2>
          <p className="text-lg text-[#6e6e73] mb-12">
            Beginning with diseases where earlier detection creates significant economic value.
          </p>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-[#e5e5e5] sm:grid-cols-2 mb-10">
            {diseases.map((d) => (
              <div key={d.name} className="bg-white p-7">
                <div className="h-9 w-9 rounded-xl bg-[#f0faf0] mb-5 flex items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#4caf50]" />
                </div>
                <h3 className="font-semibold text-[#1d1d1f] mb-2">{d.name}</h3>
                <p className="text-sm text-[#6e6e73] leading-6">{d.description}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#6e6e73]">
            Our platform is designed to expand beyond individual diseases and ultimately support a broad range of biological monitoring applications.
          </p>
        </div>
      </div>
    </div>
  )
}
