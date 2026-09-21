import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import BackgroundImage from '@/components/BackgroundImage'
import GrainOverlay from '@/components/GrainOverlay'

export const metadata = {
  title: 'Conditions Générales',
  description: 'Conditions générales d\'utilisation et de vente d\'ATAABA EXPERTISE',
}

export default function ConditionsGeneralesPage() {
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
                  CONDITIONS D'UTILISATION
                </span>
                <div className="h-[1px] w-12 bg-cyan-400/30"></div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-tighter text-zinc-100 leading-tight mb-6">
                Conditions<br />Générales
              </h1>
              <p className="text-sm text-zinc-500 font-light">
                Dernière mise à jour : Septembre 2026
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8 text-zinc-300">
              {/* Préambule */}
              <section>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Les présentes conditions générales (ci-après les "CGU" ou "CGV" selon le contexte) régissent l'utilisation du site web <strong className="text-cyan-400">ataabaexpertise.com</strong> et l'achat de services proposés par <strong className="text-cyan-400">ATAABA EXPERTISE</strong>.
                  </p>
                  <p>
                    En accédant à notre site ou en utilisant nos services, vous acceptez d'être lié par ces conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
                  </p>
                </div>
              </section>

              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  1. Objet
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Les présentes conditions générales ont pour objet de définir les modalités et conditions d'utilisation du site web ainsi que les droits et obligations des parties dans le cadre de :
                  </p>
                  <ul className="space-y-2 ml-4 list-disc list-inside">
                    <li>La fourniture de services de gestion de projets et suivi-évaluation</li>
                    <li>Le développement et la mise en œuvre de solutions digitales</li>
                    <li>La fourniture de formations professionnelles (ATAABA Academy)</li>
                    <li>Les prestations de conseil et d'accompagnement</li>
                    <li>L'utilisation de nos solutions SaaS (Planora360, GoodRH, SALIHA HEALTH, etc.)</li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  2. Définitions
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <ul className="space-y-2 ml-4">
                    <li><strong className="text-zinc-100">"Client"</strong> : toute personne physique ou morale qui utilise les services d'ATAABA EXPERTISE</li>
                    <li><strong className="text-zinc-100">"Services"</strong> : l'ensemble des prestations proposées par ATAABA EXPERTISE</li>
                    <li><strong className="text-zinc-100">"Site"</strong> : le site web accessible à l'adresse ataabaexpertise.com</li>
                    <li><strong className="text-zinc-100">"Solutions"</strong> : les logiciels et applications développés par ATAABA EXPERTISE</li>
                    <li><strong className="text-zinc-100">"Contrat"</strong> : l'accord contractuel entre ATAABA EXPERTISE et le Client</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  3. Accès aux services
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    L'accès à nos services est réservé aux :
                  </p>
                  <ul className="space-y-2 ml-4 list-disc list-inside">
                    <li>Personnes physiques majeures et juridiquement capables</li>
                    <li>Personnes morales agissant par l'intermédiaire d'un représentant légal</li>
                    <li>Organisations (ONG, associations, institutions) dûment enregistrées</li>
                  </ul>
                  <p className="pt-2">
                    L'accès à certains services peut nécessiter la création d'un compte utilisateur. Vous êtes responsable de la confidentialité de vos identifiants de connexion.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  4. Commande et devis
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="ml-4 space-y-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">4.1 Demande de devis</h3>
                      <p>
                        Toute demande de service fait l'objet d'un devis détaillé précisant la nature des prestations, les délais et les tarifs. Le devis est valable 30 jours sauf mention contraire.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">4.2 Acceptation</h3>
                      <p>
                        L'acceptation du devis se fait par signature (physique ou électronique) et vaut commande ferme. Une avance peut être demandée selon les modalités définies dans le devis.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">4.3 Modification</h3>
                      <p>
                        Toute modification substantielle demandée par le Client après acceptation du devis fera l'objet d'un avenant tarifé.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  5. Tarifs et modalités de paiement
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="ml-4 space-y-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">5.1 Tarifs</h3>
                      <p>
                        Les tarifs sont indiqués en Francs CFA (FCFA) ou en Euros selon le contrat. Ils sont fermes et non révisables sauf clause contraire.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">5.2 Modalités de paiement</h3>
                      <p>
                        Le paiement s'effectue selon les modalités suivantes :
                      </p>
                      <ul className="space-y-1 list-disc list-inside ml-4">
                        <li>Virement bancaire</li>
                        <li>Mobile Money (Orange Money, Wave, Free Money)</li>
                        <li>Espèces (sur accord préalable)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">5.3 Échéancier</h3>
                      <p>
                        Sauf mention contraire, le paiement se fait :
                      </p>
                      <ul className="space-y-1 list-disc list-inside ml-4">
                        <li>50% à la commande (acompte)</li>
                        <li>50% à la livraison ou fin de prestation</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">5.4 Retard de paiement</h3>
                      <p>
                        En cas de retard de paiement, des pénalités de 2% par mois de retard seront appliquées. ATAABA EXPERTISE se réserve le droit de suspendre l'accès aux services jusqu'au règlement complet.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  6. Délais de livraison et d'exécution
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Les délais de livraison et d'exécution sont indiqués à titre indicatif. ATAABA EXPERTISE s'efforce de respecter les délais convenus mais ne peut être tenue responsable des retards dus à :
                  </p>
                  <ul className="space-y-2 ml-4 list-disc list-inside">
                    <li>Des cas de force majeure</li>
                    <li>Des retards dans la fourniture d'informations par le Client</li>
                    <li>Des modifications demandées par le Client en cours d'exécution</li>
                    <li>Des problèmes techniques indépendants de notre volonté</li>
                  </ul>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  7. Obligations du Client
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Le Client s'engage à :
                  </p>
                  <ul className="space-y-2 ml-4 list-disc list-inside">
                    <li>Fournir toutes les informations nécessaires à la bonne exécution des services</li>
                    <li>Collaborer activement avec ATAABA EXPERTISE</li>
                    <li>Respecter les délais de validation et de retours</li>
                    <li>Payer les sommes dues dans les délais convenus</li>
                    <li>Ne pas utiliser les services à des fins illégales ou non autorisées</li>
                    <li>Ne pas diffuser de contenu illicite, offensant ou préjudiciable</li>
                  </ul>
                </div>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  8. Propriété intellectuelle
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="ml-4 space-y-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">8.1 Solutions standards</h3>
                      <p>
                        Les solutions SaaS (Planora360, GoodRH, SALIHA HEALTH, etc.) restent la propriété exclusive d'ATAABA EXPERTISE. Le Client bénéficie d'un droit d'utilisation non exclusif.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">8.2 Développements spécifiques</h3>
                      <p>
                        Pour les développements sur mesure, la propriété intellectuelle est définie dans le contrat. En l'absence de clause contraire, ATAABA EXPERTISE conserve les droits sur les éléments génériques.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">8.3 Documents de formation</h3>
                      <p>
                        Les supports de formation restent la propriété d'ATAABA EXPERTISE. Leur reproduction ou diffusion sans autorisation est interdite.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  9. Garanties et responsabilité
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="ml-4 space-y-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">9.1 Garanties</h3>
                      <p>
                        ATAABA EXPERTISE garantit que ses services sont conformes aux standards professionnels. Une période de garantie est définie contractuellement pour chaque prestation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2">9.2 Limitations de responsabilité</h3>
                      <p>
                        La responsabilité d'ATAABA EXPERTISE est limitée aux dommages directs et prévisibles. Elle ne saurait être engagée pour :
                      </p>
                      <ul className="space-y-1 list-disc list-inside ml-4">
                        <li>Les pertes de données imputables au Client</li>
                        <li>Les interruptions de service dues à des tiers (hébergeur, opérateur, etc.)</li>
                        <li>L'utilisation inappropriée des solutions par le Client</li>
                        <li>Les dommages indirects (perte d'exploitation, manque à gagner, etc.)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  10. Confidentialité
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Les deux parties s'engagent à respecter la confidentialité des informations échangées dans le cadre de leur collaboration. Cette obligation subsiste pendant la durée du contrat et pendant 3 ans après sa fin.
                  </p>
                  <p>
                    Pour plus d'informations sur le traitement de vos données personnelles, consultez notre <a href="/politique-confidentialite" className="text-cyan-400 hover:underline">Politique de confidentialité</a>.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  11. Résiliation
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    En cas de manquement grave de l'une des parties à ses obligations, l'autre partie peut résilier le contrat après mise en demeure restée infructueuse pendant 15 jours.
                  </p>
                  <p>
                    Les abonnements aux solutions SaaS peuvent être résiliés moyennant un préavis de 30 jours sauf clause contraire.
                  </p>
                </div>
              </section>

              {/* Section 12 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  12. Droit applicable et juridiction
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    Les présentes conditions générales sont régies par le droit sénégalais.
                  </p>
                  <p>
                    En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, les tribunaux de Dakar, Sénégal, seront seuls compétents.
                  </p>
                </div>
              </section>

              {/* Section 13 */}
              <section>
                <h2 className="text-2xl font-light text-zinc-100 mb-4 tracking-tight">
                  13. Modifications
                </h2>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    ATAABA EXPERTISE se réserve le droit de modifier les présentes conditions générales à tout moment. Les nouvelles conditions seront applicables dès leur mise en ligne.
                  </p>
                  <p>
                    Il est recommandé de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
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
                    Pour toute question concernant ces conditions générales :
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>Email : <a href="mailto:contact@ataabaexpertise.com" className="text-cyan-400 hover:underline">contact@ataabaexpertise.com</a></li>
                    <li>Téléphone : +221 78 751 72 72 / +221 76 806 88 87</li>
                    <li>Adresse : Almadies 2, Rufisque, Dakar, Sénégal</li>
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
