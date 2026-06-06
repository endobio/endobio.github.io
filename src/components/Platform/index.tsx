export default function BiologicalLoop() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            The Biological Intelligence Loop
          </h2>
          <p className="text-lg text-gray-600 mb-16">
            Agriculture today operates largely on visible symptoms and historical observations. EndoBio creates a continuous feedback loop between biological discovery, field-scale sensing, and agricultural action.
          </p>

          <div className="space-y-10">
            {/* Discovery */}
            <div className="rounded-xl bg-gray-50 p-8 ring-1 ring-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#4caf50] text-white font-bold text-sm flex-shrink-0">
                  01
                </div>
                <h3 className="text-xl font-bold text-gray-900">Discovery</h3>
              </div>
              <p className="text-gray-700 leading-7 mb-4">
                Historical disease reports, scientific literature, genomic data, metabolomics, and field observations are integrated into a continuously evolving biological knowledge graph.
              </p>
              <p className="text-gray-700 leading-7">
                This discovery engine identifies biomarkers associated with pathogens, environmental stress, and crop health — guiding the design of new sensing technologies.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-1 text-[#4caf50]">
                <div className="w-0.5 h-6 bg-[#4caf50]" />
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 12L2 6h12L8 12z" />
                </svg>
              </div>
            </div>

            {/* Detection */}
            <div className="rounded-xl bg-gray-50 p-8 ring-1 ring-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#4caf50] text-white font-bold text-sm flex-shrink-0">
                  02
                </div>
                <h3 className="text-xl font-bold text-gray-900">Detection</h3>
              </div>
              <p className="text-gray-700 leading-7 mb-4">
                Custom molecular sensors continuously monitor the root zone, measuring biological signals before visible symptoms emerge.
              </p>
              <p className="text-gray-700 leading-7">
                Environmental measurements, biological markers, and adaptive sampling strategies provide real-time insight into developing threats.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-1 text-[#4caf50]">
                <div className="w-0.5 h-6 bg-[#4caf50]" />
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 12L2 6h12L8 12z" />
                </svg>
              </div>
            </div>

            {/* Response */}
            <div className="rounded-xl bg-gray-50 p-8 ring-1 ring-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#4caf50] text-white font-bold text-sm flex-shrink-0">
                  03
                </div>
                <h3 className="text-xl font-bold text-gray-900">Response</h3>
              </div>
              <p className="text-gray-700 leading-7 mb-4">
                Sensor observations are transformed into actionable recommendations — scouting priorities, treatment timing, irrigation adjustments, and risk alerts.
              </p>
              <p className="text-gray-700 leading-7">
                Every response generates new field observations that improve future discovery and model development.
              </p>
            </div>
          </div>

          {/* Flywheel callout */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-[#4caf50] to-[#a5d6a7] p-8 text-white">
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
    </div>
  )
}
