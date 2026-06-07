import posthog from '../../lib/posthog'

export default function CTA() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            Join the pilot program
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            EndoBio is working with growers, research farms, and agricultural partners to validate root-zone molecular sensing in high-value crop disease systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#/farmers"
              className="inline-block rounded-full bg-[#4caf50] px-8 py-4 font-semibold text-white hover:bg-[#45a049] transition-colors"
              onClick={() => posthog.capture('vision_cta_clicked', { cta_type: 'pilot_program', location: 'vision' })}
            >
              Join Pilot Program
            </a>
            <a
              href="/#/investors"
              className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 transition-colors"
              onClick={() => posthog.capture('vision_cta_clicked', { cta_type: 'investors', location: 'vision' })}
            >
              For Investors
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
