import { useEffect } from 'react'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import {
  CpuChipIcon,
  BeakerIcon,
  SignalIcon,
} from '@heroicons/react/24/outline'
import posthog from '../lib/posthog'
import {
  Section,
  Container,
  Eyebrow,
  Heading,
  Card,
  StatCard,
  GradientPanel,
  PageHero,
  ProgressBadge,
  IconBox,
} from '../components/ui'

const stackLayers = [
  {
    icon: BeakerIcon,
    layer: 'Layer 1',
    title: 'Knowledge Graph',
    body: 'Biological discovery engine mining disease literature, genomics, and metabolomics into a continuously evolving network of crop-pathogen-biomarker relationships.',
  },
  {
    icon: SignalIcon,
    layer: 'Layer 2',
    title: 'Molecular Sensing',
    body: 'Custom molecular sensors designed from the knowledge graph up — detecting root-zone biomarkers at field scale, continuously.',
  },
  {
    icon: CpuChipIcon,
    layer: 'Layer 3',
    title: 'Intelligence Platform',
    body: 'Edge AI and decision support transforms biological signals into ranked alerts, response plans, and field intelligence delivered to growers.',
  },
]

const completed = [
  'Agricultural disease intelligence platform',
  'Knowledge graph infrastructure',
  'Biomarker discovery workflows',
  'Molecular sensing prototype',
  'Root-zone sampling architecture',
  'Global disease surveillance ingestion',
]

const inProgress = [
  'Biomarker validation in controlled conditions',
  'Sensor calibration against lab standards',
  'Greenhouse trial design',
]

const next = [
  'Pilot farm deployments (3–5 partners)',
  'Commercial validation',
  'Series A readiness',
]

const milestones = [
  {
    label: 'Biomarker validation',
    detail: 'Confirm key sensing targets under controlled conditions',
    status: 'active' as const,
  },
  {
    label: 'Sensor calibration',
    detail: 'Precision validation against established laboratory standards',
    status: 'active' as const,
  },
  {
    label: 'Greenhouse trials',
    detail: 'Demonstrate early detection across target soybean diseases',
    status: 'next' as const,
  },
  {
    label: 'Pilot deployments',
    detail: 'Deploy with 3–5 farm partners; real-world proof points',
    status: 'next' as const,
  },
  {
    label: 'Commercial readiness',
    detail: 'Validated unit economics and a clear path to Series A',
    status: 'next' as const,
  },
]

export default function ForInvestors() {
  useEffect(() => {
    posthog.capture('investor_page_viewed')
  }, [])

  return (
    <div>
      <PageHero
        eyebrow="Pre-Seed · Actively Raising"
        title={<>Building the infrastructure for field-scale biological intelligence.</>}
        body="The biological signals that predict crop disease exist. Measuring them continuously, at field scale, has never been practical — until now."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:keshav@endobio.ai?subject=Investor Inquiry"
            className="rounded-full bg-[#4caf50] px-8 py-3 text-sm font-semibold text-white hover:bg-[#45a049] transition-colors shadow-sm inline-flex items-center gap-2"
            onClick={() => posthog.capture('investor_contact_clicked', { location: 'investors_hero' })}
          >
            Schedule a conversation
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:keshav@endobio.ai?subject=Deck Request"
            className="rounded-full bg-white ring-1 ring-gray-300 px-8 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
            onClick={() => posthog.capture('deck_requested', { location: 'investors_hero' })}
          >
            Request materials
          </a>
        </div>
      </PageHero>

      {/* Core thesis */}
      <Section variant="white">
        <Container narrow>
          <div
            className="rounded-2xl p-10 mb-12"
            style={{
              background: 'linear-gradient(135deg, #1a2f1b 0%, #1e3d1f 60%, #2a4d2b 100%)',
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">
              The Thesis
            </p>
            <blockquote
              className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              "Plants are talking.<br />We haven't started listening."
            </blockquote>
            <p className="text-emerald-200 leading-7 text-base">
              The biological signals that indicate developing crop disease exist long before visible
              symptoms appear. Pathogens communicate. Plants respond. Metabolic pathways shift.
              These changes are measurable — but measuring them continuously, at field scale, has
              never been practical. EndoBio is building the infrastructure to change that.
            </p>
          </div>

          <div className="space-y-5 text-gray-700 leading-8">
            <p>
              EndoBio is building the discovery, sensing, and analytics infrastructure required to
              make biological field monitoring routine. The platform combines a biological knowledge
              graph, custom molecular sensors, and edge AI to create a continuous loop between
              biological discovery and agricultural action.
            </p>
          </div>
        </Container>
      </Section>

      {/* Market */}
      <Section variant="muted">
        <Container>
          <div className="text-center mb-14">
            <Eyebrow>Market Opportunity</Eyebrow>
            <Heading size="md">A problem measured in trillions</Heading>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              value="$1.7T"
              label="Annual global crop loss"
              sub="from disease and pests"
              accent
            />
            <StatCard
              value="20–40%"
              label="Preventable with earlier detection"
              sub="conservative estimate"
            />
            <StatCard
              value="$170M+"
              label="Bushels lost annually"
              sub="to major soybean diseases, N. America"
            />
            <StatCard
              value="$4–5B+"
              label="Economic impact"
              sub="in severe disease years"
            />
          </div>

          <Card padding="lg">
            <p className="text-xs font-semibold text-[#4caf50] uppercase tracking-widest mb-4">
              Why Now
            </p>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {[
                'Climate change is accelerating disease pressure globally',
                'Precision agriculture adoption is accelerating rapidly',
                'Sensor economics now enable distributed field-scale deployment',
                'AI and biological data infrastructure have reached maturity',
                'Biological signal databases are now rich enough to act on',
                'Growers are actively seeking decision support for disease risk',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-[#4caf50]/10 ring-1 ring-[#4caf50]/30 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4caf50]" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      {/* Platform stack */}
      <Section variant="white">
        <Container>
          <div className="text-center mb-14">
            <Eyebrow>Platform Architecture</Eyebrow>
            <Heading size="md">Three layers. One integrated platform.</Heading>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              EndoBio is not a sensor company or a software company — it is a biological
              intelligence platform. Each layer compounds the value of the others.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stackLayers.map((layer, i) => (
              <Card key={layer.title} hover className="relative">
                {/* Layer number */}
                <div className="absolute top-6 right-6 text-xs font-mono text-gray-300">
                  {layer.layer}
                </div>
                <IconBox className="mb-5">
                  <layer.icon className="h-5 w-5 text-[#4caf50]" />
                </IconBox>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{layer.title}</h3>
                <p className="text-sm text-gray-600 leading-6">{layer.body}</p>

                {/* Connector */}
                {i < stackLayers.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="h-6 w-6 rounded-full bg-white ring-1 ring-gray-200 flex items-center justify-center">
                      <ArrowRightIcon className="h-3 w-3 text-gray-400" />
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Flywheel note */}
          <div
            className="mt-8 rounded-2xl p-6 ring-1 ring-[#4caf50]/20"
            style={{ background: 'linear-gradient(135deg, #f0faf0 0%, #e8f5e9 100%)' }}
          >
            <p className="text-sm text-center text-gray-700">
              <span className="font-semibold text-[#4caf50]">Compounding flywheel:</span>{' '}
              Knowledge Graph → better sensor targets → more field data → stronger knowledge graph.
              Each deployment improves prediction quality for every subsequent deployment.
            </p>
          </div>
        </Container>
      </Section>

      {/* Traction / Progress */}
      <Section variant="muted">
        <Container>
          <div className="text-center mb-14">
            <Eyebrow>Current Status</Eyebrow>
            <Heading size="md">Technology development underway</Heading>
            <p className="mt-4 text-gray-600">
              Core systems are operational. Validation work has begun.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Completed */}
            <Card padding="lg">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-[#4caf50]" />
                <p className="text-xs font-semibold text-[#4caf50] uppercase tracking-widest">
                  Completed
                </p>
              </div>
              <ul className="space-y-3">
                {completed.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="mt-0.5 h-4 w-4 text-[#4caf50] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* In Progress */}
            <Card padding="lg">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest">
                  In Progress
                </p>
              </div>
              <ul className="space-y-3">
                {inProgress.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="mt-0.5 h-4 w-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Next */}
            <Card padding="lg">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-gray-300" />
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Next
                </p>
              </div>
              <ul className="space-y-3">
                {next.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                    <svg className="mt-0.5 h-4 w-4 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* The raise */}
      <Section variant="white">
        <Container narrow>
          <Eyebrow>The Raise</Eyebrow>
          <Heading size="md" className="mb-10">Pre-Seed Round</Heading>

          {/* Raise stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div
              className="rounded-2xl p-6 text-center ring-1 ring-gray-200"
            >
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Stage</p>
              <p className="text-xl font-bold text-gray-900">Pre-Seed</p>
            </div>
            <div
              className="rounded-2xl p-6 text-center ring-2 ring-[#4caf50]/40"
              style={{ background: '#f0faf0' }}
            >
              <p className="text-xs font-semibold text-[#4caf50] uppercase tracking-widest mb-2">Round Size</p>
              <p className="text-xl font-bold text-gray-900">$1.5M</p>
            </div>
            <div
              className="rounded-2xl p-6 text-center ring-1 ring-gray-200"
            >
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Status</p>
              <p className="text-xl font-bold text-[#4caf50]">Raising</p>
            </div>
          </div>

          {/* Use of funds */}
          <Card padding="lg" className="mb-8">
            <h3 className="text-base font-bold text-gray-900 mb-6">What this round unlocks</h3>
            <div className="space-y-5">
              {milestones.map((m) => (
                <div key={m.label} className="flex items-start gap-4">
                  <ProgressBadge status={m.status} />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{m.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <p className="text-sm text-gray-500 leading-7">
            EndoBio is raising capital to accelerate the transition from prototype systems to
            validated field deployments and commercial pilots — generating the proof points required
            for a Series A and sustainable commercial growth.
          </p>
        </Container>
      </Section>

      {/* Founder */}
      <Section variant="muted">
        <Container narrow>
          <Eyebrow>The Founder</Eyebrow>
          <Card padding="lg">
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/keshav.jpg"
                  alt="Keshav Dial"
                  className="h-20 w-20 rounded-full object-cover ring-2 ring-[#4caf50]/20"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Keshav Dial</h3>
                <p className="text-[#4caf50] font-semibold text-sm mb-4">Founder & CEO, EndoBio</p>
                <div className="space-y-3 text-gray-600 text-sm leading-7">
                  <p>
                    PhD in Biochemistry focused on AI-driven natural product discovery. Built
                    genomic mining, metabolomic analysis, and biological discovery platforms
                    supporting agricultural R&D.
                  </p>
                  <p>
                    Prior work supported computational biology and discovery initiatives involving
                    organizations such as Bayer Crop Science, Corteva Agriscience, and Indigo Ag.
                    Repeatedly encountered the gap between laboratory signal identification and
                    field-scale measurement. Founded EndoBio to close it.
                  </p>
                </div>
                <a
                  href="/#/founder"
                  className="inline-flex items-center gap-1.5 mt-4 text-[#4caf50] text-sm font-semibold hover:text-[#45a049] transition-colors"
                  onClick={() => posthog.capture('founder_profile_clicked', { location: 'investors_page' })}
                >
                  Full profile <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="green-tint">
        <Container narrow>
          <GradientPanel>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200 mb-3">
                Let's Talk
              </p>
              <h2
                className="text-3xl font-bold text-white mb-4"
                style={{ letterSpacing: '-0.02em' }}
              >
                If you see the opportunity, we'd like to hear from you.
              </h2>
              <p className="text-emerald-100 mb-8 max-w-lg mx-auto">
                We're building with investors who understand the convergence of biological
                discovery, precision sensing, and agricultural intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:keshav@endobio.ai?subject=Investor Inquiry"
                  className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#4caf50] hover:bg-emerald-50 transition-colors inline-flex items-center justify-center gap-2"
                  onClick={() =>
                    posthog.capture('investor_contact_clicked', { location: 'investors_cta' })
                  }
                >
                  Schedule a conversation
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href="mailto:keshav@endobio.ai?subject=Deck Request"
                  className="rounded-full bg-white/10 ring-1 ring-white/30 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                  onClick={() =>
                    posthog.capture('deck_requested', { location: 'investors_cta' })
                  }
                >
                  Request investor materials
                </a>
              </div>
            </div>
          </GradientPanel>
        </Container>
      </Section>
    </div>
  )
}
