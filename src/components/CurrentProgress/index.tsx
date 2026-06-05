export default function CurrentProgress() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Current Progress
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Technology development is underway. Here's where we are.
          </p>

          <div className="space-y-3 mb-10">
            {[
              'Agricultural disease intelligence platform operational',
              'Global disease surveillance and literature mining pipeline developed',
              'Knowledge graph for pathogen, crop, and biomarker discovery',
              'AI-guided target identification workflows',
              'Prototype electrochemical sensing platform completed',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-[#4caf50] font-bold text-lg">✓</span>
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8 space-y-3">
            {[
              'Greenhouse validation in development',
              'Pilot partner discussions underway',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-[#4caf50] font-bold text-lg">→</span>
                <p className="text-gray-600 italic">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
