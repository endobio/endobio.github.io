export default function ProgressSection() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Current Progress
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Moving from discovery to deployment.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#4caf50] mb-5">Completed</h3>
              <div className="space-y-3">
                {[
                  'Agricultural disease intelligence platform',
                  'Global disease surveillance ingestion',
                  'Scientific literature mining',
                  'Biological knowledge graph infrastructure',
                  'Biomarker identification workflows',
                  'Electrochemical sensing prototype',
                  'Root-zone sampling architecture',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-[#4caf50] font-bold">✓</span>
                    <p className="text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-5">In Progress</h3>
              <div className="space-y-3">
                {[
                  'Biomarker validation',
                  'Sensor calibration',
                  'Greenhouse testing',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-blue-500 font-bold">→</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Next</h3>
              <div className="space-y-3">
                {[
                  'Pilot deployments',
                  'Commercial validation',
                  'Industry intelligence platform',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-gray-400 font-bold">→</span>
                    <p className="text-gray-500">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
