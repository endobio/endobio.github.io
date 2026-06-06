export default function TrustBar() {
  return (
    <div className="py-14 bg-white border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Prior agricultural discovery work supporting
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
            {['Indigo Ag', 'Corteva Agriscience', 'Bayer Crop Science'].map((org) => (
              <span key={org} className="text-base font-semibold text-gray-700">{org}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
