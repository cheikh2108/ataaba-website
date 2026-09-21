'use client'

import Image from 'next/image'

export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 z-0 flex justify-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
        alt="Abstract Architecture"
        className="gsap-bg-img w-[65%] h-full object-cover object-center opacity-30 mix-blend-luminosity"
        style={{ filter: 'grayscale(1) contrast(1.2)' }}
        width={2000}
        height={2000}
        priority
      />
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[30px_0_40px_rgba(0,0,0,1)]"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path className="gsap-curve" d="M0,0 L0,100 L55,100 Q75,50 55,0 Z" fill="#09090B" />
      </svg>
    </div>
  )
}
