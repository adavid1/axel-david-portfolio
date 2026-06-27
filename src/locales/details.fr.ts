// Contenu détaillé des pages projet (séparé pour garder le fichier de locale
// principal lisible). Fusionné dans les messages `fr`.
export default {
    projDetail: {
        portfolio: {
            overview: `Ce site portfolio illustre une approche moderne du personal branding et de la présentation professionnelle. Construit avec Vue.js 3 et TypeScript, il met en avant une architecture propre et des pratiques de développement web contemporaines.

Le site propose un design responsive qui fonctionne parfaitement sur tous les appareils, avec des animations fluides et des effets de particules qui créent une expérience engageante sans compromettre les performances. Le code illustre les bonnes pratiques en matière d'architecture de composants, de typage et de maintenabilité.`,
            features: [
                { title: 'Stack moderne', description: 'Construit avec Vue.js 3, TypeScript et Tailwind CSS pour des performances et une maintenabilité optimales' },
                { title: 'Design responsive', description: "Mise en page entièrement responsive qui s'adapte parfaitement aux ordinateurs, tablettes et mobiles" },
                { title: 'Éléments interactifs', description: 'Les animations de particules et les transitions fluides créent une expérience engageante' },
                { title: 'Architecture propre', description: 'Code bien structuré, composants réutilisables et séparation claire des responsabilités' },
            ],
            challenges: [
                { title: 'Optimisation des performances', problem: 'Concilier attrait visuel, temps de chargement rapides et animations fluides', solution: 'Lazy loading, systèmes de particules optimisés et animations CSS efficaces' },
                { title: 'Compatibilité multi-appareils', problem: 'Garantir une expérience cohérente sur différentes tailles d’écran et appareils', solution: 'Utilisation des utilitaires responsive de Tailwind CSS et tests approfondis sur plusieurs appareils' },
            ],
        },
        streamingMultichat: {
            overview: `Streaming Multichat est une application d'overlay de chat en temps réel conçue pour les créateurs qui streament sur plusieurs plateformes simultanément. Elle unifie les messages de Twitch, YouTube Live et TikTok Live dans une seule interface personnalisable.

Le projet répond à un problème courant des streamers qui veulent interagir avec leur audience sur plusieurs plateformes sans changer en permanence de fenêtre de chat. L'application offre une synchronisation des messages en temps réel, un style personnalisable et des capacités d'overlay.`,
            features: [
                { title: 'Intégration multi-plateformes', description: 'Se connecte simultanément aux API de chat Twitch, YouTube Live et TikTok Live' },
                { title: 'Synchronisation temps réel', description: 'Une architecture basée sur WebSocket garantit une livraison instantanée des messages sur toutes les plateformes' },
                { title: 'Overlay personnalisable', description: "Les streamers peuvent personnaliser l'apparence, la position et le comportement de l'overlay" },
                { title: 'Filtrage des messages', description: 'Options de filtrage avancées pour gérer le spam et les contenus inappropriés' },
            ],
            challenges: [
                { title: "Limites d'API", problem: 'Les plateformes ont des limites de débit et des restrictions d’API variables', solution: 'Files d’attente intelligentes et mécanismes de cache pour optimiser l’usage des API' },
                { title: 'Performance temps réel', problem: 'Maintenir des performances fluides lors de streams à fort trafic, avec des centaines de messages par minute', solution: 'Optimisation de la gestion WebSocket et regroupement des messages par lots' },
            ],
        },
        bulk: {
            overview: `Bulk est une plateforme de jeu de soirée interactive où les joueurs utilisent leur mobile pour participer à divers mini-jeux affichés sur un écran partagé. Le jeu prend en charge plusieurs joueurs simultanés et propose une variété de défis basés sur des questions et la créativité.

La plateforme se compose d'une application d'affichage principale développée avec Angular et d'une application mobile compagnon créée avec Ionic. Les joueurs rejoignent les parties en scannant un QR code ou en saisissant un code de salon, pour une expérience fluide qui exploite les appareils que tout le monde a déjà en poche.`,
            features: [
                { title: 'Jeu multi-appareils', description: 'Les joueurs utilisent leur smartphone comme manette tout en suivant le jeu sur un écran partagé' },
                { title: 'Synchronisation temps réel', description: 'Collecte et affichage instantanés des réponses grâce à la technologie WebSocket' },
                { title: 'Variété de types de jeux', description: 'Plusieurs modes de jeu : quiz, défis créatifs et jeux de vote' },
                { title: 'Gestion simple des salons', description: 'Création de partie simple, avec QR code ou code de salon pour rejoindre' },
            ],
            challenges: [
                { title: 'Support mobile multi-plateformes', problem: 'Garantir une expérience cohérente sur iOS et Android', solution: 'Utilisation du framework Ionic pour le développement hybride, avec des optimisations propres à chaque plateforme' },
                { title: 'Gestion d’état en temps réel', problem: 'Garder l’état du jeu synchronisé entre plusieurs appareils et l’écran principal', solution: 'Système de gestion d’état robuste avec communication WebSocket et résolution de conflits' },
            ],
        },
        optymoRecordSplitter: {
            overview: `Optymo Record Splitter est un outil spécialisé conçu pour traiter les enregistrements radio quotidiens du réseau de bus Optymo à Belfort, en France. L'application découpe automatiquement de longs enregistrements audio en conversations individuelles à partir de la détection de silences et d'horodatages.

Cet outil a été créé pour aider les opérateurs radio à archiver et relire efficacement les communications. Le logiciel peut traiter des heures d'enregistrement continu et séparer intelligemment les différentes conversations, ce qui facilite grandement la recherche d'une communication ou d'un incident précis à des fins de relecture ou de conformité.`,
            features: [
                { title: 'Segmentation audio automatique', description: 'Découpe intelligemment les fichiers audio à partir de la détection des silences et des motifs de conversation' },
                { title: 'Génération d’horodatages', description: 'Génère automatiquement des horodatages précis pour chaque segment de conversation' },
                { title: 'Traitement par lots', description: 'Traite plusieurs fichiers audio simultanément avec suivi de progression' },
                { title: 'Contrôle qualité', description: 'Validation intégrée pour s’assurer qu’aucune conversation n’est perdue pendant le traitement' },
            ],
            challenges: [
                { title: 'Performance du traitement audio', problem: 'Traiter de gros fichiers audio efficacement sans consommer trop de ressources système', solution: 'Traitement audio en streaming avec des tailles de buffer configurables pour des performances optimales' },
                { title: 'Détection précise des silences', problem: 'Distinguer les pauses naturelles des vraies coupures de conversation dans un environnement radio bruyant', solution: 'Algorithmes adaptatifs tenant compte du bruit de fond et des parasites radio' },
            ],
        },
        bobRaoul: {
            overview: `Bob Raoul est un projet hardware ludique qui combine jeu physique et retour numérique. Le projet met en scène une cible physique (la tête de Bob) sur laquelle les joueurs tentent de lancer des capsules ou autres petits objets. Lorsqu'un tir réussi est détecté, le système fournit un retour visuel et sonore.

Construit avec un Raspberry Pi et des capteurs GPIO, ce projet illustre l'intégration de capteurs matériels avec des applications logicielles. Le système comprend des animations LED, des effets sonores et un suivi des scores, ce qui en fait un ajout divertissant à n'importe quel bureau ou espace de détente.`,
            features: [
                { title: 'Détection de cible physique', description: 'Des capteurs GPIO détectent quand un objet touche la cible' },
                { title: 'Retour audiovisuel', description: 'Animations LED et effets sonores fournissent un retour immédiat en cas de tir réussi' },
                { title: 'Suivi des scores', description: 'Comptabilise les tirs réussis et affiche des statistiques' },
                { title: 'Intégration Raspberry Pi', description: 'Utilisation efficace des broches GPIO du Raspberry Pi et des bibliothèques Python' },
            ],
            challenges: [
                { title: 'Calibrage des capteurs', problem: 'Garantir une détection précise tout en évitant les faux positifs dus aux vibrations ou à l’environnement', solution: 'Algorithmes anti-rebond et routines de calibrage pour une sensibilité optimale' },
                { title: 'Fiabilité matérielle', problem: 'Créer un système robuste capable de supporter des impacts répétés et un fonctionnement continu', solution: 'Capteurs de qualité industrielle et boîtiers de protection pour une fiabilité durable' },
            ],
        },
        noCopyrightGang: {
            overview: `No Copyright Gang (NCG) est un projet d'automatisation qui simplifie tout le processus de recherche, de montage et de publication de musiques libres de droits sur YouTube. Le système découvre automatiquement de nouvelles musiques depuis diverses sources libres de droits, télécharge les morceaux, applique un montage de base et les met en ligne sur YouTube avec les métadonnées appropriées.

Ce projet illustre des capacités d'automatisation avancées : web scraping, traitement audio et intégration de l'API YouTube. Le système a été conçu pour fonctionner de façon autonome, avec un minimum d'intervention manuelle tout en maintenant un haut niveau de qualité.`,
            features: [
                { title: 'Découverte de contenu automatisée', description: 'Recherche et identifie automatiquement de nouvelles musiques libres de droits depuis plusieurs sources' },
                { title: 'Pipeline de traitement audio', description: 'Applique un traitement audio, une normalisation et une conversion de format cohérents' },
                { title: 'Intégration YouTube', description: 'Mise en ligne automatisée avec titres, descriptions et tags appropriés via l’API YouTube' },
                { title: 'Contrôle qualité', description: 'Vérifications intégrées pour garantir la qualité audio et le respect des droits' },
            ],
            challenges: [
                { title: 'Vérification des droits', problem: 'S’assurer que toutes les musiques traitées sont réellement libres de droits et monétisables sur YouTube', solution: 'Plusieurs couches de vérification et suivi en base des licences des sources' },
                { title: 'Limites de l’API YouTube', problem: 'Respecter les limites de débit et les restrictions de mise en ligne de l’API YouTube', solution: 'Files d’attente intelligentes et mécanismes de réessai pour optimiser le taux de réussite des mises en ligne' },
            ],
        },
    },

    breizhcard: {
        description: 'Une plateforme complète de carte de fidélité numérique pour les commerces bretons',
        year: "2023 - Aujourd'hui",
        overview: `Breizhcard est une plateforme de carte de fidélité numérique que j'ai imaginée, conçue et développée de zéro en tant que projet bénévole. La plateforme met en relation les commerces locaux bretons et leurs clients via un système de fidélité numérique moderne.

En tant que seul développeur full-stack du projet, j'ai tout pris en charge : de l'étude de marché initiale et du design UX à l'architecture backend, au développement frontend, au déploiement et à la maintenance. Ce projet représente une solution complète de bout en bout, au service de vrais commerces et de vrais clients.

La plateforme permet aux commerces de créer des programmes de fidélité, de gérer la relation client et de suivre l'engagement, tandis que les clients peuvent découvrir des commerces locaux, cumuler des points et utiliser leurs récompenses via une interface intuitive pensée mobile-first.`,
        impact: {
            businesses: 'Commerces actifs',
            users: 'Utilisateurs inscrits',
            scratch: 'Développé de zéro',
        },
        roles: [
            'Design produit & UX',
            'Développement full-stack',
            'DevOps & déploiement',
            'Développement commercial',
        ],
        features: [
            { title: 'Tableau de bord commerçant', description: 'Panneau d’administration complet pour gérer les programmes de fidélité, consulter les statistiques et interagir avec les clients' },
            { title: 'App mobile client', description: 'Progressive Web App permettant aux clients de découvrir les commerces, scanner des QR codes et suivre leurs points de fidélité' },
            { title: 'Système de QR codes', description: 'Cumul de points fluide grâce à des QR codes dynamiques générés pour chaque transaction' },
            { title: 'Statistiques en temps réel', description: 'Tableau de bord en direct montrant l’engagement client, les récompenses populaires et les performances du commerce' },
            { title: 'Architecture multi-tenant', description: 'Système évolutif prenant en charge plusieurs commerces avec des données isolées et une image de marque personnalisable' },
            { title: 'Système de notifications', description: 'Notifications e-mail et push automatisées pour les récompenses, offres spéciales et actualités des commerces' },
        ],
        challenges: [
            { title: 'Isolation des données multi-tenant', problem: 'Garantir une séparation complète des données entre commerces tout en conservant performance et simplicité', solution: 'Schéma de base de données par tenant, résolution du tenant au niveau middleware et contrôles d’accès complets aux données' },
            { title: 'Gestion des points en temps réel', problem: 'Gérer des transactions de points concurrentes et éviter la double dépense ou les conditions de course', solution: 'Transactions atomiques via les transactions ACID de MongoDB et verrouillage optimiste' },
            { title: 'Design UX mobile-first', problem: 'Créer une expérience intuitive pour des utilisateurs de tous âges et niveaux techniques', solution: 'Sessions de test utilisateur avec des commerçants et des clients, et itérations sur le design à partir de retours réels' },
            { title: 'Optimisation des performances', problem: 'Garantir des temps de chargement rapides et des interactions fluides sur des appareils et réseaux variés', solution: 'Lazy loading, optimisation des images, cache via service worker et amélioration progressive' },
        ],
        timeline: [
            { phase: 'Recherche & cadrage', duration: 'Juillet 2023', description: 'Étude de marché, analyse concurrentielle et validation du concept avec des commerçants locaux' },
            { phase: 'Développement du MVP', duration: 'Août - Octobre 2023', description: 'Développement du cœur de la plateforme : authentification, système de fidélité de base et tableau de bord commerçant' },
            { phase: 'Bêta-test', duration: 'Novembre 2023 - Janvier 2024', description: 'Bêta fermée avec 5 commerces locaux, collecte de retours et itérations sur l’expérience' },
            { phase: 'Lancement public', duration: 'Février 2024', description: 'Lancement officiel avec campagne marketing et onboarding des 20 premiers commerces' },
            { phase: 'Extension des fonctionnalités', duration: "Mars 2024 - Aujourd'hui", description: 'Statistiques avancées, outils marketing automatisés et intégration avec les systèmes de caisse existants' },
        ],
    },

    ujef: {
        description: 'Une dose quotidienne d’histoire et de culture françaises : un événement par jour, un quiz interactif, une narration audio par IA et une expérience gamifiée.',
        overview: `Un Jour en France transforme la culture française en rituel quotidien. Chaque jour, l'utilisateur découvre un événement historique ou culturel marquant, teste ses connaissances avec un court quiz et progresse dans le temps grâce à un système d'engagement inspiré des meilleures applications d'apprentissage.

Le produit suit un modèle freemium généreux — du contenu quotidien gratuit pour tous, enrichi d'un abonnement Premium (articles complets, narration audio par IA, archives et protection des séries) pour les passionnés.

J'ai conçu, développé et publié l'ensemble de bout en bout en tant que fondateur de mon entreprise (DAVID SERVICES) : l'application mobile, le backend serverless, le système d'abonnement in-app, le pipeline de contenu et la mise en production sur les stores.`,
        status: [
            { label: 'iOS', value: 'Disponible sur l’App Store' },
            { label: 'Android', value: 'Test fermé — Google Play (été 2026)' },
            { label: 'Modèle', value: 'Freemium + Premium (essai gratuit 7 jours)' },
            { label: 'Langue', value: 'Français' },
        ],
        roles: [
            'Design produit & UX',
            'App mobile (React Native / Expo)',
            'Backend serverless & sécurité des données',
            'Abonnements in-app & paiements',
            'Pipeline de contenu & audio',
            'CI/CD & publication sur les stores',
        ],
        features: [
            { title: 'Événement français du jour', description: 'Un événement historique ou culturel français marquant chaque jour, avec un résumé concis à lire en quelques minutes.' },
            { title: 'Quiz quotidien interactif', description: 'Un court quiz de 3 questions avec score et points pour tester et ancrer ce que l’on vient d’apprendre.' },
            { title: 'Gamification & rétention', description: 'Séries quotidiennes avec boucliers de protection, badges à débloquer et classement mensuel recalculé côté serveur.' },
            { title: 'Mode invité sans friction', description: 'On joue immédiatement sans compte — lecture, quiz et progression — puis toute la progression est conservée à l’inscription.' },
            { title: 'Narration audio par IA', description: 'Chaque événement est narré par synthèse vocale IA, pour écouter l’histoire du jour les mains libres.' },
            { title: 'Contenu approfondi', description: 'Articles complets de 800 à 1 200 mots, explications détaillées des réponses, anecdotes exclusives et accès à toutes les archives.' },
        ],
        challenges: [
            { title: 'Développement iOS multiplateforme sans Mac', description: 'Toute la chaîne iOS — build, signature et publication sur l’App Store — est gérée depuis Windows via des builds cloud, avec test sur appareil réel grâce à un client de développement dédié.' },
            { title: 'Protection du contenu Premium côté serveur', description: 'Le contenu payant n’est jamais exposé aux utilisateurs gratuits, même via un appel API direct : l’isolation est garantie par des règles de sécurité au niveau de la base de données, pas seulement par l’affichage.' },
            { title: 'Statut d’abonnement infalsifiable', description: 'Le passage en Premium ne peut être déclenché que par un canal serveur de confiance ; toute tentative de modification depuis l’app est rejetée. Le serveur est l’unique source de vérité.' },
            { title: 'Un système de gamification complet', description: 'Séries quotidiennes avec boucliers, badges conditionnels et classement mensuel recalculé côté serveur — une logique pensée de bout en bout pour la rétention et l’équité.' },
        ],
    },
}
