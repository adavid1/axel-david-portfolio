export interface Experience {
    title: string
    description: string
    company?: string
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