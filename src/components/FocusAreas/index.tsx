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
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Initial Focus Areas
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Beginning with diseases where earlier detection creates significant economic value.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {diseases.map((d) => (
              <div key={d.name} className="rounded-xl bg-white p-7 ring-1 ring-gray-200">
                <div className="h-1 w-10 bg-[#4caf50] rounded mb-5" />
                <h3 className="font-semibold text-gray-900 mb-2">{d.name}</h3>
                <p className="text-sm text-gray-600 leading-6">{d.description}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 italic">
            Our platform is designed to expand beyond individual diseases and ultimately support a broad range of biological monitoring applications.
          </p>
        </div>
      </div>
    </div>
  )
}
