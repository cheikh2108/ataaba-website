import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import IconifyIcon from '@/components/IconifyIcon'
import GrainOverlay from '@/components/GrainOverlay'
import ScrollProgress from '@/components/ScrollProgress'
import DecorativeLines from '@/components/DecorativeLines'
import Image from 'next/image'
import { articles } from '@/data/articles'

export default function RessourcesPage() {
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
                  BLOG & INSIGHTS
                </span>
                <div className="h-[1px] w-12 bg-cyan-400/30"></div>
              </div>

              <h1 className="tracking-tighter text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mb-6 md:mb-8 select-none font-thin">
                <span className="italic font-extralight text-zinc-500">Ressources</span>
                <br />
                & INSIGHTS
              </h1>

              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl font-thin">
                Découvrez nos derniers articles, guides et analyses sur le suivi-évaluation, les systèmes d'information et la digitalisation.
              </p>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-20">
            <div className="max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <Link
                    key={article.id}
                    href={`/ressources/${article.id}`}
                    className="group relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-700"
                  >
                    {/* Gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60" />

                      {/* Category badge */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-cyan-400/90 backdrop-blur-sm">
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#09090B]">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-4 text-xs text-zinc-600">
                        <div className="flex items-center gap-1.5">
                          <IconifyIcon icon="solar:calendar-linear" className="text-cyan-400/60" />
                          <time dateTime={article.date}>
                            {new Date(article.date).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </time>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <IconifyIcon icon="solar:clock-circle-linear" className="text-cyan-400/60" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-light text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight line-clamp-2">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-zinc-500 leading-relaxed font-thin mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Read more */}
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span>Lire l'article</span>
                        <IconifyIcon
                          icon="solar:arrow-right-linear"
                          className="text-sm group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Decorative line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-cyan-500/50 transition-colors duration-700" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-32">
            <div className="max-w-4xl mx-auto text-center border border-zinc-800 rounded-2xl p-12 md:p-16 bg-zinc-950/40 backdrop-blur-sm">
              <div className="size-16 mx-auto mb-6 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <IconifyIcon icon="solar:letter-linear" className="text-3xl text-cyan-400" />
              </div>

              <h2 className="text-3xl md:text-4xl font-light text-zinc-100 mb-4 tracking-tight">
                Restez informé
              </h2>
              <p className="text-zinc-400 font-thin mb-8 max-w-2xl mx-auto">
                Recevez nos derniers articles et insights directement dans votre boîte mail.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 font-light"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 text-[#09090B] hover:bg-cyan-500 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                >
                  S'abonner
                  <IconifyIcon icon="solar:arrow-right-linear" className="text-lg" />
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <DecorativeLines />
    </>
  )
}
