import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import IconifyIcon from '@/components/IconifyIcon'
import GrainOverlay from '@/components/GrainOverlay'
import ScrollProgress from '@/components/ScrollProgress'
import DecorativeLines from '@/components/DecorativeLines'
import Image from 'next/image'

export default function AboutPage() {
  const values = [
    {
      icon: 'solar:shield-check-bold',
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, chaque solution, chaque interaction avec nos clients.'
    },
    {
      icon: 'solar:users-group-rounded-bold',
      title: 'Collaboration',
      description: 'Nous croyons en la force du travail d\'équipe et en l\'intelligence collective pour relever les défis.'
    },
    {
      icon: 'solar:lightbulb-bold',
      title: 'Innovation',
      description: 'Nous restons à l\'avant-garde des technologies pour proposer des solutions toujours plus performantes.'
    },
    {
      icon: 'solar:hand-heart-bold',
      title: 'Engagement',
      description: 'Nous nous engageons pleinement auprès de nos clients pour garantir leur succès et leur satisfaction.'
    }
  ]


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
                  À PROPOS
                </span>
                <div className="h-[1px] w-12 bg-cyan-400/30"></div>
              </div>

              <h1 className="tracking-tighter text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mb-6 md:mb-8 select-none font-thin">
                <span className="italic font-extralight text-zinc-500">Nous sommes</span>
                <br />
                ATAABA EXPERTISE
              </h1>

              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl font-thin mb-12">
                Plus de 14 ans d'expérience de notre fondateur au service de la transformation digitale des organisations en Afrique.
                Nous concevons des solutions innovantes qui répondent aux défis réels du terrain.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <IconifyIcon icon="solar:calendar-linear" className="text-cyan-400 text-sm" />
                  <span className="text-xs text-zinc-400 font-light">14+ ans (fondateur)</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <IconifyIcon icon="solar:briefcase-linear" className="text-cyan-400 text-sm" />
                  <span className="text-xs text-zinc-400 font-light">50+ projets</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <IconifyIcon icon="solar:users-group-rounded-linear" className="text-cyan-400 text-sm" />
                  <span className="text-xs text-zinc-400 font-light">100+ formés</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <IconifyIcon icon="solar:cup-star-linear" className="text-cyan-400 text-sm" />
                  <span className="text-xs text-zinc-400 font-light">95% satisfaction</span>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-20">
            <div className="max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Mission */}
                <div className="p-10 rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <div className="size-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-500">
                      <IconifyIcon icon="solar:target-bold" className="text-3xl text-cyan-400" />
                    </div>

                    <h2 className="text-3xl font-light text-zinc-100 mb-4 tracking-tight">
                      Notre Mission
                    </h2>

                    <p className="text-sm text-zinc-500 leading-relaxed font-thin">
                      Accompagner les organisations africaines dans leur transformation digitale en proposant
                      des solutions technologiques adaptées aux réalités locales, performantes et accessibles.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className="p-10 rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <div className="size-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-500">
                      <IconifyIcon icon="solar:eye-bold" className="text-3xl text-cyan-400" />
                    </div>

                    <h2 className="text-3xl font-light text-zinc-100 mb-4 tracking-tight">
                      Notre Vision
                    </h2>

                    <p className="text-sm text-zinc-500 leading-relaxed font-thin">
                      Devenir le partenaire de référence pour la digitalisation des organisations en Afrique,
                      reconnu pour notre expertise, notre innovation et notre impact positif.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fondateur */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-20">
            <div className="max-w-6xl">
              <div className="border-t border-zinc-900 pt-16 mb-16">
                <h2 className="tracking-tighter text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[0.9] text-zinc-100 mb-6 select-none font-thin">
                  <span className="italic font-extralight text-zinc-500">Le</span>
                  <br />
                  FONDATEUR
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900">
                  <Image
                    src="/founder.png"
                    alt="Amadou Bamba CISS"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent" />
                </div>

                {/* Bio */}
                <div className="flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-4xl md:text-5xl font-light text-zinc-100 mb-3 tracking-tight">
                      Amadou Bamba CISS
                    </h3>
                    <p className="text-base text-cyan-400 font-light tracking-wide">
                      Fondateur & Expert Senior en Suivi-Évaluation et Systèmes d'Information
                    </p>
                  </div>

                  <div className="space-y-4 text-sm text-zinc-400 leading-relaxed font-thin">
                    <p>
                      Avec plus de 14 années d'expérience approfondie, Amadou Bamba CISS dirige ATAABA Expertise
                      avec une vision claire : transformer les données en décisions stratégiques pour les organisations.
                    </p>

                    <p>
                      Son expertise couvre la conception et le déploiement de systèmes d'information complexes,
                      le suivi-évaluation de programmes d'envergure, et le pilotage stratégique. Il a accompagné
                      de nombreuses institutions dans l'optimisation de leur gestion de projets et la digitalisation
                      de leurs processus opérationnels.
                    </p>

                    <p>
                      Passionné par l'innovation technologique appliquée au développement, il met un point d'honneur
                      à proposer des solutions sur mesure, alliant rigueur méthodologique et outils digitaux de pointe
                      pour garantir un impact durable et mesurable.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-zinc-800">
                    <div>
                      <div className="text-3xl font-thin text-cyan-400 mb-2">14+</div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider">Années d'expérience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-thin text-cyan-400 mb-2">50+</div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider">Projets accompagnés</div>
                    </div>
                    <div>
                      <div className="text-3xl font-thin text-cyan-400 mb-2">95%</div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Valeurs */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-20">
            <div className="max-w-6xl">
              <div className="border-t border-zinc-900 pt-16 mb-16">
                <h2 className="tracking-tighter text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[0.9] text-zinc-100 mb-6 select-none font-thin">
                  <span className="italic font-extralight text-zinc-500">Nos</span>
                  <br />
                  VALEURS
                </h2>
                <p className="text-base text-zinc-400 leading-relaxed max-w-2xl font-thin">
                  Les principes qui guident notre travail quotidien et nos relations avec nos clients.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="group p-8 rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-700 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10">
                      <div className="size-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 group-hover:border-cyan-500/50 transition-all duration-500">
                        <IconifyIcon icon={value.icon} className="text-2xl text-cyan-400" />
                      </div>

                      <h3 className="text-xl font-light text-zinc-100 mb-3">
                        {value.title}
                      </h3>

                      <p className="text-sm text-zinc-500 leading-relaxed font-thin">
                        {value.description}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-cyan-500/50 transition-colors duration-700" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-32">
            <div className="max-w-4xl mx-auto text-center border border-zinc-800 rounded-2xl p-12 md:p-16 bg-zinc-950/40 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-light text-zinc-100 mb-6 tracking-tight">
                Prêt à transformer votre organisation?
              </h2>
              <p className="text-zinc-400 font-thin mb-8 max-w-2xl mx-auto">
                Discutons de vos besoins et découvrez comment nos solutions peuvent accélérer votre transformation digitale.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-cyan-400 text-[#09090B] hover:bg-cyan-500 transition-colors duration-300"
                >
                  <span className="text-sm tracking-widest font-semibold uppercase">
                    Contactez-nous
                  </span>
                  <IconifyIcon icon="solar:arrow-right-linear" className="text-lg" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-zinc-800 bg-zinc-950/50 text-zinc-100 hover:bg-zinc-900 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <span className="text-sm tracking-widest font-light uppercase">
                    Nos services
                  </span>
                  <IconifyIcon icon="solar:arrow-right-linear" className="text-lg text-cyan-400" />
                </a>
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
