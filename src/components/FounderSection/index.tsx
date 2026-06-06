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
                  src="/keshav.jpg"
                  alt="Keshav Dial"
                  className="h-24 w-24 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Keshav Dial</h3>
                <p className="text-[#4caf50] font-semibold mb-5">Founder & CEO, EndoBio</p>
                <div className="space-y-3 text-gray-700 leading-7">
                  <p>
                    PhD in Biochemistry. Built production AI systems at scale. Career at the intersection of machine learning, bioinformatics, and biological discovery.
                  </p>
                  <p>
                    Built genomic and metabolomic discovery platforms for agricultural R&D at Indigo Ag, Corteva Agriscience, and Bayer Crop Science. At Sanofi, designed and shipped multiple end-to-end AI systems — including the proof of concept for <span className="font-semibold text-gray-900">Sanofi Concierge</span>, the company's globally deployed internal AI assistant — and architected a biomedical knowledge graph platform in Neo4j with graph-based RAG.
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
