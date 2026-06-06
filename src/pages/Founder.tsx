import { useEffect } from 'react'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import posthog from '../lib/posthog'

const background = [
  {
    org: 'PhD in Biochemistry',
    role: '',
    summary: 'Deep scientific foundation in biological systems, with a focus on the molecular signals that govern crop health and stress response.',
    bullets: [],
  },
  {
    org: 'Indigo Ag · Corteva Agriscience · Bayer Crop Science',
    role: 'Genomics & Metabolomics Platforms',
    summary: 'Built large-scale discovery platforms for genomic and metabolomic research supporting agricultural R&D programs.',
    bullets: [
      'Developed the underlying algorithms, analytical workflows, and software systems for biological target identification',
      'Generated actionable insights from large-scale biological datasets across multiple crop programs',
    ],
  },
  {
    org: 'Sanofi',
    role: 'Data & ML Engineer → R&D AI/ML Product Engineer',
    summary: 'Designed and built multiple end-to-end AI systems across R&D, clinical operations, internal knowledge, and investor relations — including the proof of concept for Sanofi Concierge, the company\'s globally deployed internal AI assistant.',
    bullets: [
      'Architected an integrated biomedical knowledge graph platform (GeneCards, MalaCards, STRING) in Neo4j with natural-language querying and graph-based RAG, prior to mainstream Graph RAG adoption',
      'Built production LLM applications for document synthesis, reconciliation, and automated standards enforcement across enterprise knowledge bases',
      'Developed internal AI agents and retrieval systems over enterprise-scale datasets with fine-grained access control across geographies',
      'Led cloud-native redeployment of legacy ML tools and fine-tuned domain-specific models including cross-species pharmacodynamic modeling',
    ],
  },
]

export default function Founder() {
  useEffect(() => {
    posthog.capture('founder_page_viewed')
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
            <img
              src="/keshav.jpg"
              alt="Keshav Dial"
              className="mx-auto h-32 w-32 rounded-full object-cover mb-6 ring-4 ring-[#4caf50]/20"
            />
            <p className="text-base font-semibold text-[#4caf50] uppercase tracking-widest mb-4">
              Founder & CEO
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Keshav Dial
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700 max-w-2xl mx-auto">
              PhD Biochemist. Built production AI systems at scale. Now applying both to early crop disease detection.
            </p>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-8">
              Keshav Dial is the Founder and CEO of EndoBio. He holds a PhD in Biochemistry and has spent his career at the intersection of machine learning, bioinformatics, and biological discovery.
            </p>
            <p className="text-lg leading-8">
              Before EndoBio, Keshav built genomic and metabolomic discovery platforms supporting agricultural R&D programs at Indigo Ag, Corteva Agriscience, and Bayer Crop Science — responsible for the algorithms, workflows, and software systems used to identify biological targets and generate insights from large-scale datasets.
            </p>
            <p className="text-lg leading-8">
              At Sanofi, he designed and shipped multiple end-to-end AI systems across R&D, clinical operations, and enterprise knowledge management. He built the proof of concept for <span className="font-semibold text-gray-900">Sanofi Concierge</span>, the company's globally deployed internal AI assistant, and architected a biomedical knowledge graph platform in Neo4j with graph-based RAG and natural-language querying — prior to mainstream Graph RAG adoption.
            </p>
            <p className="text-lg leading-8">
              Today, he is applying that experience — deep biological understanding, production AI systems, and enterprise-scale data infrastructure — to build EndoBio's molecular sensing platform for agriculture.
            </p>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Background</h2>

          <div className="space-y-6">
            {background.map((item) => (
              <div key={item.org} className="rounded-lg bg-white p-8 ring-1 ring-gray-200">
                <p className="text-xs font-semibold text-[#4caf50] uppercase tracking-widest mb-1">{item.org}</p>
                {item.role && (
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.role}</h3>
                )}
                <p className="text-gray-700 mb-4">{item.summary}</p>
                {item.bullets.length > 0 && (
                  <ul className="space-y-2">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-0.5 flex-shrink-0 text-[#4caf50] font-bold">·</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-lg bg-gradient-to-r from-[#4caf50] to-[#a5d6a7] p-10 text-white">
            <h2 className="text-2xl font-bold mb-4">Why EndoBio</h2>
            <p className="text-lg leading-8">
              Agriculture loses $1.7 trillion annually to crop disease — most of it preventable with earlier detection. Keshav founded EndoBio to close that gap by combining the biological intelligence from his agricultural research career with the production AI infrastructure he built at Sanofi.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in touch</h2>
          <p className="text-lg text-gray-700 mb-10">
            Interested in learning more about EndoBio or working together?
          </p>
          <a
            href="mailto:keshav@endobio.ai"
            className="inline-flex items-center gap-2 rounded-lg bg-[#4caf50] px-10 py-4 font-semibold text-white hover:bg-[#45a049] transition-colors"
            onClick={() => posthog.capture('founder_contact_clicked')}
          >
            Reach out
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
