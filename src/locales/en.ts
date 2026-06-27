import details from './details.en'

export default Object.freeze({
    ...details,

    // Profile / hero
    title: 'Full Stack Developer',
    intro: 'Full Stack Developer with 8 years of experience, passionate about building scalable and maintainable web applications.',
    now: 'Today',

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
        switchTo: 'Switch to French',
    },

    home: {
        viewJourney: 'View My Journey',
        exploreProjects: 'Explore Projects',
        techTitle: 'Technologies I work with',
    },

    about: {
        title: 'About',
        p1: 'I\'m a 28-year-old IT engineer who has been building full-stack web and mobile applications for 8 years — from the database to the interface, all the way to deployment.',
        p2: 'After starting out on a sandwich course at General Electric, then taking on missions at Fives Syleps, Naval Group and Ateme, I decided in late 2024 to go travelling. Rather than just a break, I turned it into a creative period: while on the road I set up my own company and shipped "Un Jour en France" on the App Store, while volunteering on the Breizhcard platform.',
        p3: 'I also love working hand in hand with AI: Claude and ChatGPT have become real daily accelerators, and I integrate AI directly into my products — "Un Jour en France", for instance, features AI-generated audio narration.',
        p4: 'Now back in France, I\'m looking for a permanent role (CDI) where I can put this dual profile — an engineer\'s technical solidity and a founder\'s autonomy — to work for a team and a product that matter.',
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
        tagline: 'Full Stack Developer passionate about building scalable and maintainable web applications. Always eager to learn new technologies and solve complex problems.',
        quickLinks: 'Quick Links',
        timeline: 'Professional Timeline',
        projects: 'My Projects',
        featuredUjef: 'Featured: Un Jour en France',
        connect: 'Connect With Me',
        location: 'Saint-Nazaire, France',
        copyright: '© {year} Axel David. Built with Vue.js & Tailwind CSS.',
    },

    timeline: {
        title: 'Professional Timeline',
        subtitle: 'My journey from student to full-stack developer — experience, education, and continuous growth',
        techStack: 'Tech Stack',
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
        badgeMobileIos: 'Mobile app · iOS',
        badgePlatform: 'Full-stack platform',
        breizhcardDescription: 'Digital loyalty card platform for Brittany businesses — full ownership of product design, development and deployment.',
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
        visitWebsite: 'Visit Website',
        visitLiveSite: 'Visit Live Site',
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
- Ensured the operational maintenance and stability of the X3 software
- Provided comprehensive support for the X3 software at Levels 1, 2, and 3
- Conducted data extractions from X3 for migration to the eBusiness Suite R12
- Archived X3 data using the MEMORY system
- Finalized documentation related to the archiving of production management data (GPAO)
- Coordinated and supervised the deletion of automatic scheduling plans
- Decommissioned servers utilized by GPAO NA Cherbourg
- Automated daily SQL data extractions using Visual Basic`,
        ateme: `REMOTE 💻 · Via Astek
- Development across the stack: frontend (VueJs), backend (NodeJs, Express, GraphQL), integration (Docker, Kubernetes)
- Participated in scrum ceremonies: sprint planning, daily standups, sprint reviews, retrospectives
- Code quality and best practices: code reviews, testing (Jest, pytest), documentation writing
- Problem solving and troubleshooting: debugging, performance optimization`,
        breizhcard: `Digital loyalty card platform for Brittany businesses — full ownership of product design, development, and deployment.`,
        davidServices: `Founder of my own company (auto-entreprise) 🚀
- Designed, developed and published "Un Jour en France", a cross-platform mobile app (iOS live on the App Store, Android in closed testing)
- End-to-end ownership: mobile app, serverless backend, in-app subscriptions, content pipeline and store releases
- Built a full freemium product: daily content, quizzes, gamification (streaks, badges, monthly leaderboard) and AI audio narration
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
        unJourEnFrance: 'Daily French culture mobile app — a historical or cultural event every day, with an interactive quiz, AI audio narration and gamification (streaks, badges, monthly leaderboard). Live on the App Store.',
    },
})
