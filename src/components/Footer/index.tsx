export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold leading-6">EndoBio</h3>
            <p className="mt-2 text-sm text-gray-400">
              Turn biological signals into actionable intelligence.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6">Company</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="/#/"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#/farmers"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  For Farmers
                </a>
              </li>
              <li>
                <a
                  href="/#/investors"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  For Investors
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6">Legal</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold leading-6">Connect</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="mailto:keshav@endobio.ai?subject=General Inquiry"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} EndoBio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
