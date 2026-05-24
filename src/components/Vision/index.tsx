import { ArrowRightIcon } from '@heroicons/react/20/solid'

export default function Vision() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            The Long-Term Vision
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A continuously learning biological intelligence network for agriculture.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-12 ring-1 ring-emerald-200">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-600 text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Deployed Sensors Generate Real-World Field Data
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Distributed sensor networks continuously collect biological and environmental signals across farming regions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-600 text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Field Data Improves Biological Models
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Real-world signals train and validate AI models, creating increasingly accurate disease prediction systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-600 text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Models Improve Target Discovery
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Validated biological patterns identify new sensing targets and biomarkers for future deployment.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-600 text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Knowledge Graph Continuously Expands
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Scientific literature, field data, and model insights feed back into the knowledge graph, expanding agricultural intelligence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-emerald-200">
              <p className="text-center text-gray-700 font-semibold">
                This creates a feedback loop between literature, sensors, farms, and AI systems — continuously learning and improving.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <div className="rounded-2xl bg-gray-900 text-white p-12">
            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Turn invisible biological signals in soil into actionable agricultural intelligence.
            </p>
            <div className="space-y-3 text-left inline-block">
              <p className="flex items-center gap-2">
                <span className="text-emerald-400 text-xl">→</span>
                <span>Discover disease through AI-native knowledge systems</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-400 text-xl">→</span>
                <span>Detect disease through low-cost distributed sensing</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-400 text-xl">→</span>
                <span>Respond through integration into existing agricultural workflows</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to learn more?
          </h3>
          <p className="text-gray-600 mb-8">
            Join us in building the future of agricultural intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:keshav@endobio.ai"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              Get in touch
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="#platform"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-8 py-3 font-semibold text-gray-900 hover:bg-gray-300 transition-colors"
            >
              Explore platform
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
