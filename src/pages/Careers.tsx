import { useEffect } from 'react'
import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import {
  BeakerIcon,
  CpuChipIcon,
  MapPinIcon,
  SignalIcon,
} from '@heroicons/react/24/outline'
import posthog from '../lib/posthog'
import {
  Card,
  Container,
  Eyebrow,
  Heading,
  IconBox,
  Section,
} from '../components/ui'

const workAreas = [
  {
    icon: BeakerIcon,
    title: 'Biological discovery',
    body: 'Turn disease literature, genomics, and metabolomics into testable biomarker hypotheses for crop health.',
  },
  {
    icon: SignalIcon,
    title: 'Molecular sensing',
    body: 'Translate biological targets into practical sensors designed to operate continuously in the root zone.',
  },
  {
    icon: CpuChipIcon,
    title: 'Field intelligence',
    body: 'Build the data and edge AI systems that turn field signals into useful, timely decisions for growers.',
  },
]

const introductionDetails = [
  'The kind of problems you want to work on',
  'A project, publication, portfolio, or profile that shows your work',
  'How your experience could contribute to EndoBio’s current stage',
]

export default function Careers() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Careers at EndoBio | Biological Intelligence for Agriculture'
    posthog.capture('careers_page_viewed')

    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#071108] pt-14 text-white">
        <div
          className="absolute inset-0 opacity-70"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle at 78% 22%, rgba(76,175,80,0.23), transparent 30%), radial-gradient(circle at 14% 85%, rgba(76,175,80,0.12), transparent 28%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        <Container className="relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-emerald-100 backdrop-blur-sm">
              <MapPinIcon className="h-4 w-4 text-[#6abf6e]" />
              Toronto, Ontario · Pre-seed
            </div>
            <Eyebrow light>Careers at EndoBio</Eyebrow>
            <Heading as="h1" size="2xl" light className="max-w-4xl">
              Build the biological intelligence layer for agriculture.
            </Heading>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
              EndoBio is developing molecular sensing and AI systems that detect crop disease before
              visible symptoms appear—when there is still time to act.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#open-roles"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4caf50] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#45a049]"
                onClick={(event) => {
                  event.preventDefault()
                  document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })
                  posthog.capture('careers_open_roles_clicked', { location: 'hero' })
                }}
              >
                View open roles
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:keshav@endobio.ai?subject=Careers at EndoBio — General Introduction"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                onClick={() => posthog.capture('careers_introduction_clicked', { location: 'hero' })}
              >
                Introduce yourself
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section variant="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <div>
              <Eyebrow>The mission</Eyebrow>
              <Heading size="xl" className="mb-6">
                Listen to plants before the damage is visible.
              </Heading>
              <p className="text-lg leading-8 text-gray-600">
                Plants and pathogens produce measurable biological signals as disease develops.
                EndoBio is building the infrastructure to discover those signals, sense them in the
                field, and turn them into earlier decisions for growers.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="sm:col-span-2" padding="lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#4caf50]">
                  The work
                </p>
                <p className="mt-4 text-xl font-semibold leading-8 text-gray-900">
                  Biology, sensing, and software have to work as one system—not as separate research
                  projects.
                </p>
              </Card>
              <Card padding="lg">
                <p className="text-2xl font-bold tracking-tight text-[#4caf50]">Pre-seed</p>
                <h3 className="mt-4 font-semibold text-gray-900">Early company</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  EndoBio is at the pre-seed stage, with core technology development and validation
                  underway.
                </p>
              </Card>
              <Card padding="lg">
                <p className="text-3xl font-bold tracking-tight text-[#4caf50]">3</p>
                <h3 className="mt-4 font-semibold text-gray-900">Connected layers</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  The platform brings together biological discovery, molecular sensing, and field
                  intelligence.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Where you could contribute</Eyebrow>
            <Heading size="xl">One platform, built across disciplines.</Heading>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              These are the technical areas behind EndoBio’s platform. They describe the work—not
              current job openings.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {workAreas.map((area) => (
              <Card key={area.title} hover padding="lg" className="h-full">
                <IconBox className="mb-6">
                  <area.icon className="h-6 w-6 text-[#4caf50]" />
                </IconBox>
                <h3 className="text-lg font-bold text-gray-900">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{area.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="white" id="open-roles">
        <Container narrow>
          <div className="overflow-hidden rounded-3xl ring-1 ring-gray-200">
            <div className="border-b border-gray-200 bg-stone-50 px-7 py-5 sm:px-10">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <Eyebrow>Open roles</Eyebrow>
                  <Heading size="md">Current opportunities</Heading>
                </div>
                <span className="w-fit rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-600">
                  0 open roles
                </span>
              </div>
            </div>

            <div className="px-7 py-10 sm:px-10 sm:py-12">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                We don’t have any open roles right now.
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                We’re still glad to hear from people whose work sits at the intersection of biology,
                sensing, agriculture, and software. Send a concise introduction and we’ll keep the
                conversation grounded in where EndoBio is today.
              </p>

              <div className="mt-8 rounded-2xl bg-[#f0faf0] p-6 ring-1 ring-[#4caf50]/20 sm:p-7">
                <p className="font-semibold text-gray-900">A useful introduction includes:</p>
                <ul className="mt-4 space-y-3">
                  {introductionDetails.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#4caf50]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="mailto:keshav@endobio.ai?subject=Careers at EndoBio — General Introduction"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#4caf50] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#45a049]"
                onClick={() => posthog.capture('careers_introduction_clicked', { location: 'open_roles' })}
              >
                <EnvelopeIcon className="h-4 w-4" />
                Email Keshav
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="green-tint">
        <Container narrow>
          <div className="text-center">
            <Eyebrow>Learn more</Eyebrow>
            <Heading size="md">Start with the work.</Heading>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
              Explore the platform and the founder’s background to understand what EndoBio is
              building and why.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/#/"
                className="rounded-full bg-[#4caf50] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#45a049]"
                onClick={() => {
                  sessionStorage.setItem('endobio-pending-section', 'platform')
                  posthog.capture('careers_platform_clicked')
                }}
              >
                Explore the platform
              </a>
              <a
                href="/#/founder"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 transition-colors hover:bg-gray-50"
                onClick={() => posthog.capture('careers_founder_clicked')}
              >
                Meet the founder
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
