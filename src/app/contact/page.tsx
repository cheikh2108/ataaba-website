'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import IconifyIcon from '@/components/IconifyIcon'
import GrainOverlay from '@/components/GrainOverlay'
import ScrollProgress from '@/components/ScrollProgress'
import DecorativeLines from '@/components/DecorativeLines'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Simuler l'envoi (à remplacer par vraie API)
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <GrainOverlay />
      <ScrollProgress />

      <main className="relative z-10 flex w-full min-h-screen">
        <Sidebar />
        <MobileNav />

        <div className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pt-24 md:pt-32 pb-20">
            <div className="max-w-6xl">
              <div className="flex items-center gap-3 mb-10">
                <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
                  CONTACT
                </span>
                <div className="h-[1px] w-12 bg-cyan-400/30"></div>
              </div>

              <h1 className="tracking-tighter text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mb-6 md:mb-8 select-none font-thin">
                <span className="italic font-extralight text-zinc-500">Parlons de</span>
                <br />
                VOTRE PROJET
              </h1>

              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl font-thin">
                Une question? Un projet? Notre équipe est à votre écoute pour transformer vos idées en solutions digitales concrètes.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-20">
            <div className="max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20">
                {/* Formulaire */}
                <div className="order-2 lg:order-1">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nom */}
                    <div className="group">
                      <label htmlFor="name" className="block text-xs tracking-widest text-zinc-500 uppercase mb-3 font-light">
                        Nom complet <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-zinc-950/50 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 font-light"
                        placeholder="Votre nom"
                      />
                    </div>

                    {/* Email & Téléphone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="email" className="block text-xs tracking-widest text-zinc-500 uppercase mb-3 font-light">
                          Email <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-zinc-950/50 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 font-light"
                          placeholder="vous@exemple.com"
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="phone" className="block text-xs tracking-widest text-zinc-500 uppercase mb-3 font-light">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-zinc-950/50 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 font-light"
                          placeholder="+221 XX XXX XX XX"
                        />
                      </div>
                    </div>

                    {/* Entreprise */}
                    <div className="group">
                      <label htmlFor="company" className="block text-xs tracking-widest text-zinc-500 uppercase mb-3 font-light">
                        Entreprise / Organisation
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-zinc-950/50 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 font-light"
                        placeholder="Nom de votre organisation"
                      />
                    </div>

                    {/* Message */}
                    <div className="group">
                      <label htmlFor="message" className="block text-xs tracking-widest text-zinc-500 uppercase mb-3 font-light">
                        Message <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-zinc-950/50 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 resize-none font-light"
                        placeholder="Décrivez-nous votre projet ou votre besoin..."
                      />
                    </div>

                    {/* Bouton Submit */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group w-full inline-flex items-center justify-between px-8 py-4 rounded-lg bg-cyan-400 text-[#09090B] hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        {status === 'sending' && (
                          <IconifyIcon icon="solar:refresh-linear" className="text-xl animate-spin" />
                        )}
                        {status === 'success' && (
                          <IconifyIcon icon="solar:check-circle-bold" className="text-xl" />
                        )}
                        <span className="text-sm tracking-widest font-semibold uppercase">
                          {status === 'sending' && 'Envoi en cours...'}
                          {status === 'success' && 'Message envoyé!'}
                          {status === 'idle' && 'Envoyer le message'}
                          {status === 'error' && 'Réessayer'}
                        </span>
                      </div>
                      <IconifyIcon
                        icon="solar:arrow-right-linear"
                        className="text-2xl group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </button>

                    {status === 'success' && (
                      <div className="p-4 rounded-lg bg-cyan-400/10 border border-cyan-400/30">
                        <p className="text-sm text-cyan-400 font-light">
                          Merci! Nous vous répondrons dans les plus brefs délais.
                        </p>
                      </div>
                    )}
                  </form>
                </div>

                {/* Info Sticky */}
                <div className="order-1 lg:order-2 lg:sticky lg:top-32 h-fit">
                  <div className="space-y-8">
                    {/* Coordonnées */}
                    <div className="p-8 rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-sm">
                      <h3 className="text-xl font-light text-zinc-100 mb-6">
                        Nos coordonnées
                      </h3>

                      <div className="space-y-5">
                        {/* Adresse */}
                        <a
                          href="https://maps.google.com/?q=Almadies+2+Rufisque+Dakar+Senegal"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-4 text-zinc-400 hover:text-cyan-400 transition-colors"
                        >
                          <div className="size-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 transition-colors">
                            <IconifyIcon icon="solar:map-point-linear" className="text-lg" />
                          </div>
                          <div>
                            <div className="text-xs tracking-widest text-zinc-600 uppercase mb-1 font-light">
                              Adresse
                            </div>
                            <div className="text-sm font-light leading-relaxed">
                              Almadies 2, Rufisque<br />
                              Dakar, Sénégal
                            </div>
                          </div>
                        </a>

                        {/* Téléphone */}
                        <div className="space-y-3">
                          <a
                            href="tel:+221787517272"
                            className="group flex items-start gap-4 text-zinc-400 hover:text-cyan-400 transition-colors"
                          >
                            <div className="size-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 transition-colors">
                              <IconifyIcon icon="solar:phone-linear" className="text-lg" />
                            </div>
                            <div>
                              <div className="text-xs tracking-widest text-zinc-600 uppercase mb-1 font-light">
                                Téléphone
                              </div>
                              <div className="text-sm font-light">
                                +221 78 751 72 72
                              </div>
                            </div>
                          </a>

                          <a
                            href="tel:+221768068887"
                            className="group flex items-start gap-4 text-zinc-400 hover:text-cyan-400 transition-colors pl-14"
                          >
                            <div className="text-sm font-light">
                              +221 76 806 88 87
                            </div>
                          </a>
                        </div>

                        {/* Email */}
                        <a
                          href="mailto:contact@ataabaexpertise.com"
                          className="group flex items-start gap-4 text-zinc-400 hover:text-cyan-400 transition-colors"
                        >
                          <div className="size-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 transition-colors">
                            <IconifyIcon icon="solar:letter-linear" className="text-lg" />
                          </div>
                          <div>
                            <div className="text-xs tracking-widest text-zinc-600 uppercase mb-1 font-light">
                              Email
                            </div>
                            <div className="text-sm font-light">
                              contact@ataabaexpertise.com
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Horaires */}
                    <div className="p-8 rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-sm">
                      <h3 className="text-xl font-light text-zinc-100 mb-6">
                        Horaires d'ouverture
                      </h3>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-500 font-light">Lundi - Vendredi</span>
                          <span className="text-zinc-300 font-light">8h00 - 18h00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-500 font-light">Samedi</span>
                          <span className="text-zinc-300 font-light">9h00 - 13h00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-500 font-light">Dimanche</span>
                          <span className="text-zinc-600 font-light">Fermé</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div className="p-8 rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-sm">
                      <h3 className="text-xl font-light text-zinc-100 mb-6">
                        Liens rapides
                      </h3>

                      <div className="space-y-3">
                        <a
                          href="/services"
                          className="group flex items-center justify-between text-zinc-400 hover:text-cyan-400 transition-colors"
                        >
                          <span className="text-sm font-light">Nos services</span>
                          <IconifyIcon
                            icon="solar:arrow-right-linear"
                            className="text-lg group-hover:translate-x-1 transition-transform"
                          />
                        </a>
                        <a
                          href="/about"
                          className="group flex items-center justify-between text-zinc-400 hover:text-cyan-400 transition-colors"
                        >
                          <span className="text-sm font-light">À propos</span>
                          <IconifyIcon
                            icon="solar:arrow-right-linear"
                            className="text-lg group-hover:translate-x-1 transition-transform"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <DecorativeLines />
    </>
  )
}
