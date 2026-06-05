const phases = [
  {
    label: 'Current',
    color: 'bg-[#4caf50]',
    textColor: 'text-[#4caf50]',
    borderColor: 'border-[#4caf50]',
    items: [
      'Disease intelligence platform',
      'Biomarker discovery workflows',
      'Sensor prototype',
    ],
    done: true,
  },
  {
    label: 'Next',
    color: 'bg-blue-500',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-400',
    items: [
      'Greenhouse validation',
      'Field pilots',
    ],
    done: false,
  },
  {
    label: 'Future',
    color: 'bg-gray-400',
    textColor: 'text-gray-500',
    borderColor: 'border-gray-300',
    items: [
      'Commercial deployment',
      'Industry discovery engine',
    ],
    done: false,
  },
]

export default function Roadmap() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Roadmap
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            A clear path from where we are to commercial scale.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {phases.map((phase) => (
              <div key={phase.label} className={`rounded-xl border-2 ${phase.borderColor} p-6`}>
                <div className={`inline-flex items-center gap-2 mb-5`}>
                  <div className={`h-2.5 w-2.5 rounded-full ${phase.color}`} />
                  <span className={`text-sm font-bold uppercase tracking-widest ${phase.textColor}`}>
                    {phase.label}
                  </span>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className={`mt-0.5 flex-shrink-0 font-bold ${phase.textColor}`}>
                        {phase.done ? '✓' : '→'}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
