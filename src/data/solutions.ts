// Data centralisée pour tous les secteurs et solutions ATAABA

export interface Solution {
  id: string
  name: string
  description: string
  status: 'ready' | 'development'
  icon: string
  url?: string // Lien vers le site du projet
  features?: string[] // Fonctionnalités principales
  image?: string // Image d'aperçu du projet
  year?: string // Année de lancement
  tagline?: string // Phrase d'accroche courte
}

export interface Sector {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  color: string
  solutions: Solution[]
}

export const sectors: Sector[] = [
  {
    id: '01',
    slug: 'entreprises-projets',
    name: 'Entreprises & Projets',
    description: 'Gestion de projets, RH, finance et satisfaction client pour entreprises, ONG et institutions',
    icon: 'solar:case-round-bold',
    color: 'cyan',
    solutions: [
      {
        id: 'planora360',
        name: 'Planora360',
        description: 'Gestion et suivi des projets, activités, budgets, recommandations, performances et passation de marchés.',
        status: 'ready',
        icon: 'solar:chart-2-linear',
        url: 'https://planora360.org',
        features: ['Gestion projets', 'Suivi budgets', 'Passation marchés', 'Reporting'],
        image: '/projects/planora360.png',
        year: '2023',
        tagline: 'La gestion de projet pensée pour les ONG et institutions.'
      },
      {
        id: 'goodrh',
        name: 'GoodRH',
        description: 'Gestion des ressources humaines : personnel, contrats, congés, présences, documents et reporting RH.',
        status: 'ready',
        icon: 'solar:users-group-rounded-linear',
        url: 'https://goodrh.com',
        features: ['Gestion personnel', 'Congés', 'Présences', 'Documents RH'],
        image: '/projects/goodrh.png',
        year: '2023',
        tagline: 'Votre service RH, digitalisé et simplifié.'
      },
      {
        id: 'finora360',
        name: 'Finora360',
        description: 'Gestion financière et comptable : recettes, dépenses, budgets, trésorerie et reporting.',
        status: 'ready',
        icon: 'solar:wallet-money-linear',
        url: 'https://finora360.org',
        features: ['Comptabilité', 'Trésorerie', 'Budgets', 'Reporting'],
        image: '/projects/finora360.png',
        year: '2024',
        tagline: 'Maîtrisez vos finances avec transparence et précision.'
      },
      {
        id: 'satisfclient',
        name: 'SatisClient',
        description: 'Gestion de la satisfaction, des avis, réclamations, suggestions et mécanismes de redevabilité.',
        status: 'development',
        icon: 'solar:star-linear',
        features: ['Satisfaction', 'Réclamations', 'Avis clients', 'Redevabilité'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
        year: '2025',
        tagline: 'Écoutez vos clients. Améliorez votre service.'
      }
    ]
  },
  {
    id: '02',
    slug: 'commerces-pme',
    name: 'Commerces & PME',
    description: 'Solutions de gestion commerciale pour boutiques, PME et distributeurs',
    icon: 'solar:cart-large-bold',
    color: 'emerald',
    solutions: [
      {
        id: 'paytrack',
        name: 'PayTrack',
        description: 'Gestion des ventes, paiements, crédits, encaissements et suivi des boutiques.',
        status: 'ready',
        icon: 'solar:card-linear',
        url: 'https://paytrack.sn',
        features: ['Ventes', 'Paiements', 'Crédits', 'Suivi boutiques'],
        image: '/projects/paytrack.png',
        year: '2023',
        tagline: 'Encaissez, gérez, prospérez.'
      },
      {
        id: 'naatalix',
        name: 'NAATALIX',
        description: 'Gestion commerciale complète : ventes, achats, stocks, clients, fournisseurs, dépenses, créances, dettes et rentabilité.',
        status: 'development',
        icon: 'solar:shop-2-linear',
        features: ['Ventes', 'Stocks', 'Fournisseurs', 'Rentabilité'],
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
        year: '2025',
        tagline: 'La gestion commerciale repensée pour les PME.'
      }
    ]
  },
  {
    id: '03',
    slug: 'sante',
    name: 'Santé',
    description: 'Gestion complète pour cliniques, cabinets médicaux et structures paramédicales',
    icon: 'solar:health-bold',
    color: 'rose',
    solutions: [
      {
        id: 'saliha-health',
        name: 'SALIHA HEALTH',
        description: 'Gestion des cliniques, cabinets médicaux, structures paramédicales et autres établissements de santé.',
        status: 'development',
        icon: 'solar:heart-pulse-linear',
        features: ['Dossiers patients', 'Consultations', 'Pharmacie', 'Facturation'],
        image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80',
        year: '2025',
        tagline: 'La santé digitale au service des patients.'
      }
    ]
  },
  {
    id: '04',
    slug: 'education',
    name: 'Éducation',
    description: 'Gestion scolaire et pédagogique pour écoles, instituts et centres de formation',
    icon: 'solar:book-bold',
    color: 'blue',
    solutions: [
      {
        id: 'saliha-education',
        name: 'SALIHA EDUCATION',
        description: 'Gestion administrative et pédagogique : élèves, inscriptions, notes, paiements, suivi pédagogique et administration.',
        status: 'development',
        icon: 'solar:book-2-linear',
        features: ['Inscriptions', 'Notes', 'Paiements', 'Suivi pédagogique'],
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
        year: '2025',
        tagline: 'L\'éducation digitale au service de la réussite.'
      },
      {
        id: 'edukids',
        name: 'EduKids',
        description: 'Solution dédiée au suivi administratif, éducatif et pédagogique des enfants et élèves.',
        status: 'development',
        icon: 'solar:backpack-linear',
        features: ['Suivi enfants', 'Activités', 'Communication parents', 'Présences'],
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80',
        year: '2025',
        tagline: 'Accompagner chaque enfant dans son parcours.'
      }
    ]
  },
  {
    id: '05',
    slug: 'immobilier-btp',
    name: 'Immobilier & BTP',
    description: 'Gestion immobilière, investissements et projets de construction',
    icon: 'solar:home-2-bold',
    color: 'amber',
    solutions: [
      {
        id: 'immoclair',
        name: 'ImmoClair',
        description: 'Gestion et valorisation des biens et opportunités immobilières.',
        status: 'ready',
        icon: 'solar:home-2-linear',
        url: 'https://immoclair.org',
        features: ['Catalogue biens', 'Visites', 'Contrats', 'Suivi clients'],
        image: '/projects/immoclair.png',
        year: '2023',
        tagline: 'L\'immobilier en toute transparence.'
      },
      {
        id: 'projetinvest',
        name: 'ProjetInvest',
        description: 'Structuration, analyse et suivi des projets d\'investissement.',
        status: 'ready',
        icon: 'solar:graph-up-linear',
        url: 'https://projetinvest.org',
        features: ['Analyse ROI', 'Suivi projets', 'Reporting', 'Tableaux de bord'],
        image: '/projects/projetinvest.png',
        year: '2024',
        tagline: 'Investissez avec intelligence et confiance.'
      },
      {
        id: 'safebuild',
        name: 'SafeBuild',
        description: 'Solution digitale destinée au suivi et à la gestion des activités du secteur du BTP.',
        status: 'development',
        icon: 'solar:buildings-2-linear',
        features: ['Chantiers', 'Matériaux', 'Personnel', 'Planning'],
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
        year: '2025',
        tagline: 'Construisez en toute sécurité et efficacité.'
      }
    ]
  },
  {
    id: '06',
    slug: 'evenementiel',
    name: 'Événementiel',
    description: 'Organisation de séminaires, formations et gestion d\'invitations digitales',
    icon: 'solar:calendar-mark-bold',
    color: 'purple',
    solutions: [
      {
        id: 'seminairepro',
        name: 'SéminairePro',
        description: 'Organisation et gestion des séminaires, formations et événements professionnels.',
        status: 'development',
        icon: 'solar:microphone-3-linear',
        features: ['Inscriptions', 'Badges', 'Programme', 'Émargement'],
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80',
        year: '2025',
        tagline: 'Vos événements professionnels, sans stress.'
      },
      {
        id: 'newal',
        name: 'Ñewal',
        description: 'Création, gestion et distribution d\'invitations digitales pour mariages, baptêmes, conférences, séminaires, assemblées générales et autres événements.',
        status: 'development',
        icon: 'solar:confetti-linear',
        features: ['Invitations digitales', 'RSVP', 'QR codes', 'Analytics'],
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80',
        year: '2025',
        tagline: 'Célébrez vos moments, en toute élégance.'
      }
    ]
  },
  {
    id: '07',
    slug: 'restauration',
    name: 'Restauration',
    description: 'Gestion digitale pour restaurants et services alimentaires',
    icon: 'solar:chef-hat-bold',
    color: 'orange',
    solutions: [
      {
        id: 'teranga-food',
        name: 'Teranga Food',
        description: 'Solution digitale destinée à la gestion des activités de restauration et de services alimentaires.',
        status: 'development',
        icon: 'solar:chef-hat-linear',
        features: ['Commandes', 'Menus', 'Stock', 'Livraisons'],
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
        year: '2025',
        tagline: 'Savourez le succès de votre restaurant.'
      }
    ]
  },
  {
    id: '08',
    slug: 'communautes',
    name: 'Communautés',
    description: 'Plateformes de mise en relation et gestion de communautés',
    icon: 'solar:users-group-rounded-bold',
    color: 'green',
    solutions: [
      {
        id: 'branchemoi',
        name: 'BrancheMoi',
        description: 'Plateforme web facilitant la mise en relation et l\'accès à des services.',
        status: 'development',
        icon: 'solar:link-linear',
        features: ['Mise en relation', 'Services', 'Messagerie', 'Paiements'],
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80',
        year: '2025',
        tagline: 'Connectez-vous. Collaborez. Créez.'
      },
      {
        id: 'jefbaraka',
        name: 'JëfBaraka',
        description: 'Solution digitale de gestion et de suivi d\'activités.',
        status: 'development',
        icon: 'solar:hand-shake-linear',
        features: ['Activités', 'Suivi', 'Reporting', 'Collaboration'],
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
        year: '2025',
        tagline: 'Ensemble, bâtissons l\'avenir.'
      }
    ]
  },
  {
    id: '09',
    slug: 'transport',
    name: 'Transport',
    description: 'Plateforme de mise en relation pour le transport et la mobilité',
    icon: 'solar:bus-bold',
    color: 'indigo',
    solutions: [
      {
        id: 'yobbu',
        name: 'YOBBU',
        description: 'Plateforme digitale de transport permettant la mise en relation entre chauffeurs et clients.',
        status: 'development',
        icon: 'solar:map-arrow-linear',
        features: ['Réservation', 'Géolocalisation', 'Paiement', 'Notation'],
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80',
        year: '2025',
        tagline: 'Votre mobilité, simplifiée et connectée.'
      }
    ]
  }
]

// Helper functions
export const getSectorBySlug = (slug: string) => {
  return sectors.find(s => s.slug === slug)
}

export const getSolutionById = (solutionId: string) => {
  for (const sector of sectors) {
    const solution = sector.solutions.find(s => s.id === solutionId)
    if (solution) return { solution, sector }
  }
  return null
}

export const getStats = () => {
  const totalSolutions = sectors.reduce((acc, s) => acc + s.solutions.length, 0)
  const readySolutions = sectors.reduce((acc, s) =>
    acc + s.solutions.filter(sol => sol.status === 'ready').length, 0
  )
  const devSolutions = totalSolutions - readySolutions

  return {
    totalSolutions,
    readySolutions,
    devSolutions,
    totalSectors: sectors.length
  }
}
