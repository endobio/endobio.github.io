import { useEffect } from 'react'
import {
  BeakerIcon,
  SignalIcon,
  BellAlertIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'
import posthog from '../lib/posthog'
import {
  Section,
  Container,
  Eyebrow,
  Heading,
  Card,
  CTAButton,
  GradientPanel,
  PageHero,
  IconBox,
  ProgressBadge,
} from '../components/ui'

const diseases = [
  { name: 'Soybean Cyst Nematode', tag: 'SCN', risk: 'HIGH', color: 'text-red-600', bg: 'bg-red-50' },
  { name: 'White Mold', tag: 'WM', risk: 'HIGH', color: 'text-red-600', bg: 'bg-red-50' },
  { name: 'Sudden Death Syndrome', tag: 'SDS', risk: 'MED', color: 'text-amber-600', bg: 'bg-amber-50' },
  { name: 'Phytophthora Root Rot', tag: 'PRR', risk: 'LOW', color: 'text-emerald-600', bg: 'bg-emerald-50' },
]

const signals = [
  'Azoxystrobin',
  'Coumestrol',
  'Daidzein',
  'Root Exudate Stress',
  'Soil Moisture',
  'Temperature',
]

const steps = [
  {
    icon: BeakerIcon,
    title: 'Sensor Deployed',
    body: 'A small molecular sensor is placed in the root zone. It activates within minutes and begins sampling biological chemistry.',
  },
  {
    icon: SignalIcon,
    title: 'Signals Detected',
    body: 'The sensor reads metabolites, stress molecules, and pathogen markers — comparing them against the biological knowledge graph.',
  },
  {
    icon: BellAlertIcon,
    title: 'Intelligence Delivered',
    body: 'You receive a prioritized alert before visible symptoms appear, with context on the threat and a ranked set of response options.',
  },
  {
    icon: ArrowPathIcon,
    title: 'Loop Improves',
    body: 'Your field response generates new data that improves future predictions — both for your operation and for the broader system.',
  },
]

export default function ForFarmers() {
  useEffect(() => {
    posthog.capture('farmers_page_viewed')
  }, [])

  return (
    <div>
      <PageHero
        eyebrow="Early Warning System for Growers"
        title={<>Know what's happening underground — before it shows above.</>}
        body="EndoBio detects the biological signals of crop disease weeks before visible symptoms appear — giving you time to respond."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton
            href="mailto:keshav@endobio.ai?subject=Interest: Pilot Program (Farmer)"
            variant="primary"
            onClick={() => posthog.capture('pilot_cta_clicked', { location: 'farmers_hero' })}
          >
            Join Pilot Program
          </CTAButton>
          <CTAButton
            href="/#/investors"
            variant="secondary"
            onClick={() => posthog.capture('investor_cta_clicked', { location: 'farmers_hero' })}
          >
            For Investors
          </CTAButton>
        </div>
      </PageHero>

      {/* Detection window — visual, not a warning page */}
      <Section variant="muted" id="detection">
        <Container narrow>
          <Eyebrow>The Problem</Eyebrow>
          <Heading size="md" className="mb-4">The most valuable window is invisible</Heading>
          <p className="text-gray-600 leading-7 mb-12 max-w-2xl">
            By the time visible symptoms appear, the crop has already been under biological stress for
            weeks. EndoBio is designed to operate inside the detection window that current tools
            entirely miss.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-5 top-5 bottom-5 w-px bg-gray-200" />
            <div className="space-y-0">
              {[
                {
                  label: 'Infection',
                  sub: 'Pathogen enters the root zone',
                  highlight: false,
                  step: '01',
                },
                {
                  label: 'Biological Signals',
                  sub: 'Metabolic shifts and molecular markers accumulate — detectable by EndoBio',
                  highlight: true,
                  step: '02',
                },
                {
                  label: 'Visible Symptoms',
                  sub: 'Yellowing, wilting, or lesions appear',
                  highlight: false,
                  step: '03',
                },
                {
                  label: 'Yield Loss',
                  sub: 'Root damage is largely irreversible at this stage',
                  highlight: false,
                  step: '04',
                },
              ].map((item) => (
                <div key={item.label} className="relative flex items-start gap-6 pb-8 last:pb-0">
                  <div
                    className={`relative z-10 flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold ${
                      item.highlight
                        ? 'bg-[#4caf50] text-white ring-4 ring-[#4caf50]/20'
                        : 'bg-white ring-2 ring-gray-300 text-gray-500'
                    }`}
                  >
                    {item.step}
                  </div>
                  <div
                    className={`flex-1 rounded-xl px-5 py-4 ${
                      item.highlight
                        ? 'bg-[#4caf50]/8 ring-1 ring-[#4caf50]/25'
                        : 'bg-transparent'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <p className={`font-semibold ${item.highlight ? 'text-[#4caf50]' : 'text-gray-900'}`}>
                        {item.label}
                      </p>
                      {item.highlight && (
                        <span className="text-xs font-bold uppercase tracking-wider bg-[#4caf50] text-white px-2 py-0.5 rounded-full">
                          EndoBio detects here
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Disease intelligence dashboard mockup */}
      <Section variant="white">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div className="mb-12 lg:mb-0">
              <Eyebrow>Disease Intelligence</Eyebrow>
              <Heading size="md" className="mb-5">
                Know your risk.<br />Before you can see it.
              </Heading>
              <p className="text-gray-600 leading-7 mb-6">
                EndoBio maps your field's biological chemistry against a continuously updated knowledge
                graph of crop disease biology — giving you a live picture of what's developing
                underground.
              </p>
              <ul className="space-y-3">
                {[
                  'Disease risk assessment by pathogen, not just generic alerts',
                  'Molecular signal inventory from the root zone',
                  'Prioritized response recommendations',
                  'Regional context from adjacent field data',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-[#4caf50]/15 ring-1 ring-[#4caf50]/40 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4caf50]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dashboard mockup */}
            <div
              className="rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)' }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/60">
                <div className="h-3 w-3 rounded-full bg-gray-300" />
                <div className="h-3 w-3 rounded-full bg-gray-300" />
                <div className="h-3 w-3 rounded-full bg-gray-300" />
                <span className="text-xs text-gray-400 ml-2 font-mono">endobio · Field Zone A3 · Waterloo, ON</span>
              </div>

              {/* Tab row */}
              <div className="flex border-b border-gray-100">
                {['Discover', 'Detect', 'Respond'].map((tab, i) => (
                  <button
                    key={tab}
                    className={`px-5 py-2.5 text-xs font-semibold transition-colors ${
                      i === 0
                        ? 'text-[#4caf50] border-b-2 border-[#4caf50] -mb-px bg-white'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 divide-x divide-gray-100">
                {/* Disease risk */}
                <div className="p-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                    Disease Risk
                  </p>
                  <div className="space-y-2">
                    {diseases.map((d) => (
                      <div
                        key={d.name}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg ${d.bg}`}
                      >
                        <span
                          className={`text-xs font-bold tracking-widest ${d.color}`}
                        >
                          {d.risk}
                        </span>
                        <span className="text-xs text-gray-700 font-medium text-right leading-tight max-w-[120px]">
                          {d.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Signals */}
                <div className="p-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                    Signals Detected
                  </p>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-3">
                    {signals.map((s) => (
                      <div key={s} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4caf50] flex-shrink-0" />
                        <span className="text-xs text-gray-600">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom status bar */}
              <div className="px-5 py-3 bg-[#4caf50]/5 border-t border-[#4caf50]/15 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#4caf50] animate-pulse" />
                <span className="text-xs text-[#4caf50] font-medium">
                  Monitoring active · Last updated 4 min ago
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section variant="muted">
        <Container>
          <div className="text-center mb-14">
            <Eyebrow>For Growers</Eyebrow>
            <Heading size="md">From soil to alert in four steps</Heading>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <Card key={step.title} hover>
                <div className="flex items-start justify-between mb-5">
                  <IconBox>
                    <step.icon className="h-5 w-5 text-[#4caf50]" />
                  </IconBox>
                  <span className="text-xs font-bold text-gray-300 tracking-widest">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-5">{step.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Target diseases */}
      <Section variant="white">
        <Container narrow>
          <Eyebrow>Ontario Soybean Focus</Eyebrow>
          <Heading size="md" className="mb-4">
            Starting where detection creates the most value
          </Heading>
          <p className="text-gray-600 leading-7 mb-10">
            EndoBio's initial development is focused on the highest-impact soybean root diseases in
            Ontario and the broader North American growing region — diseases where early molecular
            signals are well-characterized and intervention timing matters most.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                name: 'Soybean Cyst Nematode (SCN)',
                body: 'The most economically damaging soybean pathogen in North America. Molecular biomarkers allow pre-symptomatic detection.',
                status: 'active' as const,
              },
              {
                name: 'Sudden Death Syndrome (SDS)',
                body: 'Root infection begins before foliar symptoms. EndoBio targets root-zone fungal metabolites during the critical soil period.',
                status: 'next' as const,
              },
              {
                name: 'Phytophthora Root Rot',
                body: 'Environmental signals and pathogen markers can indicate developing pressure before widespread root damage.',
                status: 'next' as const,
              },
              {
                name: 'White Mold',
                body: 'Sclerotia and environmental conditions interact with plant stress. Early intervention windows are narrow and high-value.',
                status: 'next' as const,
              },
            ].map((d) => (
              <Card key={d.name} hover>
                <div className="flex items-start justify-between mb-3">
                  <div className="h-1 w-8 rounded bg-[#4caf50]" />
                  <ProgressBadge status={d.status} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{d.name}</h3>
                <p className="text-xs text-gray-600 leading-5">{d.body}</p>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-xs text-gray-400 italic">
            Platform designed to expand across crop types and disease systems over time.
          </p>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="green-tint">
        <Container narrow>
          <GradientPanel>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200 mb-3">
                Pilot Program
              </p>
              <h2
                className="text-3xl font-bold text-white mb-4"
                style={{ letterSpacing: '-0.02em' }}
              >
                Seeking field validation partners
              </h2>
              <p className="text-emerald-100 mb-8 max-w-xl mx-auto leading-7">
                We're partnering with Ontario soybean growers and research farms to validate
                root-zone molecular sensing in real growing conditions. If you're interested in
                early access, we'd like to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:keshav@endobio.ai?subject=Interest: Pilot Program (Farmer)"
                  className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#4caf50] hover:bg-emerald-50 transition-colors"
                  onClick={() =>
                    posthog.capture('pilot_cta_clicked', { location: 'farmers_cta' })
                  }
                >
                  Join Pilot Program
                </a>
                <a
                  href="mailto:keshav@endobio.ai?subject=General Inquiry (Farmer)"
                  className="rounded-full bg-white/10 ring-1 ring-white/30 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                  onClick={() =>
                    posthog.capture('farmer_early_access_clicked', { location: 'farmers_cta' })
                  }
                >
                  Talk to EndoBio
                </a>
              </div>
            </div>
          </GradientPanel>
        </Container>
      </Section>
    </div>
  )
}
