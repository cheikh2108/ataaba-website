import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ATAABA EXPERTISE | Gestion de Projets & Solutions Digitales',
    template: '%s | ATAABA EXPERTISE'
  },
  description: 'ATAABA EXPERTISE accompagne les organisations dans leur transformation digitale. 14+ ans d\'expérience, 50+ projets, 9 secteurs, 18 solutions innovantes en suivi-évaluation, systèmes d\'information et gestion de projets.',
  keywords: ['ATAABA', 'suivi-évaluation', 'gestion de projets', 'systèmes d\'information', 'DHIS2', 'Power BI', 'transformation digitale', 'conseil', 'formation', 'Sénégal', 'Dakar', 'Afrique'],
  authors: [{ name: 'ATAABA EXPERTISE', url: 'https://ataabaexpertise.com' }],
  creator: 'ATAABA EXPERTISE',
  publisher: 'ATAABA EXPERTISE',
  metadataBase: new URL('https://ataabaexpertise.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ataabaexpertise.com',
    siteName: 'ATAABA EXPERTISE',
    title: 'ATAABA EXPERTISE | Gestion de Projets & Solutions Digitales',
    description: 'ATAABA EXPERTISE accompagne les organisations dans leur transformation digitale. 14+ ans d\'expérience, 50+ projets, 9 secteurs, 18 solutions innovantes.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ATAABA EXPERTISE - Gestion de Projets & Solutions Digitales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATAABA EXPERTISE | Gestion de Projets & Solutions Digitales',
    description: '14+ ans d\'expérience, 50+ projets, 9 secteurs, 18 solutions innovantes en transformation digitale.',
    images: ['/og-image.png'],
    creator: '@AtaabaExpertise',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
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
