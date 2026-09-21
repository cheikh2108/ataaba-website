export interface Formation {
  id: string
  title: string
  description: string
  schedule: string
  frequency: string
  modality: string
  certificate: boolean
  icon: string
}

export const formations: Formation[] = [
  {
    id: "planification-strategique",
    title: "Planification stratégique et gestion de projets",
    description: "Formation complète sur la planification stratégique, la gestion de projets et la mise en œuvre efficace.",
    schedule: "À discuter",
    frequency: "Hebdomadaire",
    modality: "Hybride (en ligne + présentiel)",
    certificate: true,
    icon: "solar:chart-2-linear"
  },
  {
    id: "suivi-evaluation",
    title: "Suivi-évaluation des projets",
    description: "Maîtrise des outils et méthodes de suivi-évaluation pour mesurer l'impact des projets de développement.",
    schedule: "À discuter",
    frequency: "Bi-hebdomadaire",
    modality: "En ligne",
    certificate: true,
    icon: "solar:graph-up-linear"
  },
  {
    id: "gestion-resultats",
    title: "Gestion axée sur les résultats (GAR)",
    description: "Approche de gestion centrée sur les résultats, les indicateurs de performance et l'atteinte concrète des objectifs.",
    schedule: "À discuter",
    frequency: "Hebdomadaire",
    modality: "Présentiel",
    certificate: true,
    icon: "solar:target-linear"
  },
  {
    id: "diagnostic-organisationnel",
    title: "Diagnostic organisationnel et renforcement des capacités",
    description: "Diagnostic précis des forces et faiblesses organisationnelles pour concevoir des plans de renforcement adaptés.",
    schedule: "À discuter",
    frequency: "À discuter",
    modality: "Hybride",
    certificate: true,
    icon: "solar:clipboard-check-linear"
  },
  {
    id: "reporting-communication",
    title: "Reporting et communication de résultats",
    description: "Techniques de reporting efficace et communication claire des résultats aux différentes parties prenantes.",
    schedule: "À discuter",
    frequency: "Bi-hebdomadaire",
    modality: "En ligne",
    certificate: true,
    icon: "solar:document-text-linear"
  },
  {
    id: "analyse-donnees",
    title: "Analyse et utilisation des données pour la décision",
    description: "Collecte, analyse et utilisation des données pour une prise de décision éclairée et basée sur les preuves.",
    schedule: "À discuter",
    frequency: "Hebdomadaire",
    modality: "Hybride",
    certificate: true,
    icon: "solar:pie-chart-2-linear"
  }
]
