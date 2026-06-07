import { BookOpenIcon, SignalIcon, BoltIcon } from '@heroicons/react/24/outline'
import { Section, Container, Eyebrow, Heading, IconBox } from '../ui'

const pillars = [
  {
    title: 'Discover',
    step: '01',
    icon: BookOpenIcon,
    description:
      "EndoBio's knowledge graph maps crop diseases, molecular biomarkers, geography, and intervention timing from scientific literature, genomic data, and field observations.",
  },
  {
    title: 'Detect',
    step: '02',
    icon: SignalIcon,
    description:
      'Buried molecular sensors monitor root-zone chemistry before visual symptoms appear. Biological signals are detected at the earliest stages of disease development.',
  },
  {
    title: 'Respond',
    step: '03',
    icon: BoltIcon,
    description:
      'Field intelligence is translated into scouting, irrigation, and treatment recommendations. Every alert comes with ranked response options tailored to your operation.',
  },
]

export default function PlatformShowcase() {
  return (
    <Section variant="white">
      <Container>
        <div className="text-center mb-16">
          <Eyebrow>The Platform</Eyebrow>
          <Heading>How EndoBio Works</Heading>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A complete system for biological field intelligence — from molecular discovery to
            field-scale sensing to actionable response.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group rounded-2xl bg-white ring-1 ring-gray-200 p-8 hover:ring-[#4caf50]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <IconBox>
                  <pillar.icon className="h-5 w-5 text-[#4caf50]" />
                </IconBox>
                <span className="text-xs font-bold text-gray-300 tracking-widest">{pillar.step}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 leading-7 text-sm">{pillar.description}</p>

              {/* Connecting arrow — hidden on last card */}
              {i < pillars.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        {/* Flow connector */}
        <div className="hidden md:flex justify-center gap-0 mt-6 mb-0 text-gray-300 pointer-events-none select-none">
          <div className="flex-1 flex justify-end pr-4 pt-1">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="opacity-40">
              <path d="M0 10 Q30 0 60 10" stroke="#4caf50" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M54 7 L60 10 L54 13" stroke="#4caf50" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="flex-1 flex justify-end pr-4 pt-1">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="opacity-40">
              <path d="M0 10 Q30 0 60 10" stroke="#4caf50" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M54 7 L60 10 L54 13" stroke="#4caf50" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="flex-1" />
        </div>

        {/* Loop callout */}
        <div
          className="mt-10 rounded-2xl p-8 ring-1 ring-[#4caf50]/20"
          style={{ background: 'linear-gradient(135deg, #f0faf0 0%, #e8f5e9 100%)' }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-full bg-[#4caf50]/10 ring-1 ring-[#4caf50]/30 flex items-center justify-center">
                <svg className="h-5 w-5 text-[#4caf50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#4caf50] uppercase tracking-widest mb-1">
                Biological Intelligence Loop
              </p>
              <p className="text-gray-700 text-sm leading-6">
                Every detection improves the knowledge graph. Every field response generates new biological observations. The system continuously learns and improves its predictions over time.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
