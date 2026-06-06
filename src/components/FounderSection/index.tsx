import { ArrowRightIcon } from '@heroicons/react/20/solid'
import posthog from '../../lib/posthog'

export default function FounderSection() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-12">
            Built from Discovery Experience
          </h2>

          <div className="rounded-xl bg-white ring-1 ring-gray-200 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/keshav.jpg"
                  alt="Keshav Dial"
                  className="h-24 w-24 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Keshav Dial</h3>
                <p className="text-[#4caf50] font-semibold mb-5">Founder & CEO, EndoBio</p>
                <div className="space-y-4 text-gray-700 leading-7">
                  <p>
                    Keshav holds a PhD in Biochemistry with a focus on AI-driven natural product discovery. He has spent his career developing computational systems for biological discovery.
                  </p>
                  <p>
                    Prior to EndoBio, he built genomic mining, metabolomic analysis, and biological discovery platforms supporting agricultural research initiatives involving Indigo Ag, Corteva Agriscience, and Bayer Crop Science.
                  </p>
                  <p className="text-gray-600 italic border-l-2 border-[#4caf50] pl-4">
                    Through this work, he repeatedly encountered the same limitation: we can identify valuable biological signals in the laboratory, but we lack practical systems for measuring them continuously in the field. EndoBio was founded to close that gap.
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="/#/founder"
                    className="inline-flex items-center gap-1.5 text-[#4caf50] font-semibold hover:text-[#45a049] transition-colors text-sm"
                    onClick={() => posthog.capture('founder_profile_clicked', { location: 'homepage' })}
                  >
                    Full profile
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
