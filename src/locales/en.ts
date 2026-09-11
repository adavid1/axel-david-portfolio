import details from './details.en'

export default Object.freeze({
    ...details,

    // Profile / hero
    title: 'IT Engineer',
    intro: 'IT engineer with {years} years of experience, passionate about building scalable and maintainable web and mobile applications.',

    // Experience titles
    iutTitle: 'DUT in Physical Measurements',
    iutSchoolName: 'IUT of Saint-Nazaire',
    utbmSchoolName: 'University of Technology of Belfort-Montbéliard',
    utbmSchoolTitle: 'IT Engineer by apprenticeship',
    geApprenticeshipTitle: 'Apprentice IT Engineer',
    fivesSylepsMissionTitle: 'Database Developer',
    fullStackDeveloper: 'Full Stack Developer',
    dbAdminAndDev: 'Database Admin & Developer',
    founderAndDeveloperTitle: 'Founder & Developer',

    common: {
        present: 'Present',
        viewDetails: 'View Details',
    },

    nav: {
        home: 'Home',
        timeline: 'Timeline',
        projects: 'Projects',
        cv: 'Resume',
        switchTo: 'Switch to French',
    },

    cv: {
        download: 'Download as PDF',
        downloadHint: 'Opens the print dialog, choose "Save as PDF" as the destination.',
        backToSite: 'Back to portfolio',
        inkSaverHint: 'Pick the light version (no dark band or photo) to save ink when printing on paper.',
        ecoVersion: 'Ink-saver',
        availableForWork: 'Available for a permanent role',
        present: 'Present',
        sections: {
            profile: 'Profile',
            experience: 'Work experience',
            education: 'Education',
            skills: 'Skills',
            languages: 'Languages',
            certifications: 'Diplomas & certifications',
            interests: 'Interests',
        },
        certs: {
            bnssa: 'BNSSA, water safety & rescue diploma',
            pse1: 'PSE1, first aid (team, level 1)',
        },
        interests: 'Coding · Sports · Travel · Music · DIY · Digital culture',
        summary: 'IT engineer with {years} years of experience, building full-stack web and mobile applications, from the database to deployment. A dual engineer-and-founder profile, comfortable integrating AI into products. Looking for a permanent role (CDI).',
        permis: 'Driving licence (cat. B)',
        oneLiner: 'IT Engineer',
        exp: {
            davidServices: 'Designed and shipped several mobile apps on the App Store and Google Play ("Un Jour en France", "Puffless", "WakeVerse"): React Native apps, serverless backends, in-app subscriptions, gamification and AI.',
            ateme: 'Full-stack development (Vue, Node, Express, GraphQL) and integration (Docker, Kubernetes) within a Scrum team; code reviews, testing and performance optimisation.',
            naval: 'Administration and operational maintenance of the Sage X3 software (level 1-3 support), data extraction and migration to eBusiness Suite R12, SQL automation.',
            fives: 'Software development (C#, PL/SQL), tooling integration and configuration, user support and training.',
            ge: 'Built paperless applications (C#, WPF) and their underlying databases, working directly with end users in an agile setup.',
            breizhcard: 'Full-stack development (Nuxt, Vue, Node, MongoDB, Stripe) of the connected business-card SaaS platform (NFC + QR code), from product to deployment.',
        },
    },

    home: {
        viewJourney: 'View My Journey',
        exploreProjects: 'Explore Projects',
        techTitle: 'Technologies I work with',
    },

    about: {
        title: 'About',
        p1: 'I\'m a {age}-year-old IT engineer who has been building full-stack web and mobile applications for {years} years, from the database to the interface, all the way to deployment.',
        p2: 'After starting out on a sandwich course at General Electric, then taking on missions at Fives Syleps, Naval Group and Ateme, I decided in late 2024 to focus on my own projects. I set up my own company (David Services) and shipped several mobile apps: "Un Jour en France" on the App Store and Google Play, then "Puffless" and "WakeVerse" on the App Store, while volunteering on the Breizhcard platform.',
        p3: 'I also love working hand in hand with AI: Claude and ChatGPT have become real daily accelerators, and I integrate AI directly into my products. "Un Jour en France", for instance, features AI-generated audio narration.',
        p4: 'I\'m now looking for a permanent role (CDI) where I can put this dual profile (an engineer\'s technical solidity and a founder\'s autonomy) to work for a team and a product that matter.',
    },

    skills: {
        title: 'Skills',
        subtitle: 'The technologies and know-how I rely on every day',
        groups: {
            languages: 'Languages',
            frontend: 'Front-end',
            backend: 'Back-end',
            databases: 'Databases',
            devops: 'DevOps & tools',
            testing: 'Testing & methodology',
            ai: 'AI & Prompt engineering',
        },
        languagesTitle: 'Spoken languages',
        spoken: {
            french: 'French',
            frenchLevel: 'Native',
            english: 'English',
            englishLevel: 'Fluent (C1)',
            spanish: 'Spanish',
            spanishLevel: 'Intermediate',
        },
    },

    contact: {
        title: 'Let\'s work together',
        subtitle: 'Open to a permanent role (CDI) · Saint-Nazaire & remote. Got a project, an opening, or just want to chat?',
        emailCta: 'Email me',
        linkedinCta: 'LinkedIn',
    },

    footer: {
        tagline: 'IT engineer passionate about building scalable and maintainable web and mobile applications. Always eager to learn new technologies and solve complex problems.',
        quickLinks: 'Quick Links',
        timeline: 'Professional Timeline',
        projects: 'My Projects',
        featuredUjef: 'Featured: Un Jour en France',
        connect: 'Connect With Me',
        location: 'Saint-Nazaire, France',
        copyright: '© {year} Axel David. Built with Vue.js & Tailwind CSS.',
        legal: 'Legal notice',
    },

    legal: {
        title: 'Legal notice',
        subtitle: 'Information about the publisher of this website.',
        publisher: 'Site publisher',
        publisherValue: 'DAVID SERVICES, sole proprietorship owned by Axel David',
        siren: 'SIREN',
        siret: 'SIRET',
        headOffice: 'Registered office',
        headOfficeValue: 'Saint-Nazaire, France',
        contact: 'Contact',
        apps: 'Published apps',
    },

    timeline: {
        title: 'Professional Timeline',
        subtitle: 'My journey from student to today: experience, education, and continuous growth',
        techStack: 'Tech Stack',
        concurrent: '{count} in parallel',
    },

    expTypes: {
        education: 'Education',
        volunteer: 'Volunteer',
        apprenticeship: 'Apprenticeship',
        freelance: 'Freelance',
        professional: 'Professional',
    },

    modal: {
        description: 'Description',
        technologies: 'Technologies Used',
    },

    projects: {
        title: 'My Projects',
        subtitle: 'A collection of projects showcasing different technologies and problem-solving approaches',
        featured: 'Featured',
        featuredSuffix: 'Projects',
        other: 'Other Projects',
        website: 'Website',
        appStore: 'App Store',
        playStore: 'Google Play',
        badgeMobileIos: 'Mobile app · iOS',
        badgeMobileCrossPlatform: 'Mobile app · iOS & Android',
        badgePlatform: 'Full-stack platform',
        breizhcardDescription: 'SaaS platform for connected wooden business cards (NFC + QR code): product design, full-stack development, e-commerce and deployment.',
    },

    detail: {
        back: 'Back to Projects',
        featuredProject: 'Featured Project',
        projectImpact: 'Project Impact',
        developmentTimeline: 'Development Timeline',
        overview: 'Project Overview',
        keyFeatures: 'Key Features',
        technicalChallenges: 'Technical Challenges',
        challenge: 'Challenge',
        solution: 'Solution',
        myRole: 'My Role',
        availability: 'Availability',
        premium: 'Premium',
        downloadAppStore: 'Download on the App Store',
        downloadPlayStore: 'Get it on Google Play',
        visitWebsite: 'Visit Website',
        visitLiveSite: 'Visit Live Site',
        viewSource: 'View Source Code',
        notFound: 'Project Not Found',
        notFoundDescription: "The project you're looking for doesn't exist.",
    },

    // Experience descriptions
    exp: {
        iut: `Physics · Chemistry · Mathematics · Computer Science · Electronics · Optics · Mechanics · Thermodynamics · Acoustics · Signal Processing · Metrology · Instrumentation · Industrial Data Processing · Quality · Safety · Environment`,
        utbm: `- Complex computer systems: analysis, specification, design, modeling, development, administration, and industrialization
- Project management and leadership · law · marketing · communication · finance`,
        ge: `Sandwich course with UTBM · REMOTE 💻
- Developed applications to eliminate paper usage (C#, WPF)
- Created databases related to the applications (SQL, MS SQL Server)
- Worked directly with end-users
- Used agile methodologies to structure projects
- Worked for 2 years within the quality department based in the factory
- Trained users
- Wrote structural documentation`,
        fives: `REMOTE 💻 · Via Astek
- Software development (C#, PL/SQL)
- Integration of tools
- Software configuration
- Support and training
- Activity reporting`,
        naval: `Via Astek
- Ensured the operational maintenance and stability of the Sage X3 software
- Provided comprehensive support for the Sage X3 software at Levels 1, 2, and 3
- Conducted data extractions from Sage X3 for migration to the eBusiness Suite R12
- Archived Sage X3 data using the MEMORY system
- Finalized documentation related to the archiving of production management data (GPAO)
- Coordinated and supervised the deletion of automatic scheduling plans
- Decommissioned servers utilized by GPAO NA Cherbourg
- Automated daily SQL data extractions using Visual Basic`,
        ateme: `REMOTE 💻 · Via Astek
- Development across the stack: frontend (VueJs), backend (NodeJs, Express, GraphQL), integration (Docker, Kubernetes)
- Participated in scrum ceremonies: sprint planning, daily standups, sprint reviews, retrospectives
- Code quality and best practices: code reviews, testing (Jest, pytest), documentation writing
- Problem solving and troubleshooting: debugging, performance optimization`,
        breizhcard: `SaaS platform for connected wooden business cards (NFC + QR code): product design, full-stack development, e-commerce and deployment.`,
        davidServices: `Founder of my own company (auto-entreprise) 🚀
- Designed, developed and published several cross-platform mobile apps, including "Un Jour en France" (live on the App Store and Google Play)
- End-to-end ownership: mobile app, serverless backend, in-app subscriptions, content pipeline and store releases
- Built a full freemium product with "Un Jour en France": daily content, quizzes, gamification (streaks, badges, monthly leaderboard) and AI audio narration
- Enforced Premium access and tamper-proof subscription status at the server level`,
    },

    // Project short descriptions
    proj: {
        portfolio: 'Portfolio website built with Vue.js and Tailwind CSS',
        streamingMultichat: 'Real-time chat overlay application that unifies Twitch, YouTube Live, and TikTok Live chat into a single interface',
        bulk: 'Party game where players interact with a common screen and use their phones to submit answers',
        optymo: 'Tool that splits daily radio recordings into sorted and timestamped conversations',
        bobRaoul: "A fun project providing visual and audio feedback whenever a cap is successfully thrown in Bob's head",
        ncg: 'Automation project that streamlines the process of sourcing, editing, and publishing royalty-free music content to YouTube',
        unJourEnFrance: 'Daily French culture mobile app: a historical or cultural event every day, with an interactive quiz, AI audio narration and gamification (streaks, badges, monthly leaderboard). Live on the App Store and Google Play.',
        puffless: 'Mobile app to help quit vaping: personalized quit plan, money-saved and health tracking, craving management and gamification to stay motivated. Live on the App Store.',
        wakeverse: 'Alarm clock that replaces morning doomscrolling with a Bible verse: reliable alarm even on silent, verses by theme, streaks and sharing, in English and French. Live on the App Store.',
    },
})
