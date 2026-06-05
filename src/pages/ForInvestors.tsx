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
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The biology layer of precision agriculture
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Defensible market opportunity. Integrated platform. Founder with deep domain expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We're Building</h2>
          <div className="rounded-xl bg-gradient-to-r from-[#4caf50] to-[#a5d6a7] p-10 text-white mb-10">
            <p className="text-2xl font-semibold italic leading-relaxed">
              "Plants are talking. We haven't started listening."
            </p>
          </div>
          <p className="text-lg text-gray-700 leading-8 mb-6">
            EndoBio is building a molecular sensing platform that combines biological intelligence, sensor engineering, and AI-driven analytics to detect crop stress and disease weeks before visible symptoms appear.
          </p>
          <p className="text-lg text-gray-700 leading-8">
            Our platform spans the full stack: scientific discovery, electrochemical biosensing, edge AI, and distributed field intelligence — giving farmers actionable signals while there's still time to act.
          </p>
        </div>
      </div>

      {/* Market Opportunity */}
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
              <p className="text-gray-700">Of crop loss preventable with earlier detection</p>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-8 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-900 mb-3">Why now?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Climate change is accelerating disease pressure and environmental volatility</li>
              <li>• Agriculture is rapidly adopting precision technologies</li>
              <li>• AI capabilities now enable molecular signal identification at field scale</li>
              <li>• Sensor costs have dropped to enable distributed deployment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Current Milestones */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Current Milestones</h2>

          <div className="space-y-3 mb-10">
            {[
              'Agricultural disease intelligence platform operational',
              'Global disease surveillance and literature mining pipeline developed',
              'Knowledge graph for pathogen, crop, and biomarker discovery',
              'AI-guided target identification workflows',
              'Prototype electrochemical sensing platform completed',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-[#4caf50] font-bold text-lg">✓</span>
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8 space-y-3">
            {[
              'Greenhouse validation in development',
              'Pilot partner discussions underway',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-[#4caf50] font-bold text-lg">→</span>
                <p className="text-gray-600 italic">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder */}
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Founder</h2>

          <div className="rounded-xl bg-white ring-1 ring-gray-200 p-8">
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEsinehXomZ8w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699906366929?e=2147483647&v=beta&t=m13Rvfhg9gQBMzpV5aK0prfTnEKt6uieczxnDjmsGEg"
                  alt="Keshav Dial"
                  className="h-20 w-20 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Keshav Dial</h3>
                <p className="text-[#4caf50] font-semibold mb-4">Founder & CEO</p>
                <div className="space-y-3 text-gray-700 text-sm leading-7">
                  <p>PhD in Biochemistry. Career at the intersection of machine learning, bioinformatics, and scientific instrumentation.</p>
                  <p>Built genomic mining, metabolomics, and biological discovery platforms supporting agricultural research at Indigo Ag, Corteva Agriscience, and Bayer Crop Science. Led development of enterprise AI systems and agentic infrastructure at Sanofi.</p>
                </div>
                <a
                  href="/#/founder"
                  className="inline-flex items-center gap-1.5 mt-5 text-[#4caf50] font-semibold hover:text-[#45a049] transition-colors text-sm"
                >
                  Full profile <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why EndoBio Wins */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why EndoBio Wins</h2>

          <div className="space-y-6">
            {[
              {
                title: 'Defensible Moat',
                body: 'Early detection capability built on proprietary data collection, real-world farm networks, and continuous model improvement. The platform requires deployed hardware, real-time field data, and years of learning — not replicable by software-only plays.',
              },
              {
                title: 'Integrated Platform',
                body: 'EndoBio vertically integrates discovery, sensing, and inference. This creates switching costs and defensibility that pure software plays cannot match.',
              },
              {
                title: 'Recurring Revenue',
                body: 'Value is measured in prevented crop loss. A single prevented disease event pays for years of service — making the ROI case clear from day one.',
              },
              {
                title: 'Expansion Path',
                body: 'Start with disease detection. Expand to broader crop health monitoring, yield optimization, and soil health. Each farm becomes a long-term intelligence asset.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-8 ring-1 ring-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fundraising Status */}
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Fundraising</h2>
          <div className="rounded-lg bg-white ring-1 ring-gray-200 p-8">
            <p className="text-lg text-gray-700 leading-8 mb-6">
              EndoBio is currently raising its pre-seed round to fund greenhouse validation, initial field pilots, and team expansion.
            </p>
            <p className="text-gray-600">
              For deck access and detailed materials, reach out directly.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's talk</h2>
          <p className="text-lg text-gray-700 mb-10">
            If you see the opportunity, we'd like to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:keshav@endobio.ai?subject=Investor Inquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4caf50] px-10 py-4 font-semibold text-white hover:bg-[#45a049] transition-colors"
              onClick={() => posthog.capture('investor_contact_clicked', { location: 'investors_page' })}
            >
              Schedule a conversation
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:keshav@endobio.ai?subject=Deck Request"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-10 py-4 font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 transition-colors"
              onClick={() => posthog.capture('deck_requested', { location: 'investors_page' })}
            >
              Request the deck
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
