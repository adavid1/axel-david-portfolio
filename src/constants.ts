export default Object.freeze({
    fullname: 'Axel David',
    // Start of professional experience: beginning of the General Electric
    // apprenticeship (employee status). Drives the "N years of experience" copy.
    careerStart: '01-09-2017',
    // Drives the dynamic age in the About copy.
    birthDate: '31-12-1997',
    // TODO: swap to contact@axel-david.fr once the domain mailbox is live
    email: 'axeldvi.pro@gmail.com',
    // Shown on the downloadable CV. Kept out of the committed source / public
    // bundle: set VITE_CV_PHONE in a local .env.local (gitignored). Empty here
    // means the CV simply omits the phone line.
    phone: import.meta.env.VITE_CV_PHONE ?? '',
    linkedin: 'https://www.linkedin.com/in/axeldavid44/',
    github: 'https://github.com/adavid1',
})
