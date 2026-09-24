# Portfolio - Axel David

A modern, professional portfolio website built with Vue.js 3 and TypeScript, showcasing my professional experience and personal projects.

## 🌐 Live Demo

Visit the portfolio at [axel-david.fr](https://axel-david.fr/)

## 🚀 Tech Stack

- **Vue 3** with Composition API and `<script setup>`
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Vue Router** for navigation
- **Vue i18n** for internationalization
- **TSParticles** for animated background
- **Vite** for build tooling

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── data/               # Experience and project data
├── locales/            # Internationalization files
├── pages/              # Route components
├── router/             # Vue Router configuration
└── types/              # TypeScript types
```

## 🎯 Features

- **Interactive Timeline**: Visual representation of professional experience
- **Project Showcase**: Detailed presentation of personal projects
- **Responsive Design**: Optimized for all device sizes
- **Particle Effects**: Engaging animated background
- **Clean Architecture**: Well-structured and maintainable code

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Build for production (also generates the CV PDFs)
pnpm build
```

## 📄 CV PDFs

The `/cv` page is also published as one-page A4 PDFs, in French and English, each in a colour and an ink-saver version:

|         | Colour                       | Ink-saver                        |
| ------- | ---------------------------- | -------------------------------- |
| French  | `/pdf/axel-david-cv.pdf`     | `/pdf/axel-david-cv-eco.pdf`     |
| English | `/pdf/axel-david-resume.pdf` | `/pdf/axel-david-resume-eco.pdf` |

- `pnpm build` prints them from the built `/cv` page with headless Chrome (Puppeteer) into `dist/pdf/`, next to a `manifest.json`. The build fails if a PDF doesn't fit on one page.
- `pnpm dev` serves the PDFs from the last build in `dist/pdf/`, so run `pnpm build` again to see content changes in them.
- `pnpm cv:pdf` writes personal copies that include the phone number from `.env.local` (`VITE_CV_PHONE`) to the gitignored `private/cv/` folder. Local builds read `.env.local` too, so their PDFs also include it: keep them local. Netlify builds never do.
- The CV shows an age and years of experience computed at build time. Every night, the `refresh-cv-pdfs` Netlify scheduled function checks whether either value changed since the PDFs were generated, and if so triggers a production build.

Netlify setup, done once: create a build hook for the production branch, then store its URL in a `CV_BUILD_HOOK_URL` environment variable available to Functions.

---

*This portfolio demonstrates clean code architecture and modern web development practices while presenting my professional journey and technical expertise.*
