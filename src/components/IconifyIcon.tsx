'use client'

import { useEffect } from 'react'

interface IconifyIconProps {
  icon: string
  className?: string
}

export default function IconifyIcon({ icon, className = '' }: IconifyIconProps) {
  useEffect(() => {
    if (!document.querySelector('script[src*="iconify"]')) {
      const script = document.createElement('script')
      script.src = 'https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return <iconify-icon icon={icon} className={className} />
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { icon: string },
        HTMLElement
      >
    }
  }
}
