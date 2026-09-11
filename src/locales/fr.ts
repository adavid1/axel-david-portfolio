import details from './details.fr'

export default Object.freeze({
    ...details,

    // Profil / hero
    title: 'Ingénieur informatique',
    intro: 'Ingénieur informatique avec {years} ans d\'expérience, passionné par la construction d\'applications web et mobiles évolutives et maintenables.',

    // Intitulés d'expériences
    iutTitle: 'DUT Mesures Physiques',
    iutSchoolName: 'IUT de Saint-Nazaire',
    utbmSchoolName: 'Université de Technologie de Belfort-Montbéliard',
    utbmSchoolTitle: 'Ingénieur Informatique par apprentissage',
    geApprenticeshipTitle: 'Apprenti Ingénieur Informatique',
    fivesSylepsMissionTitle: 'Développeur de bases de données',
    fullStackDeveloper: 'Développeur Full Stack',
    dbAdminAndDev: 'Administrateur et Développeur de BDD',
    founderAndDeveloperTitle: 'Fondateur & Développeur',

    common: {
        present: 'Aujourd\'hui',
        viewDetails: 'Voir le détail',
    },

    nav: {
        home: 'Accueil',
        timeline: 'Parcours',
        projects: 'Projets',
        cv: 'CV',
        switchTo: 'Passer en anglais',
    },

    cv: {
        download: 'Télécharger en PDF',
        downloadHint: 'Ouvre la fenêtre d\'impression, choisissez « Enregistrer en PDF » comme destination.',
        backToSite: 'Retour au portfolio',
        inkSaverHint: 'Choisissez la version claire (sans bandeau ni photo) pour économiser l\'encre à l\'impression papier.',
        ecoVersion: 'Éco-encre',
        availableForWork: 'Disponible pour un CDI',
        present: 'Aujourd\'hui',
        sections: {
            profile: 'Profil',
            experience: 'Expériences professionnelles',
            education: 'Formation',
            skills: 'Compétences',
            languages: 'Langues',
            certifications: 'Diplômes & certifications',
            interests: 'Centres d\'intérêt',
        },
        certs: {
            bnssa: 'BNSSA, brevet de sauvetage aquatique',
            pse1: 'PSE1, premiers secours en équipe',
        },
        interests: 'Code · Sport · Voyage · Musique · Bricolage · Culture numérique',
        summary: 'Ingénieur informatique avec {years} ans d\'expérience, je développe des applications web et mobiles full-stack, de la base de données jusqu\'au déploiement. Double profil d\'ingénieur et de fondateur, à l\'aise avec l\'intégration de l\'IA dans les produits. Je recherche un poste en CDI.',
        permis: 'Permis B',
        oneLiner: 'Ingénieur informatique',
        exp: {
            davidServices: 'Conception et publication de plusieurs applications mobiles sur l\'App Store et Google Play (« Un Jour en France », « Puffless », « WakeVerse ») : apps React Native, backend serverless, abonnements in-app, gamification et IA.',
            ateme: 'Développement full-stack (Vue, Node, Express, GraphQL) et intégration (Docker, Kubernetes) en équipe Scrum ; revues de code, tests et optimisation des performances.',
            naval: 'Administration et maintien en condition opérationnelle du logiciel Sage X3 (support N1 à N3), extraction et migration de données vers eBusiness Suite R12, automatisation SQL.',
            fives: 'Développement logiciel (C#, PL/SQL), intégration et configuration d\'outils, support et formation des utilisateurs.',
            ge: 'Développement d\'applications de dématérialisation (C#, WPF) et des bases de données associées, en lien direct avec les utilisateurs et en méthodologie agile.',
            breizhcard: 'Développement full-stack (Nuxt, Vue, Node, MongoDB, Stripe) de la plateforme SaaS de carte de visite connectée (NFC + QR code), du produit au déploiement.',
        },
    },

    home: {
        viewJourney: 'Voir mon parcours',
        exploreProjects: 'Explorer les projets',
        techTitle: 'Technologies que j\'utilise',
    },

    about: {
        title: 'À propos',
        p1: 'Ingénieur informatique de {age} ans, je construis des applications web et mobiles full-stack depuis {years} ans, de la base de données à l\'interface, jusqu\'au déploiement.',
        p2: 'Après mes débuts en alternance chez General Electric, puis des missions chez Fives Syleps, Naval Group et Ateme, j\'ai choisi fin 2024 de me consacrer à mes propres projets. J\'ai monté mon auto-entreprise (David Services) et publié plusieurs applications mobiles : « Un Jour en France » sur l\'App Store et Google Play, puis « Puffless » et « WakeVerse » sur l\'App Store, tout en contribuant bénévolement à la plateforme Breizhcard.',
        p3: 'J\'aime aussi travailler main dans la main avec l\'IA : Claude et ChatGPT sont devenus de vrais accélérateurs au quotidien, et j\'intègre l\'IA directement dans mes produits. « Un Jour en France » propose par exemple une narration audio générée par IA.',
        p4: 'Je recherche aujourd\'hui un poste en CDI où mettre cette double casquette (la solidité technique d\'un ingénieur et l\'autonomie d\'un fondateur) au service d\'une équipe et d\'un produit qui ont du sens.',
    },

    skills: {
        title: 'Compétences',
        subtitle: 'Les technologies et savoir-faire que je mobilise au quotidien',
        groups: {
            languages: 'Langages',
            frontend: 'Front-end',
            backend: 'Back-end',
            databases: 'Bases de données',
            devops: 'DevOps & outils',
            testing: 'Tests & méthodologies',
            ai: 'IA & Prompt engineering',
        },
        languagesTitle: 'Langues',
        spoken: {
            french: 'Français',
            frenchLevel: 'Langue maternelle',
            english: 'Anglais',
            englishLevel: 'Courant (C1)',
            spanish: 'Espagnol',
            spanishLevel: 'Intermédiaire',
        },
    },

    contact: {
        title: 'Travaillons ensemble',
        subtitle: 'Disponible pour un CDI · Saint-Nazaire & télétravail. Un projet, un poste à pourvoir ou simplement envie d\'échanger ?',
        emailCta: 'M\'écrire',
        linkedinCta: 'LinkedIn',
    },

    footer: {
        tagline: 'Ingénieur informatique passionné par la construction d\'applications web et mobiles évolutives et maintenables. Toujours curieux d\'apprendre de nouvelles technologies et de résoudre des problèmes complexes.',
        quickLinks: 'Liens rapides',
        timeline: 'Parcours professionnel',
        projects: 'Mes projets',
        featuredUjef: 'À la une : Un Jour en France',
        connect: 'Me contacter',
        location: 'Saint-Nazaire, France',
        copyright: '© {year} Axel David. Construit avec Vue.js & Tailwind CSS.',
        legal: 'Mentions légales',
    },

    legal: {
        title: 'Mentions légales',
        subtitle: 'Informations sur l\'éditeur de ce site.',
        publisher: 'Éditeur du site',
        publisherValue: 'DAVID SERVICES, entreprise individuelle Axel David',
        siren: 'SIREN',
        siret: 'SIRET',
        headOffice: 'Siège',
        headOfficeValue: 'Saint-Nazaire, France',
        contact: 'Contact',
        apps: 'Applications éditées',
    },

    timeline: {
        title: 'Parcours professionnel',
        subtitle: 'Mon parcours, des études à aujourd\'hui : expériences, formation et progression continue',
        techStack: 'Stack technique',
        concurrent: '{count} en parallèle',
    },

    expTypes: {
        education: 'Formation',
        volunteer: 'Bénévolat',
        apprenticeship: 'Alternance',
        freelance: 'Indépendant',
        professional: 'Professionnel',
    },

    modal: {
        description: 'Description',
        technologies: 'Technologies utilisées',
    },

    projects: {
        title: 'Mes projets',
        subtitle: 'Une sélection de projets illustrant différentes technologies et approches de résolution de problèmes',
        featured: 'Projets',
        featuredSuffix: 'phares',
        other: 'Autres projets',
        website: 'Site web',
        appStore: 'App Store',
        playStore: 'Google Play',
        badgeMobileIos: 'App mobile · iOS',
        badgeMobileCrossPlatform: 'App mobile · iOS & Android',
        badgePlatform: 'Plateforme full-stack',
        breizhcardDescription: 'Plateforme SaaS de carte de visite en bois connectée (NFC + QR code) : conception produit, développement full-stack, e-commerce et déploiement.',
    },

    detail: {
        back: 'Retour aux projets',
        featuredProject: 'Projet phare',
        projectImpact: 'Impact du projet',
        developmentTimeline: 'Déroulé du projet',
        overview: 'Présentation du projet',
        keyFeatures: 'Fonctionnalités clés',
        technicalChallenges: 'Défis techniques',
        challenge: 'Problème',
        solution: 'Solution',
        myRole: 'Mon rôle',
        availability: 'Disponibilité',
        premium: 'Premium',
        downloadAppStore: 'Télécharger sur l\'App Store',
        downloadPlayStore: 'Télécharger sur Google Play',
        visitWebsite: 'Visiter le site',
        visitLiveSite: 'Voir le site en ligne',
        viewSource: 'Voir le code source',
        notFound: 'Projet introuvable',
        notFoundDescription: 'Le projet que vous cherchez n\'existe pas.',
    },

    // Descriptions d'expériences
    exp: {
        iut: `Physique · Chimie · Mathématiques · Informatique · Électronique · Optique · Mécanique · Thermodynamique · Acoustique · Traitement du signal · Métrologie · Instrumentation · Informatique industrielle · Qualité · Sécurité · Environnement`,
        utbm: `- Systèmes informatiques complexes : analyse, spécification, conception, modélisation, développement, administration et industrialisation
- Gestion de projet et leadership · droit · marketing · communication · finance`,
        ge: `Alternance avec l'UTBM · TÉLÉTRAVAIL 💻
- Développement d'applications pour supprimer l'usage du papier (C#, WPF)
- Création des bases de données liées aux applications (SQL, MS SQL Server)
- Travail direct avec les utilisateurs finaux
- Méthodologies agiles pour structurer les projets
- 2 ans au sein du service qualité basé à l'usine
- Formation des utilisateurs
- Rédaction de documentation structurelle`,
        fives: `TÉLÉTRAVAIL 💻 · Via Astek
- Développement logiciel (C#, PL/SQL)
- Intégration d'outils
- Configuration logicielle
- Support et formation
- Reporting d'activité`,
        naval: `Via Astek
- Maintien en condition opérationnelle et stabilité du logiciel Sage X3
- Support complet du logiciel Sage X3 (niveaux 1, 2 et 3)
- Extractions de données Sage X3 pour migration vers eBusiness Suite R12
- Archivage des données Sage X3 via le système MEMORY
- Finalisation de la documentation d'archivage des données de gestion de production (GPAO)
- Coordination et supervision de la suppression des plans d'ordonnancement automatiques
- Décommissionnement des serveurs utilisés par la GPAO NA Cherbourg
- Automatisation des extractions SQL quotidiennes en Visual Basic`,
        ateme: `TÉLÉTRAVAIL 💻 · Via Astek
- Développement full-stack : frontend (VueJs), backend (NodeJs, Express, GraphQL), intégration (Docker, Kubernetes)
- Participation aux cérémonies scrum : sprint planning, dailys, revues de sprint, rétrospectives
- Qualité de code et bonnes pratiques : revues de code, tests (Jest, pytest), rédaction de documentation
- Résolution de problèmes : débogage, optimisation des performances`,
        breizhcard: `Plateforme SaaS de carte de visite en bois connectée (NFC + QR code) : conception produit, développement full-stack, e-commerce et déploiement.`,
        davidServices: `Fondateur de ma propre entreprise (auto-entreprise) 🚀
- Conception, développement et publication de plusieurs applications mobiles cross-platform, dont « Un Jour en France » (disponible sur l'App Store et Google Play)
- Maîtrise de bout en bout : application mobile, backend serverless, abonnements in-app, pipeline de contenu et publication sur les stores
- Produit freemium complet avec « Un Jour en France » : contenu quotidien, quiz, gamification (séries, badges, classement mensuel) et narration audio par IA
- Accès Premium et statut d'abonnement infalsifiables, vérifiés côté serveur`,
    },

    // Descriptions courtes des projets
    proj: {
        portfolio: 'Site portfolio construit avec Vue.js et Tailwind CSS',
        streamingMultichat: 'Application de chat en temps réel qui unifie les chats Twitch, YouTube Live et TikTok Live dans une seule interface',
        bulk: 'Jeu de soirée où les joueurs interagissent avec un écran commun et utilisent leur téléphone pour répondre',
        optymo: 'Outil qui découpe les enregistrements radio quotidiens en conversations triées et horodatées',
        bobRaoul: 'Un projet fun qui fournit un retour visuel et sonore à chaque fois qu\'une capsule est lancée avec succès dans la tête de Bob',
        ncg: 'Projet d\'automatisation qui simplifie la recherche, le montage et la publication de musiques libres de droits sur YouTube',
        unJourEnFrance: 'Application mobile de culture française au quotidien : un événement historique ou culturel chaque jour, avec un quiz interactif, une narration audio par IA et de la gamification (séries, badges, classement mensuel). Disponible sur l\'App Store et Google Play.',
        puffless: 'Application mobile d\'aide à l\'arrêt de la vape : plan personnalisé, suivi des économies et de la santé, gestion des cravings et gamification pour rester motivé. Disponible sur l\'App Store.',
        wakeverse: 'Réveil qui remplace le doomscrolling matinal par un verset biblique : alarme fiable même en mode silencieux, versets par thème, streaks et partage, en français et en anglais. Disponible sur l\'App Store.',
    },
})
