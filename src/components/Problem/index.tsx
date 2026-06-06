export default function DetectionWindow() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            The Most Valuable Detection Window Is Invisible
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            By the time visible symptoms appear, yield losses are often already underway.
          </p>

          <div className="space-y-6 text-gray-700 leading-7 mb-14">
            <p>
              Most agricultural monitoring systems detect problems only after plants begin exhibiting visible signs of stress or disease.
            </p>
            <p>
              But biological signals emerge long before visible symptoms appear.
            </p>
            <div className="pl-6 border-l-2 border-[#4caf50] space-y-2 text-gray-600 italic">
              <p>Pathogens communicate.</p>
              <p>Plants respond.</p>
              <p>Metabolic pathways shift.</p>
              <p>Chemical signals accumulate.</p>
            </div>
            <p>
              These biological changes create an early detection window that remains largely invisible to today's agricultural technologies. EndoBio is designed to operate inside that window.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-0">
              {[
                { label: 'Infection', sublabel: 'Pathogen enters the root zone', highlight: false },
                { label: 'Biological Signals Emerge', sublabel: 'Metabolic shifts, molecular markers detectable', highlight: true },
                { label: 'Visible Symptoms', sublabel: 'Yellowing, wilting, lesions appear', highlight: false },
                { label: 'Yield Loss', sublabel: 'Damage is largely irreversible', highlight: false },
              ].map((step, i) => (
                <div key={i} className="relative flex items-start gap-6 pb-10 last:pb-0">
                  <div className={`relative z-10 flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${step.highlight ? 'bg-[#4caf50] ring-4 ring-[#4caf50]/20' : 'bg-white ring-2 ring-gray-300'}`}>
                    {step.highlight
                      ? <span className="text-white text-xs font-bold">★</span>
                      : <span className="text-gray-400 text-sm font-bold">{i + 1}</span>
                    }
                  </div>
                  <div className={`pt-1.5 rounded-lg px-4 py-3 flex-1 ${step.highlight ? 'bg-[#4caf50]/10 ring-1 ring-[#4caf50]/30' : ''}`}>
                    <p className={`font-semibold ${step.highlight ? 'text-[#4caf50]' : 'text-gray-900'}`}>
                      {step.label}
                      {step.highlight && <span className="ml-2 text-xs font-bold uppercase tracking-widest bg-[#4caf50] text-white px-2 py-0.5 rounded">EndoBio Detection Zone</span>}
                    </p>
                    <p className="text-sm text-gray-600 mt-0.5">{step.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
