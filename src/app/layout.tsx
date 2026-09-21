import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['200', '300'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'ATAABA EXPERTISE | Gestion de Projets & Solutions Digitales',
  description: 'ATAABA EXPERTISE accompagne les organisations dans leur transformation digitale avec des solutions innovantes en suivi-évaluation, systèmes d\'information et gestion de projets.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#09090B] text-zinc-400 selection:bg-cyan-400/30 selection:text-white min-h-[150vh] w-full overflow-x-hidden relative antialiased font-thin">
        {children}
      </body>
    </html>
  )
}
