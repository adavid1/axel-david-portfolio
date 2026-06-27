import type { Experience } from '@/types'

// Translatable fields (title, school, description) hold i18n keys, resolved
// reactively in the components via $t() — never at module load.

// Student's experience data
export const iutSchool: Experience = {
    title: "iutTitle",
    school: "iutSchoolName",
    schoolLink: "https://iut-sn.univ-nantes.fr/",
    location: "Saint-Nazaire, France",
    startDate: "01-09-2015",
    endDate: "31-08-2017",
    description: "exp.iut",
    type: "education",
    category: "technical",
}

export const utbmSchool: Experience = {
    title: "utbmSchoolTitle",
    school: "utbmSchoolName",
    schoolLink: "https://www.utbm.fr/english/",
    location: "Belfort, France",
    startDate: "01-09-2017",
    endDate: "31-08-2020",
    description: "exp.utbm",
    type: "education",
    category: "university",
}

// Professional experience
export const geApprenticeship: Experience = {
    title: "geApprenticeshipTitle",
    company: "GENERAL ELECTRIC",
    companyLink: "https://www.ge.com/",
    location: "Belfort, France",
    startDate: "01-09-2017",
    endDate: "31-08-2020",
    description: "exp.ge",
    stack: ["C#", "WPF", "SQL", "MS SQL Server"],
    type: "work",
    category: "apprenticeship",
}

export const fivesSylepsMission: Experience = {
    title: "fivesSylepsMissionTitle",
    company: "Fives Syleps",
    companyLink: "https://www.fivesgroup.com/",
    location: "Lorient, France",
    startDate: "01-12-2020",
    endDate: "31-07-2021",
    description: "exp.fives",
    stack: ["C#", "PL/SQL", "Oracle"],
    type: "work",
    category: "mission",
    consultingCompany: "Astek",
    consultingCompanyLink: "https://astekgroup.fr/?lang=en",
}

export const navalGroupMission: Experience = {
    title: "dbAdminAndDev",
    company: "NAVAL GROUP",
    companyLink: "https://www.naval-group.com/en/",
    location: "Brest, France",
    startDate: "01-08-2021",
    endDate: "31-08-2022",
    description: "exp.naval",
    stack: ["X3", "eBusiness Suite R12", "MEMORY system", "GPAO", "Visual Basic"],
    type: "work",
    category: "mission",
    consultingCompany: "Astek",
    consultingCompanyLink: "https://astekgroup.fr/?lang=en",
}

export const atemeMission: Experience = {
    title: "fullStackDeveloper",
    company: "Ateme",
    companyLink: "https://www.ateme.com/",
    location: "Rennes, France",
    startDate: "01-09-2022",
    endDate: "31-12-2024",
    description: "exp.ateme",
    stack: [
        "Vue",
        "Node",
        "Express",
        "GraphQL",
        "Docker",
        "Kubernetes",
        "Jest",
        "pytest",
    ],
    type: "work",
    category: "mission",
    consultingCompany: "Astek",
    consultingCompanyLink: "https://astekgroup.fr/?lang=en",
}

export const davidServicesExp: Experience = {
    title: "founderAndDeveloperTitle",
    company: "DAVID SERVICES",
    location: "Saint-Nazaire, France",
    startDate: "01-07-2025",
    endDate: null,
    description: "exp.davidServices",
    stack: [
        "React Native",
        "Expo",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "RevenueCat",
        "Zustand",
        "Jest",
    ],
    type: "work",
    category: "freelance",
}

export const breizhcardExp: Experience = {
    title: "fullStackDeveloper",
    company: "Breizhcard",
    companyLink: "https://www.breizhcard.com/",
    location: "Lorient, France",
    startDate: "01-07-2023",
    endDate: null,
    description: "exp.breizhcard",
    stack: [
        "Vue",
        "Node",
        "Express",
        "Nuxt",
        "Docker",
        "Tailwind",
        "Jest",
        "MongoDB",
    ],
    type: "work",
    category: "volunteer",
}
