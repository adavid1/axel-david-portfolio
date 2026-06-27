// Skill group labels hold i18n keys (resolved with $t() in the component).
// Tech names are language-neutral and stay as literal strings.

export interface SkillGroup {
    /** i18n key, resolved with $t() in the component */
    labelKey: string
    items: string[]
}

export const skillGroups: SkillGroup[] = [
    {
        labelKey: 'skills.groups.languages',
        items: ['TypeScript', 'JavaScript', 'C#', 'Python', 'SQL'],
    },
    {
        labelKey: 'skills.groups.frontend',
        items: ['Vue.js', 'Nuxt', 'React Native', 'Expo', 'Tailwind CSS'],
    },
    {
        labelKey: 'skills.groups.backend',
        items: ['Node.js', 'Express', 'NestJS', 'GraphQL', '.NET'],
    },
    {
        labelKey: 'skills.groups.databases',
        items: ['PostgreSQL', 'MongoDB', 'Oracle / PL-SQL', 'MS SQL Server', 'Supabase'],
    },
    {
        labelKey: 'skills.groups.devops',
        items: ['Docker', 'Kubernetes', 'Git', 'CI/CD'],
    },
    {
        labelKey: 'skills.groups.testing',
        items: ['Jest', 'pytest', 'Code reviews', 'Agile / Scrum'],
    },
    {
        labelKey: 'skills.groups.ai',
        items: ['Claude', 'ChatGPT', 'Prompt engineering', 'AI image generation', 'AI product integration'],
    },
]
