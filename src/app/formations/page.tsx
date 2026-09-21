'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import IconifyIcon from '@/components/IconifyIcon'
import GrainOverlay from '@/components/GrainOverlay'
import ScrollProgress from '@/components/ScrollProgress'
import DecorativeLines from '@/components/DecorativeLines'
import { formations } from '@/data/formations'

export default function FormationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    formation: '',
    level: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.formation) {
      setStatus('error')
      return
    }

    setStatus('sending')

    // Simuler l'envoi (à remplacer par vraie API)
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', formation: '', level: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                  ATAABA ACADEMY
                </span>
                <div className="h-[1px] w-12 bg-cyan-400/30"></div>
              </div>

              <h1 className="tracking-tighter text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mb-6 md:mb-8 select-none font-thin">
                <span className="italic font-extralight text-zinc-500">Formations</span>
                <br />
                PROFESSIONNELLES
              </h1>

              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl font-thin">
                Des formations de haut niveau pour renforcer les capacités techniques et stratégiques de vos équipes.
              </p>
            </div>
          </section>

          {/* Formations Grid */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-20">
            <div className="max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {formations.map((formation, index) => (
                  <div
                    key={formation.id}
                    className="group relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-700"
                  >
                    {/* Gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Content */}
                    <div className="relative z-10 p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="size-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-500">
                          <IconifyIcon
                            icon={formation.icon}
                            className="text-2xl text-zinc-500 group-hover:text-cyan-400 transition-colors duration-500"
                          />
                        </div>
                        {formation.certificate && (
                          <div className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30">
                            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                              Certifié
                            </span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-light text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                        {formation.title}
                      </h3>

                      <p className="text-sm text-zinc-500 leading-relaxed font-thin group-hover:text-zinc-400 transition-colors duration-300 mb-6">
                        {formation.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-xs text-zinc-600">
                          <IconifyIcon icon="solar:calendar-linear" className="text-cyan-400/60" />
                          <span className="font-thin">{formation.frequency}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-600">
                          <IconifyIcon icon="solar:map-point-linear" className="text-cyan-400/60" />
                          <span className="font-thin">{formation.modality}</span>
                        </div>
                      </div>

                      <a
                        href="#inscription"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        S'inscrire
                        <IconifyIcon icon="solar:arrow-right-linear" className="text-sm" />
                      </a>
                    </div>

                    {/* Decorative line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-cyan-500/50 transition-colors duration-700" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Formation sur mesure + Formulaire */}
          <section id="inscription" className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-20 scroll-mt-24">
            <div className="max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Formation sur mesure */}
                <div className="p-10 rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-sm flex flex-col justify-center">
                  <div className="size-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
                    <IconifyIcon icon="solar:lightbulb-bolt-linear" className="text-3xl text-cyan-400" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-light text-zinc-100 mb-4 tracking-tight">
                    Formation sur mesure
                  </h2>

                  <p className="text-base text-zinc-400 leading-relaxed font-thin mb-8">
                    Nous concevons des programmes de formation intra-entreprise adaptés à vos défis spécifiques
                    et à votre secteur d'activité. Nos experts se déplacent pour former vos équipes directement
                    dans vos locaux.
                  </p>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 hover:bg-zinc-800 hover:border-cyan-400/30 transition-all duration-300 w-fit"
                  >
                    <span className="text-sm tracking-widest font-light uppercase">
                      Demander un devis
                    </span>
                    <IconifyIcon icon="solar:arrow-right-linear" className="text-lg text-cyan-400" />
                  </a>
                </div>

                {/* Formulaire d'inscription */}
                <div className="p-10 rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-sm">
                  <h2 className="text-3xl md:text-4xl font-light text-zinc-100 mb-4 tracking-tight">
                    Inscription
                  </h2>

                  <p className="text-sm text-zinc-500 font-thin mb-8">
                    Remplissez le formulaire ci-dessous. Notre équipe vous recontactera rapidement.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nom */}
                    <div>
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
                      <div>
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

                      <div>
                        <label htmlFor="phone" className="block text-xs tracking-widest text-zinc-500 uppercase mb-3 font-light">
                          Téléphone <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-zinc-950/50 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 font-light"
                          placeholder="+221 XX XXX XX XX"
                        />
                      </div>
                    </div>

                    {/* Formation */}
                    <div>
                      <label htmlFor="formation" className="block text-xs tracking-widest text-zinc-500 uppercase mb-3 font-light">
                        Formation choisie <span className="text-cyan-400">*</span>
                      </label>
                      <select
                        id="formation"
                        name="formation"
                        required
                        value={formData.formation}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-zinc-950/50 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 font-light"
                      >
                        <option value="">Sélectionnez une formation</option>
                        {formations.map((f) => (
                          <option key={f.id} value={f.id} className="bg-zinc-950">
                            {f.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Niveau */}
                    <div>
                      <label htmlFor="level" className="block text-xs tracking-widest text-zinc-500 uppercase mb-3 font-light">
                        Niveau actuel <span className="text-cyan-400">*</span>
                      </label>
                      <select
                        id="level"
                        name="level"
                        required
                        value={formData.level}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-zinc-950/50 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 font-light"
                      >
                        <option value="">Sélectionnez votre niveau</option>
                        <option value="debutant" className="bg-zinc-950">Débutant</option>
                        <option value="intermediaire" className="bg-zinc-950">Intermédiaire</option>
                        <option value="avance" className="bg-zinc-950">Avancé</option>
                      </select>
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
                          {status === 'success' && 'Inscription enregistrée!'}
                          {status === 'idle' && 'Confirmer l\'inscription'}
                          {status === 'error' && 'Veuillez sélectionner une formation'}
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
                          Merci! Nous vous recontacterons rapidement.
                        </p>
                      </div>
                    )}
                  </form>
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
