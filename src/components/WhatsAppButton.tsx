'use client'

import { useState } from 'react'
import IconifyIcon from './IconifyIcon'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  // Numéro WhatsApp ATAABA (format international sans +)
  const phoneNumber = '221787517272'
  const message = encodeURIComponent('Bonjour ATAABA 👋, je souhaite en savoir plus sur vos services en gestion et suivi-évaluation de projets ainsi que sur vos solutions digitales. Pouvez-vous m\'accompagner selon mes besoins ?')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] transition-all duration-300 active:scale-95 group"
      aria-label="Contacter sur WhatsApp"
    >
      {/* WhatsApp Icon */}
      <IconifyIcon
        icon="logos:whatsapp-icon"
        className="text-2xl transition-transform duration-300 group-hover:scale-110"
      />

      {/* Text - only visible on desktop hover */}
      <span
        className={`hidden md:block text-sm font-semibold tracking-wide uppercase whitespace-nowrap overflow-hidden transition-all duration-300 ${
          isHovered ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        Discutons
      </span>

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </a>
  )
}
