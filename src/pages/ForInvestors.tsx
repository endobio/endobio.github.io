import { useEffect } from 'react'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import posthog from '../lib/posthog'

export default function ForInvestors() {
  useEffect(() => {
    posthog.capture('investor_page_viewed')
  }, [])

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
            <p className="text-sm font-semibold text-[#4caf50] uppercase tracking-widest mb-4">
              Pre-Seed · Actively Raising
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Building the infrastructure for field-scale biological intelligence
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700 max-w-3xl mx-auto">
              We spent years discovering biological signals for agriculture. EndoBio is building the systems required to measure those signals in the field and transform them into actionable intelligence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:keshav@endobio.ai?subject=Investor Inquiry"
                className="inline-flex items-center gap-2 rounded-lg bg-[#4caf50] px-8 py-4 font-semibold text-white hover:bg-[#45a049] transition-colors"
                onClick={() => posthog.capture('investor_contact_clicked', { location: 'investors_hero' })}
              >
                Schedule a conversation
                <ArrowRightIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:keshav@endobio.ai?subject=Deck Request"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 transition-colors"
                onClick={() => posthog.capture('deck_requested', { location: 'investors_hero' })}
              >
                Request investor materials
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Core narrative */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-xl bg-gradient-to-r from-[#4caf50] to-[#a5d6a7] p-10 text-white mb-12">
            <p className="text-2xl font-semibold italic leading-relaxed">
              "Plants are talking. We haven't started listening."
            </p>
          </div>
          <div className="space-y-5 text-lg text-gray-700 leading-8">
            <p>
              The biological signals that indicate developing crop disease exist long before visible symptoms appear. Pathogens communicate. Plants respond. Metabolic pathways shift. These changes are measurable — but measuring them continuously, at field scale, has never been practical.
            </p>
            <p>
              EndoBio is building the discovery, sensing, and analytics infrastructure required to make that measurement routine. The platform combines a biological knowledge graph, custom molecular sensors, and edge AI to create a continuous loop between biological discovery and agricultural action.
            </p>
          </div>
        </div>
      </div>

      {/* Market */}
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Market Opportunity</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-4xl font-bold text-[#4caf50] mb-3">$1.7T</p>
              <p className="text-gray-700">Annual global crop loss from disease and pests</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#4caf50] mb-3">20–40%</p>
              <p className="text-gray-700">Of that loss preventable with earlier detection</p>
            </div>
          </div>
          <div className="rounded-lg bg-blue-50 p-8 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-900 mb-3">Why now?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Climate change is accelerating disease pressure globally</li>
              <li>• Agriculture is rapidly adopting precision technologies</li>
              <li>• Sensor costs now enable distributed field-scale deployment</li>
              <li>• AI and biological data infrastructure are mature enough to act on these signals</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What exists today */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Exists Today</h2>
          <p className="text-gray-600 mb-10">Technology development is underway. Core systems are operational.</p>
          <div className="space-y-3">
            {[
              'Disease intelligence platform',
              'Knowledge graph infrastructure',
              'Biomarker discovery workflows',
              'Prototype sensing platform',
              'Root-zone sampling architecture',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-[#4caf50] font-bold text-lg">✓</span>
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The raise */}
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">The Raise</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="rounded-xl bg-white ring-1 ring-gray-200 p-6">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Stage</p>
              <p className="text-xl font-bold text-gray-900">Pre-Seed</p>
            </div>
            <div className="rounded-xl bg-white ring-1 ring-gray-200 p-6">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Round Size</p>
              <p className="text-xl font-bold text-gray-900">$1.5M</p>
            </div>
            <div className="rounded-xl bg-white ring-1 ring-gray-200 p-6">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Status</p>
              <p className="text-xl font-bold text-[#4caf50]">Actively Raising</p>
            </div>
          </div>

          <div className="rounded-xl bg-white ring-1 ring-gray-200 p-8 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">What This Round Unlocks</h3>
            <div className="space-y-5">
              {[
                { milestone: 'Biomarker validation', detail: 'Confirm sensing targets in controlled conditions' },
                { milestone: 'Sensor calibration', detail: 'Precision validation against lab standards' },
                { milestone: 'Greenhouse trials', detail: 'Demonstrate early detection across target crop diseases' },
                { milestone: 'Pilot deployments', detail: 'Deploy with 3–5 farm partners to generate real-world proof points' },
                { milestone: 'Commercial readiness', detail: 'Validated unit economics and a clear path to Series A' },
              ].map((item) => (
                <div key={item.milestone} className="flex gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-[#4caf50] font-bold">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.milestone}</p>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-7">
            EndoBio is raising capital to accelerate the transition from prototype systems to validated field deployments and commercial pilots.
          </p>
        </div>
      </div>

      {/* Founder */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Founder</h2>
          <div className="rounded-xl bg-white ring-1 ring-gray-200 p-8">
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-shrink-0">
                <img src="/keshav.jpg" alt="Keshav Dial" className="h-20 w-20 rounded-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Keshav Dial</h3>
                <p className="text-[#4caf50] font-semibold mb-4">Founder & CEO</p>
                <div className="space-y-3 text-gray-700 text-sm leading-7">
                  <p>PhD in Biochemistry focused on AI-driven natural product discovery.</p>
                  <p>Built genomic mining, metabolomic analysis, and biological discovery platforms supporting agricultural research involving Indigo Ag, Corteva Agriscience, and Bayer Crop Science. Repeatedly encountered the gap between laboratory signal identification and field-scale measurement. Founded EndoBio to close it.</p>
                </div>
                <a
                  href="/#/founder"
                  className="inline-flex items-center gap-1.5 mt-5 text-[#4caf50] font-semibold hover:text-[#45a049] transition-colors text-sm"
                  onClick={() => posthog.capture('founder_profile_clicked', { location: 'investors_page' })}
                >
                  Full profile <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's talk</h2>
          <p className="text-lg text-gray-700 mb-10">
            If you see the opportunity, we'd like to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:keshav@endobio.ai?subject=Investor Inquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4caf50] px-10 py-4 font-semibold text-white hover:bg-[#45a049] transition-colors"
              onClick={() => posthog.capture('investor_contact_clicked', { location: 'investors_cta' })}
            >
              Schedule a conversation
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:keshav@endobio.ai?subject=Deck Request"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-10 py-4 font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 transition-colors"
              onClick={() => posthog.capture('deck_requested', { location: 'investors_cta' })}
            >
              Request investor materials
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
