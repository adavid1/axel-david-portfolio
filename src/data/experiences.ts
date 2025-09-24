import { t } from '../i18nHelper'

// Student's experience data
export const iutSchool = {
    title: "DUT Mesures Physiques",
    school: t("iutSchoolName"),
    schoolLink: "https://iut-sn.univ-nantes.fr/",
    location: "Saint-Nazaire, France",
    grade: t("twoYearsTechnicalDegree"),
    startDate: "01-09-2015",
    endDate: "31-08-2017",
    description:
    "Physics - Chemistry - Mathematics - Computer Science - Electronics - Optics - Mechanics - Thermodynamics - Acoustics - Signal Processing - Metrology - Instrumentation - Industrial Data Processing - Quality - Safety - Environment",
    type: "education" as const,
    category: "technical",
}

export const utbmSchool = {
    title: t("utbmSchoolTitle"),
    school: t("utbmSchoolName"),
    schoolLink: "https://www.utbm.fr/english/",
    location: "Belfort, France",
    grade: t("masterDegreeInEngineering"),
    startDate: "01-09-2017",
    endDate: "31-08-2020",
    description:
    "- Complex computer systems: analysis, specification, design, modeling, development, administration, and industrialization\n" +
    "- Project management and leadership - law - marketing - communication - finance",
    type: "education" as const,
    category: "university",
}

// Professional experience
export const geApprenticeship = {
    title: t("geApprenticeshipTitle"),
    company: "GENERAL ELECTRIC",
    companyLink: "https://www.ge.com/",
    location: "Belfort, France",
    contractType: t("apprenticeship"),
    startDate: "01-09-2017",
    endDate: "31-08-2020",
    description:
    "Sandwich course with UTBM | REMOTE 💻\n" +
    "- Developed applications to eliminate paper usage (C#, WPF)\n" +
    "- Created databases related to the applications (SQL, MS SQL Server)\n" +
    "- Worked directly with end-users\n" +
    "- Used agile methodologies to structure projects\n" +
    "- Worked for 2 years within the quality department based in the factory\n" +
    "- Trained users\n" +
    "- Wrote structural documentation",
    stack: ["C#", "WPF", "SQL", "MS SQL Server"],
    type: "work" as const,
    category: "apprenticeship",
}

// Restructured: Individual missions that reference Astek
export const fivesSylepsMission = {
    title: t("fivesSylepsMissionTitle"),
    company: "Fives Syleps",
    companyLink: "https://www.fivesgroup.com/",
    location: "Lorient, France",
    contractType: t("indirectContract"),
    startDate: "01-12-2020",
    endDate: "31-07-2021",
    description:
    "REMOTE 💻 | Via Astek\n" +
    "- Software development (C#, PL/SQL)\n" +
    "- Integration of tools\n" +
    "- Software configuration\n" +
    "- Support and training\n" +
    "- Activity reporting",
    stack: ["C#", "PL/SQL", "Oracle"],
    type: "work" as const,
    category: "mission",
    consultingCompany: "Astek",
    consultingCompanyLink: "https://astekgroup.fr/?lang=en",
}

export const navalGroupMission = {
    title: t("dbAdminAndDev"),
    company: "NAVAL GROUP",
    companyLink: "https://www.naval-group.com/en/",
    location: "Brest, France",
    contractType: t("indirectContract"),
    startDate: "01-08-2021",
    endDate: "31-08-2022",
    description:
    "Via Astek\n" +
    "- Ensured the operational maintenance and stability of the X3 software\n" +
    "- Provided comprehensive support for the X3 software at Levels 1, 2, and 3\n" +
    "- Conducted data extractions from X3 for migration to the eBusiness Suite R12\n" +
    "- Archived X3 data using the MEMORY system\n" +
    "- Finalized documentation related to the archiving of production management data (GPAO)\n" +
    "- Coordinated and supervised the deletion of automatic scheduling plans\n" +
    "- Decommissioned servers utilized by GPAO NA Cherbourg\n" +
    "- Automated daily SQL data extractions using Visual Basic",
    stack: ["X3", "eBusiness Suite R12", "MEMORY system", "GPAO", "Visual Basic"],
    type: "work" as const,
    category: "mission",
    consultingCompany: "Astek",
    consultingCompanyLink: "https://astekgroup.fr/?lang=en",
}

export const atemeMission = {
    title: t("fullStackDeveloper"),
    company: "Ateme",
    companyLink: "https://www.ateme.com/",
    location: "Rennes, France",
    contractType: t("indirectContract"),
    startDate: "01-09-2022",
    endDate: "31-12-2024",
    description:
    "REMOTE 💻 | Via Astek\n" +
    "- Development across the stack: frontend (VueJs), backend (NodeJs, Express, GraphQL), integration (Docker, Kubernetes)\n" +
    "- Participate in scrum ceremonies: sprint planning, daily standups, sprint reviews, retrospectives\n" +
    "- Code quality and best practices: code reviews, testing (Jest, pytest), documentation writing\n" +
    "- Problem solving and troubleshooting: debugging, performance optimization",
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
    type: "work" as const,
    category: "mission",
    consultingCompany: "Astek",
    consultingCompanyLink: "https://astekgroup.fr/?lang=en",
}

export const breizhcardExp = {
    title: t("fullStackDeveloper"),
    company: "Breizhcard",
    companyLink: "https://www.breizhcard.com/",
    location: "Lorient, France",
    contractType: t("volunteer"),
    startDate: "01-07-2023",
    endDate: null,
    description: "Digital loyalty card platform for Brittany businesses - Full ownership of product design, development, and deployment",
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
    type: "work" as const,
    category: "volunteer",
}