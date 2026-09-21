'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import IconifyIcon from './IconifyIcon'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navItems = [
    { href: '/', label: 'Accueil', icon: 'solar:home-2-linear' },
    { href: '/services', label: 'Services', icon: 'solar:widget-5-linear' },
    { href: '/formations', label: 'Formations', icon: 'solar:book-2-linear' },
    { href: '/about', label: 'À Propos', icon: 'solar:info-circle-linear' },
    { href: '/contact', label: 'Contact', icon: 'solar:letter-linear' }
  ]

  return (
    <>
      {/* Mobile Header - visible only on mobile */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#09090B]/90 backdrop-blur-md border-b border-zinc-900">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="/" className="relative w-32 h-10">
            <Image
              src="/logo-full.png"
              alt="ATAABA"
              fill
              className="object-contain object-left"
              sizes="128px"
            />
          </a>

          {/* Burger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-400/50 transition-colors active:scale-95"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <IconifyIcon
              icon={isOpen ? 'solar:close-square-linear' : 'solar:hamburger-menu-linear'}
              className="text-2xl text-zinc-100"
            />
          </button>
        </div>
      </header>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer menu */}
      <nav
        className={`md:hidden fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#09090B] border-l border-zinc-900 transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Navigation mobile"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-900">
            <span className="text-sm tracking-widest text-zinc-400 uppercase font-light">
              Menu
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-zinc-900 transition-colors"
              aria-label="Fermer le menu"
            >
              <IconifyIcon icon="solar:close-linear" className="text-xl text-zinc-400" />
            </button>
          </div>

          {/* Navigation items */}
          <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-4 py-3.5 rounded-lg hover:bg-zinc-900 active:bg-zinc-800 transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-cyan-400/50 transition-colors">
                  <IconifyIcon icon={item.icon} className="text-lg text-cyan-400" />
                </div>
                <span className="text-sm font-light text-zinc-100 group-hover:text-cyan-400 transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-6 border-t border-zinc-900">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
              <span className="text-xs text-zinc-500 font-light">En ligne</span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              ATAABA EXPERTISE
              <br />
              Dakar, Sénégal
            </p>
          </div>
        </div>
      </nav>
    </>
  )
}
