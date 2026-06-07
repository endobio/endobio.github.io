export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="text-white"
      style={{ background: 'linear-gradient(180deg, #0f1f12 0%, #071108 100%)' }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section */}
        <div className="py-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/endobio-logo.svg" alt="EndoBio" className="h-7 w-auto" />
              <span className="font-bold text-white text-base">EndoBio</span>
            </div>
            <p className="text-sm text-gray-400 leading-6 max-w-xs">
              Biological intelligence platform for field-scale crop disease detection.
            </p>
            <p className="text-xs text-gray-600 mt-3">
              Pre-Seed · Waterloo, Ontario
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
              Platform
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/#/' },
                { label: 'For Farmers', href: '/#/farmers' },
                { label: 'For Investors', href: '/#/investors' },
                { label: 'About the Founder', href: '/#/founder' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:keshav@endobio.ai?subject=General Inquiry"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  keshav@endobio.ai
                </a>
              </li>
              <li>
                <a
                  href="mailto:keshav@endobio.ai?subject=Interest: Pilot Program"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Join Pilot Program
                </a>
              </li>
              <li>
                <a
                  href="mailto:keshav@endobio.ai?subject=Investor Inquiry"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Investor Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-gray-600">Pre-Seed Stage</span>
              </li>
              <li>
                <span className="text-sm text-gray-600">Waterloo, Ontario</span>
              </li>
              <li>
                <a
                  href="mailto:keshav@endobio.ai?subject=Media Inquiry"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Press & Media
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} EndoBio. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Field-scale biological intelligence for modern agriculture.
          </p>
        </div>
      </div>
    </footer>
  )
}
