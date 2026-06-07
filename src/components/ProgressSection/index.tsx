export default function ProgressSection() {
  return (
    <div className="bg-[#f5f5f7] pb-24 pt-12 sm:pb-32 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-[#4caf50]">
            Deployment path
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Current Progress
          </h2>
          <p className="text-lg text-[#6e6e73] mb-12">
            Moving from discovery to deployment.
          </p>

          <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/5">
            <div className="p-8 sm:p-10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#4caf50] mb-5">Completed</h3>
              <div className="space-y-3">
                {[
                  'Agricultural disease intelligence platform',
                  'Global disease surveillance ingestion',
                  'Scientific literature mining',
                  'Biological knowledge graph infrastructure',
                  'Biomarker identification workflows',
                  'Molecular sensing prototype',
                  'Root-zone sampling architecture',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-[#4caf50] font-bold">✓</span>
                    <p className="text-[#1d1d1f]/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#e5e5e5] p-8 sm:p-10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-5">In Progress</h3>
              <div className="space-y-3">
                {[
                  'Biomarker validation',
                  'Sensor calibration',
                  'Greenhouse testing',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-blue-500 font-bold">→</span>
                    <p className="text-[#1d1d1f]/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#e5e5e5] p-8 sm:p-10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#6e6e73] mb-5">Next</h3>
              <div className="space-y-3">
                {[
                  'Pilot deployments',
                  'Commercial validation',
                  'Industry intelligence platform',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-[#6e6e73] font-bold">→</span>
                    <p className="text-[#6e6e73]">{item}</p>
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
