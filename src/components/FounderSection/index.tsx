import { ArrowRightIcon } from '@heroicons/react/20/solid'
import posthog from '../../lib/posthog'

export default function FounderSection() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-12">
            Meet the Founder
          </h2>

          <div className="rounded-xl bg-white ring-1 ring-gray-200 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEsinehXomZ8w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699906366929?e=2147483647&v=beta&t=m13Rvfhg9gQBMzpV5aK0prfTnEKt6uieczxnDjmsGEg"
                  alt="Keshav Dial"
                  className="h-24 w-24 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Keshav Dial</h3>
                <p className="text-[#4caf50] font-semibold mb-5">Founder & CEO, EndoBio</p>
                <div className="space-y-4 text-gray-700 leading-7">
                  <p>
                    Keshav holds a PhD in Biochemistry and has spent his career developing AI, bioinformatics, and biological discovery systems.
                  </p>
                  <p>
                    Prior to founding EndoBio, he built genomic mining, metabolomics, and biological discovery platforms supporting agricultural research initiatives involving Indigo Ag, Corteva Agriscience, and Bayer Crop Science. He later led development of enterprise AI systems and agentic infrastructure at Sanofi.
                  </p>
                  <p>
                    Today, he is combining biological intelligence, sensor engineering, and machine learning to build a new generation of agricultural sensing systems.
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
