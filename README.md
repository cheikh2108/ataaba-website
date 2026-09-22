# ATAABA EXPERTISE - Site Web Officiel

Site web moderne Next.js 14 pour ATAABA EXPERTISE, entreprise spécialisée en gestion de projets et solutions digitales.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **GSAP** (animations)
- **Framer Motion**

## 📱 Features

- ✅ Design responsive (mobile-first)
- ✅ Navigation mobile avec burger menu
- ✅ 9 secteurs d'activité / 18 solutions digitales
- ✅ Page Formations avec 6 cours + formulaire d'inscription
- ✅ Blog / Ressources avec articles détaillés
- ✅ Section À propos avec fondateur
- ✅ Formulaires de contact fonctionnels
- ✅ Animations GSAP fluides
- ✅ Dark mode cyberpunk aesthetic

## 🎨 Design System

**ATAABA Design System:**
- Background: `#09090B` (zinc-950)
- Primary: `#22D3EE` (cyan-400)
- Palette: Zinc (zinc-100 → zinc-950)
- Typography: Inter (thin/light) + JetBrains Mono
- Style: Dark cyberpunk, spatial computing aesthetic

## 🏗️ Structure

```
src/
├── app/                 # Pages (App Router)
│   ├── page.tsx        # Homepage
│   ├── services/       # Services & secteurs
│   ├── formations/     # Formations ATAABA Academy
│   ├── ressources/     # Blog & insights
│   ├── about/          # À propos
│   └── contact/        # Contact
├── components/         # Composants React
├── data/              # Data structures (solutions, articles, formations)
└── styles/            # Global CSS

public/
├── logo-full.png      # Logo horizontal
├── logo-vertical.png  # Logo vertical
├── logo-symbol.png    # Symbole seul
└── founder.png        # Photo fondateur
```

## 🚦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## 📄 Pages

- **/** - Homepage (Hero, Stats, Approche, Secteurs, Projects, CTA)
- **/services** - 9 secteurs d'activité (cards cliquables)
- **/services/[slug]** - Détail secteur avec solutions
- **/formations** - ATAABA Academy (6 formations + inscription)
- **/ressources** - Blog (6 articles + newsletter)
- **/ressources/[id]** - Détail article
- **/about** - À propos (Mission, Vision, Fondateur, Stats)
- **/contact** - Formulaire de contact

## 📊 Données

### Solutions (19 total)
- Technologies: 5 solutions
- Expertise: 4 solutions  
- Entreprises & Projets: 4 solutions
- Agriculture: 1 solution
- Santé: 1 solution
- Éducation: 1 solution
- Environnement: 1 solution
- Immobilier: 1 solution
- Finances: 1 solution

### Formations (6 cours)
- Suivi-Évaluation
- Systèmes d'Information DHIS2
- Power BI & Data Viz
- Gestion de Projets
- Excel & Gestion de Données
- Digitalisation des Processus

### Ressources (6 articles)
- S&E Bonnes Pratiques
- Systèmes d'Information
- Digitalisation
- Tableaux de Bord
- GAR
- Pilotage Stratégique

## 📱 Responsive

- Mobile: < 768px (burger menu, stack layouts)
- Tablet: 768px - 1024px (sidebar visible, adapted layouts)
- Desktop: > 1024px (full sidebar, GSAP animations)

## 🎯 Performance

- Images optimisées avec Next.js Image
- Lazy loading
- Priority loading (above fold)
- GSAP animations hardware-accelerated
- Code splitting automatique

## 📧 Contact

**ATAABA EXPERTISE**
- Email: contact@ataabaexpertise.com
- Téléphone: +221 78 751 72 72 / +221 76 806 88 87
- Adresse: Almadies 2, Rufisque, Dakar, Sénégal

## 👨‍💼 Fondateur

**Amadou Bamba CISS**
Fondateur & Expert Senior en Suivi-Évaluation et Systèmes d'Information
- 14+ années d'expérience
- 50+ projets complexes
- 100+ personnes formées
- 95% taux de satisfaction

---

**Développé avec ❤️ pour ATAABA EXPERTISE** 🚀
