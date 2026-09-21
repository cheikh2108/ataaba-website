import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import BackgroundImage from '@/components/BackgroundImage'
import GrainOverlay from '@/components/GrainOverlay'

export const metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité d\'ATAABA EXPERTISE - Protection de vos données personnelles',
}

export default function PolitiqueConfidentialitePage() {
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
                  VOS DONNÉES
                </span>
                <div className="h-[1px] w-12 bg-cyan-400/30"></div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-tighter text-zinc-100 leading-tight mb-6">
                Politique de<br />Confidentialité
              </h1>
              <p className="text-sm text-zinc-500 font-light">
                Dernière mise à jour : Septembre 2026
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8 text-zinc-300">
              {/* Introduction */}
              <section>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Chez <strong className="text-cyan-400">ATAABA EXPERTISE</strong>, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
                  </p>
                </div>
              </section>

              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  1. Responsable du traitement des données
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Le responsable du traitement de vos données personnelles est :
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li><strong className="text-cyan-400">ATAABA EXPERTISE</strong></li>
                    <li>Adresse : Fayenne Dangou Nord, Rufisque, Sénégal</li>
                    <li>Email : contact@ataabaexpertise.com</li>
                    <li>Téléphone : +221 78 751 72 72 / +221 77 451 12 33</li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  2. Données collectées
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Nous collectons les types de données suivants :
                  </p>

                  <div className="ml-4 space-y-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">2.1 Données fournies directement</h3>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Nom et prénom</li>
                        <li>Adresse email</li>
                        <li>Numéro de téléphone</li>
                        <li>Nom de l'organisation</li>
                        <li>Fonction/Poste</li>
                        <li>Message ou demande (via formulaires de contact)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">2.2 Données collectées automatiquement</h3>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Adresse IP</li>
                        <li>Type de navigateur et version</li>
                        <li>Système d'exploitation</li>
                        <li>Pages visitées et durée de visite</li>
                        <li>Date et heure de connexion</li>
                        <li>Référent (site web d'origine)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  3. Finalités du traitement
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Vos données personnelles sont collectées pour les finalités suivantes :
                  </p>
                  <ul className="space-y-2 ml-4 list-disc list-inside">
                    <li>Répondre à vos demandes de contact et d'information</li>
                    <li>Traiter vos demandes de démonstration de nos solutions</li>
                    <li>Gérer vos inscriptions aux formations ATAABA Academy</li>
                    <li>Vous envoyer notre newsletter (avec votre consentement)</li>
                    <li>Améliorer notre site web et nos services</li>
                    <li>Analyser l'utilisation de notre site (statistiques anonymisées)</li>
                    <li>Respecter nos obligations légales et réglementaires</li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  4. Base légale du traitement
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Le traitement de vos données personnelles repose sur :
                  </p>
                  <ul className="space-y-2 ml-4 list-disc list-inside">
                    <li><strong className="text-zinc-100">Votre consentement</strong> : pour l'envoi de newsletters et communications marketing</li>
                    <li><strong className="text-zinc-100">L'exécution d'un contrat</strong> : pour le traitement de vos commandes et demandes de services</li>
                    <li><strong className="text-zinc-100">Notre intérêt légitime</strong> : pour améliorer nos services et assurer la sécurité de notre site</li>
                    <li><strong className="text-zinc-100">Obligations légales</strong> : pour respecter la législation en vigueur</li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  5. Durée de conservation
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
                  </p>
                  <ul className="space-y-2 ml-4 list-disc list-inside">
                    <li><strong className="text-zinc-100">Demandes de contact</strong> : 3 ans après le dernier contact</li>
                    <li><strong className="text-zinc-100">Clients actifs</strong> : pendant la durée contractuelle + 5 ans</li>
                    <li><strong className="text-zinc-100">Newsletter</strong> : jusqu'à désinscription</li>
                    <li><strong className="text-zinc-100">Données de navigation</strong> : 13 mois maximum</li>
                  </ul>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  6. Partage des données
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Vos données personnelles peuvent être partagées avec :
                  </p>
                  <ul className="space-y-2 ml-4 list-disc list-inside">
                    <li><strong className="text-zinc-100">Nos prestataires de services</strong> : hébergement web, services d'emailing, outils de gestion</li>
                    <li><strong className="text-zinc-100">Partenaires techniques</strong> : uniquement dans le cadre de l'exécution de nos services</li>
                    <li><strong className="text-zinc-100">Autorités compétentes</strong> : si requis par la loi</li>
                  </ul>
                  <p className="pt-2">
                    Nous nous assurons que ces tiers respectent la confidentialité de vos données et ne les utilisent que pour les finalités définies.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  7. Sécurité des données
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre :
                  </p>
                  <ul className="space-y-2 ml-4 list-disc list-inside">
                    <li>La perte accidentelle</li>
                    <li>L'utilisation non autorisée</li>
                    <li>L'accès non autorisé</li>
                    <li>La divulgation</li>
                    <li>La modification</li>
                  </ul>
                  <p className="pt-2">
                    Ces mesures incluent notamment le chiffrement SSL, la sauvegarde régulière, les contrôles d'accès et la sensibilisation de notre équipe.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  8. Vos droits
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Conformément à la législation applicable, vous disposez des droits suivants :
                  </p>
                  <ul className="space-y-2 ml-4 list-disc list-inside">
                    <li><strong className="text-zinc-100">Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
                    <li><strong className="text-zinc-100">Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
                    <li><strong className="text-zinc-100">Droit à l'effacement</strong> : demander la suppression de vos données</li>
                    <li><strong className="text-zinc-100">Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                    <li><strong className="text-zinc-100">Droit à la limitation</strong> : limiter le traitement de vos données</li>
                    <li><strong className="text-zinc-100">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                    <li><strong className="text-zinc-100">Droit de retirer votre consentement</strong> : à tout moment</li>
                  </ul>
                  <p className="pt-4">
                    Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@ataabaexpertise.com" className="text-cyan-400 hover:underline">contact@ataabaexpertise.com</a>
                  </p>
                  <p>
                    Nous nous engageons à répondre à votre demande dans un délai maximum d'un mois.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  9. Cookies
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Notre site utilise des cookies pour améliorer votre expérience de navigation. Un cookie est un petit fichier texte stocké sur votre appareil.
                  </p>

                  <div className="ml-4 space-y-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">Types de cookies utilisés :</h3>
                      <ul className="space-y-1 list-disc list-inside">
                        <li><strong className="text-zinc-100">Cookies essentiels</strong> : nécessaires au fonctionnement du site</li>
                        <li><strong className="text-zinc-100">Cookies de performance</strong> : analyse du trafic et amélioration du site</li>
                        <li><strong className="text-zinc-100">Cookies fonctionnels</strong> : mémorisation de vos préférences</li>
                      </ul>
                    </div>
                  </div>

                  <p className="pt-2">
                    Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur. La désactivation de certains cookies peut affecter les fonctionnalités du site.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  10. Modifications
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur cette page. La date de "dernière mise à jour" sera actualisée en conséquence.
                  </p>
                  <p>
                    Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de protection des données.
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
                    Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>Email : <a href="mailto:contact@ataabaexpertise.com" className="text-cyan-400 hover:underline">contact@ataabaexpertise.com</a></li>
                    <li>Téléphone : +221 78 751 72 72 / +221 77 451 12 33</li>
                    <li>Adresse : Fayenne Dangou Nord, Rufisque, Sénégal</li>
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
