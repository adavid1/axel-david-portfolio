// Deep content for the project detail pages (kept separate to keep the main
// locale file readable). Merged into the `en` messages.
export default {
    projDetail: {
        portfolio: {
            overview: `This portfolio website represents a modern approach to personal branding and professional presentation. Built with Vue.js 3 and TypeScript, it showcases clean architecture and contemporary web development practices.

The site features a responsive design that works seamlessly across all devices, with smooth animations and particle effects that create an engaging user experience without compromising performance. The codebase demonstrates best practices in component architecture, type safety, and maintainable code structure.`,
            features: [
                { title: 'Modern Tech Stack', description: 'Built with Vue.js 3, TypeScript, and Tailwind CSS for optimal performance and maintainability' },
                { title: 'Responsive Design', description: 'Fully responsive layout that adapts beautifully to desktop, tablet, and mobile devices' },
                { title: 'Interactive Elements', description: 'Particle animations and smooth transitions create an engaging user experience' },
                { title: 'Clean Architecture', description: 'Well-structured codebase with reusable components and clear separation of concerns' },
            ],
            challenges: [
                { title: 'Performance Optimization', problem: 'Balancing visual appeal with fast loading times and smooth animations', solution: 'Implemented lazy loading, optimized particle systems, and efficient CSS animations' },
                { title: 'Cross-Device Compatibility', problem: 'Ensuring a consistent experience across different screen sizes and devices', solution: 'Utilized Tailwind CSS responsive utilities and thorough testing across multiple devices' },
            ],
        },
        streamingMultichat: {
            overview: `Streaming Multichat is a real-time chat overlay application designed for content creators who stream on multiple platforms simultaneously. The application unifies chat messages from Twitch, YouTube Live, and TikTok Live into a single, customizable interface.

This project addresses a common pain point for streamers who want to engage with their audience across multiple platforms without constantly switching between different chat windows. The application features real-time message synchronization, customizable styling, and overlay capabilities.`,
            features: [
                { title: 'Multi-Platform Integration', description: 'Connects to Twitch, YouTube Live, and TikTok Live chat APIs simultaneously' },
                { title: 'Real-Time Synchronization', description: 'WebSocket-based architecture ensures instant message delivery across all platforms' },
                { title: 'Customizable Overlay', description: 'Streamers can customize the appearance, position, and behavior of the chat overlay' },
                { title: 'Message Filtering', description: 'Advanced filtering options to manage spam and inappropriate content' },
            ],
            challenges: [
                { title: 'API Rate Limiting', problem: 'Different platforms have varying rate limits and API restrictions', solution: 'Implemented intelligent queuing and caching mechanisms to optimize API usage' },
                { title: 'Real-Time Performance', problem: 'Maintaining smooth performance during high-traffic streams with hundreds of messages per minute', solution: 'Optimized WebSocket handling and implemented message batching for better performance' },
            ],
        },
        bulk: {
            overview: `Bulk is an interactive party game platform where players use their mobile devices to participate in various mini-games displayed on a shared screen. The game supports multiple simultaneous players and features a variety of question-based and creative challenges.

The platform consists of a main display application built with Angular and a mobile companion app created with Ionic. Players join games by scanning QR codes or entering room codes, creating a seamless party game experience that leverages the devices everyone already has in their pockets.`,
            features: [
                { title: 'Multi-Device Gameplay', description: 'Players use their smartphones as controllers while viewing the main game on a shared screen' },
                { title: 'Real-Time Synchronization', description: 'Instant response collection and display using WebSocket technology' },
                { title: 'Variety of Game Types', description: 'Multiple game modes including trivia, creative challenges, and voting games' },
                { title: 'Easy Room Management', description: 'Simple game creation with QR code joining and room code alternatives' },
            ],
            challenges: [
                { title: 'Cross-Platform Mobile Support', problem: 'Ensuring a consistent experience across iOS and Android devices', solution: 'Used the Ionic framework for hybrid app development with platform-specific optimizations' },
                { title: 'Real-Time State Management', problem: 'Keeping game state synchronized across multiple devices and the main display', solution: 'Implemented a robust state management system with WebSocket communication and conflict resolution' },
            ],
        },
        optymoRecordSplitter: {
            overview: `The Optymo Record Splitter is a specialized tool designed to process daily radio recordings from the Optymo bus network in Belfort, France. The application automatically splits long audio recordings into individual conversations based on silence detection and timestamps.

This tool was created to help radio operators efficiently archive and review communications. The software can process hours of continuous recording and intelligently separate different conversations, making it much easier to locate specific communications or incidents for review or compliance purposes.`,
            features: [
                { title: 'Automatic Audio Segmentation', description: 'Intelligently splits audio files based on silence detection and conversation patterns' },
                { title: 'Timestamp Generation', description: 'Automatically generates accurate timestamps for each conversation segment' },
                { title: 'Batch Processing', description: 'Processes multiple audio files simultaneously with progress tracking' },
                { title: 'Quality Control', description: 'Built-in validation to ensure no conversations are lost during processing' },
            ],
            challenges: [
                { title: 'Audio Processing Performance', problem: 'Processing large audio files efficiently without consuming excessive system resources', solution: 'Implemented streaming audio processing with configurable buffer sizes for optimal performance' },
                { title: 'Accurate Silence Detection', problem: 'Distinguishing between natural pauses and actual conversation breaks in noisy radio environments', solution: 'Developed adaptive algorithms that account for background noise and radio static' },
            ],
        },
        bobRaoul: {
            overview: `Bob Raoul is a fun hardware project that combines physical gaming with digital feedback. The project features a physical target (Bob's head) where players attempt to throw bottle caps or similar small objects. When a successful hit is detected, the system provides both visual and audio feedback.

Built using a Raspberry Pi and GPIO sensors, this project demonstrates the integration of hardware sensors with software applications. The system includes LED animations, sound effects, and score tracking, making it an entertaining addition to any office or recreational space.`,
            features: [
                { title: 'Physical Target Detection', description: 'GPIO sensors detect when objects successfully hit the target' },
                { title: 'Audiovisual Feedback', description: 'LED animations and sound effects provide immediate feedback for successful hits' },
                { title: 'Score Tracking', description: 'Keeps track of successful hits and displays statistics' },
                { title: 'Raspberry Pi Integration', description: 'Efficient use of Raspberry Pi GPIO pins and Python libraries' },
            ],
            challenges: [
                { title: 'Sensor Calibration', problem: 'Ensuring accurate detection while avoiding false positives from vibrations or environmental factors', solution: 'Implemented debouncing algorithms and calibration routines for optimal sensor sensitivity' },
                { title: 'Hardware Reliability', problem: 'Creating a robust system that can withstand repeated impacts and continuous operation', solution: 'Used industrial-grade sensors and protective housings to ensure long-term reliability' },
            ],
        },
        noCopyrightGang: {
            overview: `No Copyright Gang (NCG) is an automation project that streamlines the entire workflow of sourcing, editing, and publishing royalty-free music content to YouTube. The system automatically discovers new music from various royalty-free sources, downloads tracks, applies basic editing, and uploads them to YouTube with appropriate metadata.

This project demonstrates advanced automation capabilities, including web scraping, audio processing, and YouTube API integration. The system was designed to operate autonomously, requiring minimal manual intervention while maintaining high-quality output standards.`,
            features: [
                { title: 'Automated Content Discovery', description: 'Automatically searches and identifies new royalty-free music from multiple sources' },
                { title: 'Audio Processing Pipeline', description: 'Applies consistent audio processing, normalization, and format conversion' },
                { title: 'YouTube Integration', description: 'Automated uploading with proper titles, descriptions, and tags using the YouTube API' },
                { title: 'Quality Control', description: 'Built-in checks to ensure audio quality and copyright compliance' },
            ],
            challenges: [
                { title: 'Copyright Verification', problem: 'Ensuring all processed music is truly royalty-free and safe for YouTube monetization', solution: 'Implemented multiple verification layers and database tracking of source licensing' },
                { title: 'YouTube API Limitations', problem: "Working within YouTube's API rate limits and upload restrictions", solution: 'Developed intelligent queuing and retry mechanisms to optimize upload success rates' },
            ],
        },
    },

    breizhcard: {
        description: 'SaaS platform that turns a wooden business card (NFC + QR code) into a fully customizable digital contact page, shareable in a single scan',
        year: '2023 - Present',
        overview: `Breizhcard is a SaaS platform that turns a physical wooden business card — fitted with an NFC chip and a QR code — into a fully customizable digital contact page. On scan, the recipient lands on a personal page designed by the cardholder (contact details, links, social networks, logo, banner, colors) and can save the contact to their phone instantly.

It's an alternative to the paper business card: always up to date (no reprinting), reusable, cheaper and more eco-friendly. Several wood types are offered, with single-unit or volume sales and a premium subscription (Breizhcard+) that unlocks advanced customization.

As the sole developer on the project, I designed and built 100% of the technical side: web app (Nuxt / Vue frontend, Node / Express backend), e-commerce and payments, data hosting and infrastructure, and the CI/CD pipeline. Business leadership and commercial development are handled by the CEO, Guillaume Jaecques.`,
        impact: {
            architectureValue: '3 repos',
            architecture: 'Decoupled front / back / infra architecture',
            languagesValue: 'FR / EN',
            languages: 'Fully bilingual application',
            pipelineValue: 'CI/CD',
            pipeline: 'Automated lint, tests, build, release and deploy',
        },
        roles: [
            'Product design & UX',
            'Full-stack development (Nuxt / Node)',
            'E-commerce & payments (Stripe)',
            'Infrastructure & DevOps (Docker, CI/CD)',
        ],
        features: [
            { title: 'Contact page editor', description: 'Customization of the design (colors, logo, banner, social icons) and content (contact details, links), with drag-and-drop reordering' },
            { title: 'NFC + QR code sharing', description: 'Instant access to the page on scan and direct saving of the contact into the recipient\'s phone' },
            { title: 'E-commerce & volume pricing', description: 'Volume-based pricing, cart, secure payment via Stripe and automatic invoice generation' },
            { title: 'Premium subscription (Breizhcard+)', description: 'Subscription management, renewals and a billing area to unlock advanced customization' },
            { title: 'Customer area & admin back-office', description: 'Customers manage their cards, profile and subscriptions; the team manages users, orders and demo requests' },
            { title: 'Bilingual FR / EN app', description: 'Full internationalization of the interface across the whole application' },
        ],
        challenges: [
            { title: 'Decoupled architecture', problem: 'Keeping consistency and autonomy across frontend, backend and infrastructure split into three separate repositories', solution: 'Clear API contracts, end-to-end TypeScript and strict naming conventions, with a codebase written entirely in English' },
            { title: 'Full CI/CD pipeline', problem: 'Shipping with confidence across separate production and development environments', solution: 'A GitHub Actions pipeline chaining lint, typecheck, tests (Vitest, Playwright), build, security audit, versioned release (Changesets) and automated deployment' },
            { title: 'Reliable payments & subscriptions', problem: 'Handling volume sales, invoicing and premium renewals without storing any banking data', solution: 'Stripe integration for payments and subscriptions, invoice generation and no banking data ever stored' },
            { title: 'GDPR compliance by design', problem: 'Respecting user privacy while still measuring product usage', solution: 'Self-hosted, cookie-free analytics, data minimization and GDPR compliance built into the design' },
        ],
        timeline: [
            { phase: 'Concept & scoping', duration: '2023', description: 'Defining the product, the business model (unit/volume sales, premium) and the contact page experience' },
            { phase: 'Web platform', duration: '2023 - 2024', description: 'Nuxt / Vue frontend and Node / Express backend: page editor, customer area and admin back-office' },
            { phase: 'E-commerce & subscriptions', duration: '2024', description: 'Stripe integration: single-unit and volume sales, invoicing and the Breizhcard+ premium subscription' },
            { phase: 'Infrastructure & CI/CD', duration: '2024', description: 'Docker containerization, Nginx reverse proxy, separate environments and automated deployment via GitHub Actions' },
            { phase: 'Continuous improvements', duration: '2024 - Present', description: 'Advanced customization, FR / EN internationalization and stronger GDPR compliance' },
        ],
    },

    ujef: {
        description: 'A daily dose of French history and culture: one event a day, an interactive quiz, AI audio narration and a gamified experience.',
        overview: `Un Jour en France turns French culture into a daily ritual. Every day, users discover a notable historical or cultural event, test their knowledge with a short quiz, and progress through time thanks to an engagement system inspired by the best learning apps.

The product follows a generous freemium model — free daily content for everyone, enriched with a Premium subscription (full articles, AI audio narration, archives and streak protection) for enthusiasts.

I designed, built and shipped the whole thing end to end as the founder of my company (DAVID SERVICES): the mobile app, the serverless backend, the in-app subscription system, the content pipeline, and the store releases.`,
        status: [
            { label: 'iOS', value: 'Live on the App Store' },
            { label: 'Android', value: 'Closed testing — Google Play (summer 2026)' },
            { label: 'Model', value: 'Freemium + Premium (7-day free trial)' },
            { label: 'Language', value: 'French' },
        ],
        roles: [
            'Product design & UX',
            'Mobile app (React Native / Expo)',
            'Serverless backend & data security',
            'In-app subscriptions & payments',
            'Content & audio pipeline',
            'CI/CD & store releases',
        ],
        features: [
            { title: 'Daily French event', description: 'A notable historical or cultural French event surfaced every day, with a concise summary to read in minutes.' },
            { title: 'Interactive daily quiz', description: 'A short 3-question quiz with scoring and points to test and reinforce what you just learned.' },
            { title: 'Gamification & retention', description: 'Daily streaks with protection shields, unlockable badges and a monthly leaderboard recomputed server-side.' },
            { title: 'Frictionless guest mode', description: 'Play immediately without an account — read, take the quiz and progress, then keep all your progress when you sign up.' },
            { title: 'AI audio narration', description: 'Every event narrated through AI text-to-speech, so you can listen to the day’s story hands-free.' },
            { title: 'In-depth content', description: 'Full 800–1,200 word articles, detailed quiz answer explanations, exclusive anecdotes and access to the full archive.' },
        ],
        challenges: [
            { title: 'Cross-platform iOS development without a Mac', description: 'The entire iOS chain — build, signing and App Store publication — is handled from Windows through cloud builds, with on-device testing via a dedicated development client.' },
            { title: 'Server-side protection of Premium content', description: 'Paid content is never exposed to free users, even through a direct API call: isolation is guaranteed by database-level security rules, not just by what the UI chooses to render.' },
            { title: 'Tamper-proof subscription status', description: 'Going Premium can only be triggered through a trusted server channel; any attempt to flip the flag from the app is rejected. The server is the single source of truth.' },
            { title: 'A complete gamification system', description: 'Daily streaks with protection shields, conditional badges and a monthly leaderboard recomputed on the server — logic designed end to end for retention and fairness.' },
        ],
    },
}
