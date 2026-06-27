export interface Project {
    title: string
    description: string
    stack: string[]
    year: string
    gitHubLink?: string
    websiteLink?: string
    appStoreLink?: string
    playStoreLink?: string
}

export interface Experience {
    /** i18n key, resolved with $t() in components */
    title: string
    /** i18n key, resolved with $t() in components */
    description: string
    company?: string
    /** i18n key, resolved with $t() in components */
    school?: string
    companyLink?: string
    schoolLink?: string
    startDate: string
    endDate?: string | null
    location?: string
    stack?: string[]
    type: 'work' | 'education'
    category?: string
    consultingCompany?: string
    consultingCompanyLink?: string
  }