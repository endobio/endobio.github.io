export default function WhyItMatters() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-12">
            Why This Matters
          </h2>

          <div className="space-y-8">
            {/* Stat 1 */}
            <div className="rounded-lg bg-gradient-to-r from-[#4caf50] from-0% to-[#a5d6a7] to-100% p-8 text-white">
              <p className="text-5xl font-bold mb-2">
                ~$1.7T
              </p>
              <p className="text-green-50">
                Annual global crop loss from disease and pests
              </p>
            </div>

            {/* Stat 2 */}
            <div className="rounded-lg border-2 border-[#4caf50] p-8">
              <p className="text-4xl font-bold text-[#4caf50] mb-2">
                Weeks
              </p>
              <p className="text-gray-900 text-lg">
                That's how much earlier EndoBio detects disease compared to visible symptoms
              </p>
              <p className="text-gray-600 text-sm mt-3">
                Weeks of early detection = time to respond before crop damage is irreversible
              </p>
            </div>

            {/* Impact */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                For Farmers
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-2xl text-[#4caf50]">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Better yields</p>
                    <p className="text-gray-600">Prevent crop damage instead of managing it</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl text-[#4caf50]">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Lower losses</p>
                    <p className="text-gray-600">Catch disease while you still have treatment options</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl text-[#4caf50]">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Peace of mind</p>
                    <p className="text-gray-600">Know what's happening in your soil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
