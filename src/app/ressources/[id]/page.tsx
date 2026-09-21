import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import IconifyIcon from '@/components/IconifyIcon'
import GrainOverlay from '@/components/GrainOverlay'
import ScrollProgress from '@/components/ScrollProgress'
import DecorativeLines from '@/components/DecorativeLines'
import { articles } from '@/data/articles'

export default async function ArticleDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = articles.find(a => a.id === id)

  if (!article) {
    notFound()
  }

  // Articles similaires (même catégorie)
  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3)

  return (
    <>
      <GrainOverlay />
      <ScrollProgress />

      <main className="relative z-10 flex w-full min-h-screen">
        <Sidebar />
        <MobileNav />

        <div className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pt-24 md:pt-32 pb-12">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-8 text-sm">
                <Link
                  href="/ressources"
                  className="text-zinc-500 hover:text-cyan-400 transition-colors font-light"
                >
                  Ressources
                </Link>
                <IconifyIcon icon="solar:alt-arrow-right-linear" className="text-zinc-700 text-xs" />
                <span className="text-zinc-400 font-light">{article.category}</span>
              </div>

              {/* Category badge */}
              <div className="inline-flex px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 mb-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="tracking-tighter text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-zinc-100 mb-6 font-thin">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 mb-8">
                <div className="flex items-center gap-2">
                  <IconifyIcon icon="solar:user-linear" className="text-cyan-400/60" />
                  <span className="font-light">{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconifyIcon icon="solar:calendar-linear" className="text-cyan-400/60" />
                  <time dateTime={article.date} className="font-light">
                    {new Date(article.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <IconifyIcon icon="solar:clock-circle-linear" className="text-cyan-400/60" />
                  <span className="font-light">{article.readTime} de lecture</span>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-12">
            <div className="max-w-4xl">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Article Content */}
          <article className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-20">
            <div className="max-w-3xl prose prose-invert prose-zinc prose-lg">
              {/* Introduction */}
              <p className="text-xl text-zinc-400 font-thin leading-relaxed mb-8">
                {article.excerpt}
              </p>

              {/* Article content */}
              <div className="space-y-6 text-zinc-400 font-thin leading-relaxed">
                {article.content.split('\n').map((paragraph, index) => {
                  const trimmed = paragraph.trim()
                  if (!trimmed) return null
                  return (
                    <p key={index} className="leading-relaxed">
                      {trimmed}
                    </p>
                  )
                })}
              </div>

              {/* CTA */}
              <div className="mt-16 p-8 rounded-xl border border-zinc-800 bg-zinc-950/40">
                <h3 className="text-2xl font-light text-zinc-100 mb-4">
                  Besoin d'accompagnement?
                </h3>
                <p className="text-zinc-400 font-thin mb-6">
                  Nos experts peuvent vous aider à mettre en place un système de suivi-évaluation adapté à vos besoins.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 text-[#09090B] hover:bg-cyan-500 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                >
                  Contactez-nous
                  <IconifyIcon icon="solar:arrow-right-linear" className="text-lg" />
                </Link>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-20">
              <div className="max-w-7xl">
                <div className="border-t border-zinc-900 pt-16 mb-12">
                  <h2 className="text-3xl md:text-4xl font-light text-zinc-100 mb-2">
                    Articles similaires
                  </h2>
                  <p className="text-zinc-500 font-thin">
                    Continuez votre lecture sur le même sujet
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      href={`/ressources/${related.id}`}
                      className="group relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-700"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60" />
                      </div>

                      <div className="relative z-10 p-6">
                        <h3 className="text-lg font-light text-zinc-100 mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="text-sm text-zinc-500 font-thin line-clamp-2">
                          {related.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Navigation */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-32">
            <div className="max-w-4xl">
              <Link
                href="/ressources"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors font-light"
              >
                <IconifyIcon icon="solar:alt-arrow-left-linear" className="text-lg" />
                <span className="text-sm uppercase tracking-wider">Retour aux ressources</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <DecorativeLines />
    </>
  )
}
