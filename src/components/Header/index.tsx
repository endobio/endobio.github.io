'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import posthog from '../../lib/posthog'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { authActions, logo, mainNavItems, primaryActions } from './config'

const pendingSectionKey = 'endobio-pending-section'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = mainNavItems.filter((item) => item.type === 'link' && item.href)

  const scrollToSection = (href?: string) => {
    if (!href) return

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (href.startsWith('#/') || href.startsWith('/#/')) {
      window.location.href = href
      return
    }

    const id = href.replace('#', '')
    const el = document.getElementById(id)

    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top, behavior: 'smooth' })
      return
    }

    sessionStorage.setItem(pendingSectionKey, id)
    window.location.href = '/#/'
  }

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, href?: string) => {
    if (!href?.startsWith('#') || href.startsWith('#/')) return

    event.preventDefault()
    scrollToSection(href)
  }

  useEffect(() => {
    const pendingSection = sessionStorage.getItem(pendingSectionKey)
    if (!pendingSection) return

    sessionStorage.removeItem(pendingSectionKey)
    window.setTimeout(() => {
      scrollToSection(`#${pendingSection}`)
    }, 0)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-xl">
      <nav aria-label="Global" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 lg:px-6">
        <a href={logo.href} className="flex items-center" onClick={(event) => handleSectionClick(event, logo.href)}>
          <span className="sr-only">{logo.alt}</span>
          <img alt="" src={logo.src} className="h-7 w-auto" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(event) => handleSectionClick(event, item.href)}
              className="text-[13px] font-medium text-[#1d1d1f]/70 transition-colors hover:text-[#1d1d1f]"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {authActions.map((action) => (
            <a
              key={action.name}
              href={action.href}
              className="text-[13px] font-medium text-[#1d1d1f]/70 transition-colors hover:text-[#1d1d1f]"
              onClick={() => posthog.capture('header_contact_clicked', { location: 'header', label: action.name })}
            >
              {action.name}
            </a>
          ))}
          {primaryActions.map((action) => (
            <a
              key={action.name}
              href={action.href}
              className="rounded-full bg-[#4caf50] px-4 py-1.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-85"
              onClick={() => posthog.capture('header_get_started_clicked', { location: 'header', label: action.name })}
            >
              {action.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#1d1d1f] transition-colors hover:bg-black/5 md:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-5 w-5" />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex h-14 items-center justify-between border-b border-black/5 px-5">
            <img alt="" src={logo.src} className="h-7 w-auto" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#1d1d1f] hover:bg-black/5"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
          <div className="px-5 py-6">
            <div className="space-y-1">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(event) => {
                    handleSectionClick(event, item.href)
                    setMobileMenuOpen(false)
                  }}
                  className="block rounded-xl px-3 py-3 text-lg font-semibold text-[#1d1d1f] hover:bg-[#f5f5f7]"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/#/farmers"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-5 block rounded-full bg-[#4caf50] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Join Pilot
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
