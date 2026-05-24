import { ArrowRightIcon } from '@heroicons/react/20/solid'

export default function ForInvestors() {
  return (
    <div>
      {/* Hero */}
      <div className="relative isolate pt-14 pb-20">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4caf50] to-[#a5d6a7] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The biology layer of precision agriculture
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Defensible market opportunity. Integrated platform. Clear path to unit economics.
            </p>
          </div>
        </div>
      </div>

      {/* Market Opportunity */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Market Opportunity
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-4xl font-bold text-[#4caf50] mb-3">
                $1.7T
              </p>
              <p className="text-gray-700">
                Annual global crop loss from disease and pests
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#4caf50] mb-3">
                20-40%
              </p>
              <p className="text-gray-700">
                Of crop loss could be prevented with early detection
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-8 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-900 mb-3">
              Why now?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• AI capabilities have matured enough for edge inference</li>
              <li>• Sensor costs have dropped to enable distributed deployment</li>
              <li>• Farmers are ready for data-driven decision making</li>
              <li>• Climate change is increasing disease pressure</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why EndoBio Wins */}
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Why EndoBio Wins
          </h2>

          <div className="space-y-6">
            <div className="rounded-lg bg-white p-8 ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Defensible Moat
              </h3>
              <p className="text-gray-700">
                Early detection capability built on proprietary data collection, real-world farm networks, and continuous model improvement. Farmers can't replicate this—it requires deployed hardware, real-time field data, and years of learning.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Integrated Platform
              </h3>
              <p className="text-gray-700">
                Most AgTech companies are software-only or hardware-only. EndoBio vertically integrates discovery, sensing, and inference. This creates switching costs and defensibility that pure software plays can't match.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Recurring Revenue
              </h3>
              <p className="text-gray-700">
                Value is measured in prevented crop loss. Farmers see ROI immediately. Early adopters become long-term customers because the business case is clear—lower losses pay for the service many times over.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expansion Path
              </h3>
              <p className="text-gray-700">
                Start with disease detection. Expand to broader crop health monitoring, yield optimization, and soil health. Each farm becomes a long-term intelligence asset.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Model */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Unit Economics
          </h2>

          <div className="rounded-lg bg-green-50 p-8 border-l-4 border-[#4caf50]">
            <h3 className="font-semibold text-gray-900 mb-6">
              Economics that work
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Deployment cost per farm
                </p>
                <p className="text-gray-700">
                  Reasonable first installation, then recurring SaaS model for monitoring and alerts
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Farmer ROI
                </p>
                <p className="text-gray-700">
                  Early disease detection prevents 5-15% yield loss. At commodity prices, a single prevented disease event pays for years of service
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Margins
                </p>
                <p className="text-gray-700">
                  Edge AI keeps infrastructure costs low. Real-time detection runs on-farm, not in expensive cloud infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Vision */}
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Long-term Vision
          </h2>

          <div className="rounded-lg bg-gradient-to-r from-[#4caf50] to-[#a5d6a7] p-10 text-white">
            <h3 className="text-2xl font-bold mb-6">
              A continuously learning intelligence network
            </h3>
            <div className="space-y-4">
              <p>
                <span className="font-bold">Year 1-2:</span> Deploy disease detection across early adopter farms, build proof points, achieve unit economics
              </p>
              <p>
                <span className="font-bold">Year 3+:</span> Expand to broader crop health monitoring, build network effects where farm data improves models for all farmers
              </p>
              <p>
                <span className="font-bold">Long-term:</span> The platform becomes the infrastructure layer for biological intelligence in agriculture—what traditional soil testing used to be, but real-time and AI-driven
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Let's talk
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            We're building the future of agricultural intelligence. If you see the opportunity, let's connect.
          </p>
          <a
            href="mailto:keshav@endobio.ai?subject=Partnership Inquiry (Investor)"
            className="inline-flex items-center gap-2 rounded-lg bg-[#4caf50] px-10 py-4 font-semibold text-white hover:bg-[#45a049] transition-colors"
          >
            Schedule a conversation
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
