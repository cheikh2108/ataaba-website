import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import BackgroundImage from '@/components/BackgroundImage'
import GrainOverlay from '@/components/GrainOverlay'

export const metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site ATAABA EXPERTISE - Informations juridiques et légales',
}

export default function MentionsLegalesPage() {
  return (
    <>
      <GrainOverlay />
      <BackgroundImage />

      <main className="relative z-10 flex w-full min-h-screen">
        <Sidebar />
        <MobileNav />

        <div className="flex-1 pt-24 md:pt-10 px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-12 lg:pr-24 pb-20">
          <div className="max-w-4xl">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
                  INFORMATIONS LÉGALES
                </span>
                <div className="h-[1px] w-12 bg-cyan-400/30"></div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-tighter text-zinc-100 leading-tight mb-6">
                Mentions<br />Légales
              </h1>
              <p className="text-sm text-zinc-500 font-light">
                Dernière mise à jour : Septembre 2026
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8 text-zinc-300">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  1. Éditeur du site
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Le site <strong className="text-zinc-100">ataabaexpertise.com</strong> est édité par :
                  </p>
                  <p className="font-semibold text-cyan-400">ATAABA EXPERTISE</p>
                  <ul className="space-y-1 ml-4">
                    <li>Forme juridique : [À compléter]</li>
                    <li>Siège social : Fayenne Dangou Nord, Rufisque, Sénégal</li>
                    <li>NINEA : [À compléter]</li>
                    <li>Téléphone : +221 78 751 72 72 / +221 77 451 12 33</li>
                    <li>Email : contact@ataabaexpertise.com</li>
                    <li>Directeur de la publication : Amadou Bamba CISS</li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  2. Hébergement
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Le site est hébergé par :
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>Hostinger International Ltd.</li>
                    <li>61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
                    <li>Site web : <a href="https://www.hostinger.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">www.hostinger.com</a></li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  3. Propriété intellectuelle
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    L'ensemble du contenu présent sur ce site (textes, images, logos, graphismes, vidéos, icônes, sons, logiciels, marques) est la propriété exclusive d'ATAABA EXPERTISE ou de ses partenaires.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable d'ATAABA EXPERTISE.
                  </p>
                  <p>
                    Toute exploitation non autorisée du site ou de l'un de ses éléments sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions du Code de la propriété intellectuelle.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  4. Limitation de responsabilité
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    ATAABA EXPERTISE s'efforce de fournir des informations aussi précises que possible sur ce site. Toutefois, elle ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées.
                  </p>
                  <p>
                    En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive. ATAABA EXPERTISE ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation de ce site.
                  </p>
                  <p>
                    Les liens hypertextes présents sur ce site peuvent renvoyer vers des sites externes. ATAABA EXPERTISE ne saurait être tenue responsable du contenu de ces sites tiers.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  5. Données personnelles
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Les informations recueillies via les formulaires présents sur ce site sont destinées à ATAABA EXPERTISE pour le traitement de vos demandes de contact, d'information ou de démonstration.
                  </p>
                  <p>
                    Conformément à la législation en vigueur au Sénégal et aux réglementations internationales sur la protection des données, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.
                  </p>
                  <p>
                    Pour exercer ces droits, vous pouvez nous contacter à l'adresse : <a href="mailto:contact@ataabaexpertise.com" className="text-cyan-400 hover:underline">contact@ataabaexpertise.com</a>
                  </p>
                  <p>
                    Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-cyan-400 hover:underline">Politique de confidentialité</a>.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  6. Cookies
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies.
                  </p>
                  <p>
                    Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités du site.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  7. Droit applicable
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Les présentes mentions légales sont régies par le droit sénégalais. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Dakar, Sénégal.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="pt-8 border-t border-zinc-800">
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  Contact
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>Par email : <a href="mailto:contact@ataabaexpertise.com" className="text-cyan-400 hover:underline">contact@ataabaexpertise.com</a></li>
                    <li>Par téléphone : +221 78 751 72 72 / +221 77 451 12 33</li>
                    <li>Par courrier : Fayenne Dangou Nord, Rufisque, Sénégal</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
