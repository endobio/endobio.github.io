import { useEffect } from 'react'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import posthog from '../lib/posthog'
import { Section, Container, Eyebrow, Heading, GradientPanel } from '../components/ui'

const credentials = [
  'PhD · Biochemistry',
  'AI-driven Discovery',
  'Metabolomics',
  'Genomic Mining',
  'Agricultural R&D',
]

const background = [
  {
    period: 'PhD Research',
    title: 'AI-driven natural product discovery',
    body: 'Research at the intersection of biochemistry, machine learning, and metabolomics — building computational systems to identify novel biological molecules from complex datasets.',
    tags: ['Metabolomics', 'Computational Biology', 'Natural Product Discovery'],
  },
  {
    period: 'Industry',
    title: 'Agricultural discovery platforms',
    body: 'Built genomic mining, metabolomic analysis, and biological discovery platforms supporting agricultural R&D programs. Responsible for algorithms, workflows, and software systems used to identify biological targets from large-scale datasets.',
    tags: ['Indigo Ag', 'Corteva Agriscience', 'Bayer Crop Science'],
  },
  {
    period: 'Founding',
    title: 'EndoBio',
    body: 'After repeatedly encountering the same gap — we can identify valuable biological signals in the laboratory, but we lack practical systems for measuring them continuously in the field — founded EndoBio to close it.',
    tags: ['Biological Intelligence', 'Field-Scale Sensing', 'Decision Support'],
  },
]

export default function Founder() {
  useEffect(() => {
    posthog.capture('founder_page_viewed')
  }, [])

  return (
    <div>
      {/* Editorial hero — asymmetric composition */}
      <div className="relative isolate pt-14 overflow-hidden">
        {/* Soft bg bloom */}
        <div className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4caf50] to-[#a5d6a7] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* LEFT — Photo column (2/5) */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
              <div className="relative">
                {/* Decorative ring */}
                <div
                  className="absolute -inset-3 rounded-3xl opacity-20"
                  style={{ background: 'radial-gradient(ellipse, #4caf50 0%, transparent 70%)' }}
                />
                <img
                  src="/keshav.jpg"
                  alt="Keshav Dial, Founder & CEO of EndoBio"
                  className="relative rounded-2xl object-cover ring-1 ring-gray-200 shadow-xl"
                  style={{ width: 280, height: 340, objectPosition: 'top center' }}
                />
              </div>

              {/* Credentials pills */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="text-xs font-medium px-3 py-1 rounded-full ring-1 ring-[#4caf50]/30 text-[#4caf50]"
                    style={{ background: '#f0faf0' }}
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* Contact */}
              <a
                href="mailto:keshav@endobio.ai"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                onClick={() => posthog.capture('founder_contact_clicked')}
              >
                keshav@endobio.ai <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            {/* RIGHT — Text column (3/5) */}
            <div className="lg:col-span-3">
              <Eyebrow>Founder & CEO</Eyebrow>
              <Heading as="h1" size="xl" className="mb-6">
                Keshav Dial
              </Heading>

              <div className="space-y-5 text-gray-700 leading-8 text-lg">
                <p>
                  Keshav Dial is the Founder and CEO of EndoBio. He holds a PhD in Biochemistry
                  with a focus on AI-driven natural product discovery, and has spent his career
                  building computational systems for biological discovery.
                </p>
                <p>
                  Prior to EndoBio, he built genomic mining, metabolomic analysis, and biological
                  discovery platforms supporting agricultural research initiatives. Prior work
                  supported computational biology and discovery initiatives involving organizations
                  such as Bayer Crop Science, Corteva Agriscience, and Indigo Ag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The insight — full-width pull quote */}
      <div
        className="py-16 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #f8fffe 0%, #f0faf0 100%)' }}
      >
        <Container narrow>
          <div className="flex gap-6 items-start">
            <div className="hidden sm:block flex-shrink-0 mt-1">
              <div className="h-12 w-1 rounded bg-[#4caf50]" />
            </div>
            <div>
              <blockquote
                className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug mb-4"
                style={{ letterSpacing: '-0.02em' }}
              >
                "We can identify valuable biological signals in the laboratory, but we lack
                practical systems for measuring them continuously in the field."
              </blockquote>
              <p className="text-sm text-gray-500">
                The gap that led to founding EndoBio
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Background timeline */}
      <Section variant="white">
        <Container narrow>
          <Eyebrow>Background</Eyebrow>
          <Heading size="md" className="mb-12">From discovery to deployment</Heading>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-4 bottom-4 w-px bg-gray-200 hidden sm:block" />

            <div className="space-y-10">
              {background.map((item, i) => (
                <div key={item.period} className="sm:pl-14 relative">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-0 top-1 h-8 w-8 rounded-full bg-white ring-2 ring-[#4caf50]/40 items-center justify-center">
                    <span className="text-xs font-bold text-[#4caf50]">0{i + 1}</span>
                  </div>

                  <div
                    className="rounded-2xl bg-stone-50 p-7 ring-1 ring-gray-200 hover:ring-[#4caf50]/30 hover:shadow-sm transition-all duration-300"
                  >
                    <p className="text-xs font-semibold text-[#4caf50] uppercase tracking-widest mb-2">
                      {item.period}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-7 mb-4">{item.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-500 px-2.5 py-0.5 rounded-full ring-1 ring-gray-200 bg-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Why EndoBio */}
      <Section variant="muted">
        <Container narrow>
          <GradientPanel>
            <Eyebrow light>The Mission</Eyebrow>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mb-5 mt-2"
              style={{ letterSpacing: '-0.02em' }}
            >
              Why EndoBio
            </h2>
            <p className="text-emerald-100 leading-8 text-base">
              Agriculture loses $1.7 trillion annually to crop disease — most of it preventable
              with earlier detection. The biological signals that indicate developing disease exist
              and are measurable. What has been missing is the infrastructure to measure them
              continuously, at field scale, and transform them into actionable decisions.
            </p>
            <p className="text-emerald-100 leading-8 text-base mt-4">
              That is what EndoBio is building.
            </p>
          </GradientPanel>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="white">
        <Container narrow>
          <div className="text-center">
            <Eyebrow>Get in Touch</Eyebrow>
            <Heading size="md" className="mb-4">Interested in EndoBio?</Heading>
            <p className="text-gray-600 mb-10 max-w-md mx-auto">
              Whether you're a grower, investor, researcher, or agricultural partner, we'd like to
              hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:keshav@endobio.ai"
                className="rounded-full bg-[#4caf50] px-8 py-3 text-sm font-semibold text-white hover:bg-[#45a049] transition-colors inline-flex items-center gap-2 justify-center"
                onClick={() => posthog.capture('founder_contact_clicked')}
              >
                Reach out
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="/#/investors"
                className="rounded-full bg-white ring-1 ring-gray-300 px-8 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => posthog.capture('investor_cta_clicked', { location: 'founder_page' })}
              >
                Investor information
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
