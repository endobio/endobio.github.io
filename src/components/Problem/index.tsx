export default function Problem() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
            The Challenge
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Disease Goes Undetected
              </h3>
              <p className="text-lg text-gray-700">
                Root rot, fungal infections, pathogen proliferation — they're happening in your soil long before you can see them. Weeks of undetected disease means weeks of crop damage.
              </p>
            </div>

            <div className="rounded-lg bg-red-50 p-6 border-l-4 border-red-500">
              <p className="text-gray-900 font-semibold mb-2">
                By the time visible symptoms appear...
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700">• Pathogen activity has been underway for weeks</li>
                <li className="text-gray-700">• Root systems may already be compromised</li>
                <li className="text-gray-700">• Crop yield loss becomes significant</li>
                <li className="text-gray-700">• Treatment options are limited</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Current Monitoring is Too Late
              </h3>
              <p className="text-lg text-gray-700">
                Traditional agriculture monitors what's obvious: soil moisture, temperature, pH, nutrients. These are useful signals, but they're indirect. They don't tell you that disease is already happening.
              </p>
            </div>

            <div className="rounded-lg bg-green-50 p-6 border-l-4 border-[#4caf50]">
              <p className="text-gray-900 font-semibold mb-2">
                There's an earlier signal layer.
              </p>
              <p className="text-gray-700">
                Biology changes first. Microbes shift, plants respond, metabolites appear — all before you see a single leaf symptom. That's the signal EndoBio detects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
