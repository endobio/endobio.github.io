import { useEffect } from 'react'
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import posthog from '../lib/posthog'

export default function ForFarmers() {
  useEffect(() => {
    posthog.capture('farmers_page_viewed')
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
              Protect your harvest
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Detect disease weeks before it damages your crops. Get early alerts while you still have time to respond.
            </p>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <div className="py-20 bg-red-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The cost of missing disease
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg ring-1 ring-gray-200">
              <p className="text-3xl font-bold text-red-600 mb-2">
                30-50%
              </p>
              <p className="text-gray-700">
                Potential yield loss from undetected root rot in a single growing season
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg ring-1 ring-gray-200">
              <p className="text-3xl font-bold text-red-600 mb-2">
                Weeks
              </p>
              <p className="text-gray-700">
                Disease is spreading before you see the first symptoms
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg ring-1 ring-gray-200">
            <p className="font-semibold text-gray-900 mb-3">
              By the time visible symptoms appear:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Root systems may already be compromised</li>
              <li>• Treatment options are limited</li>
              <li>• The disease has weeks of growth advantage</li>
              <li>• Your crop damage may be irreversible</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Solution */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Catch disease earlier
          </h2>

          <div className="space-y-8">
            <div className="rounded-lg bg-green-50 p-8 border-l-4 border-[#4caf50]">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What you get with EndoBio
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-[#4caf50] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Early warnings
                    </p>
                    <p className="text-gray-700 text-sm">
                      Alerts weeks before crop symptoms appear, while you still have treatment options
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-[#4caf50] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Better yields
                    </p>
                    <p className="text-gray-700 text-sm">
                      Prevent crop damage instead of managing it after the fact
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-[#4caf50] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Lower losses
                    </p>
                    <p className="text-gray-700 text-sm">
                      Reduce the cost of disease by catching it early
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-[#4caf50] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Peace of mind
                    </p>
                    <p className="text-gray-700 text-sm">
                      Know what's happening in your soil in real time
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gradient-to-r from-[#4caf50] to-[#a5d6a7] p-8 text-white">
              <h3 className="text-xl font-semibold mb-3">
                How it works
              </h3>
              <ol className="space-y-2 text-green-50">
                <li><span className="font-bold">1.</span> We deploy simple monitoring in your fields</li>
                <li><span className="font-bold">2.</span> The system detects biological signals of disease</li>
                <li><span className="font-bold">3.</span> You get an alert before symptoms appear</li>
                <li><span className="font-bold">4.</span> You take action and save your crop</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Be among the first
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            We're partnering with early adopter farms. Get early access to disease detection that works.
          </p>
          <a
            href="mailto:keshav@endobio.ai?subject=Interest: Early Access (Farmer)"
            className="inline-flex items-center gap-2 rounded-lg bg-[#4caf50] px-10 py-4 font-semibold text-white hover:bg-[#45a049] transition-colors"
            onClick={() => posthog.capture('farmer_early_access_clicked', { location: 'farmers_page' })}
          >
            Request early access
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
