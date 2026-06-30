<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import constants from '@/constants'
import { skillGroups } from '@/data/skills'
import {
  iutSchool,
  utbmSchool,
  geApprenticeship,
  fivesSylepsMission,
  navalGroupMission,
  atemeMission,
  davidServicesExp,
  breizhcardExp,
} from '@/data/experiences'
import { formatDateRange, yearsSince } from '@/utils'

const { t, locale } = useI18n({ useScope: 'global' })

// Most-recent-first. Each entry pairs the shared Experience data with a
// CV-specific one-sentence summary (cv.exp.*) — short enough that the whole
// document still fits on a single A4 page.
const proExperiences = [
  { exp: davidServicesExp, summaryKey: 'cv.exp.davidServices' },
  { exp: atemeMission, summaryKey: 'cv.exp.ateme' },
  { exp: navalGroupMission, summaryKey: 'cv.exp.naval' },
  { exp: fivesSylepsMission, summaryKey: 'cv.exp.fives' },
  { exp: geApprenticeship, summaryKey: 'cv.exp.ge' },
  { exp: breizhcardExp, summaryKey: 'cv.exp.breizhcard' },
]
const education = [utbmSchool, iutSchool]

const years = computed(() => yearsSince(constants.careerStart))
const age = computed(() => yearsSince(constants.birthDate))

const dateRange = (start: string, end?: string | null) =>
  formatDateRange(start, end, locale.value, t('cv.present'))

const githubLabel = constants.github.replace(/^https?:\/\//, '').replace(/\/$/, '')

// French recruiters expect the national "06 …" format; keep the international
// form everywhere else (and always for the clickable tel: link).
const phoneHref = `tel:${constants.phone.replace(/\s/g, '')}`
const phoneDisplay = computed(() =>
  locale.value === 'fr' ? constants.phone.replace(/^\+33\s/, '0') : constants.phone
)

const certifications = computed(() => [t('cv.certs.bnssa'), t('cv.certs.pse1')])

const spokenLanguages = computed(() => [
  { name: t('skills.spoken.french'), level: t('skills.spoken.frenchLevel') },
  { name: t('skills.spoken.english'), level: t('skills.spoken.englishLevel') },
  { name: t('skills.spoken.spanish'), level: t('skills.spoken.spanishLevel') },
])

// Ink-saver mode: the colour version stays the default, but printing the dark
// full-height sidebar + photo eats a lot of toner, so this toggle swaps to a
// white sidebar with a thin rule and hides the photo for physical printing.
// Can be pre-activated via /cv?ink=1 (handy to bookmark the print version).
const inkSaver = ref(new URLSearchParams(window.location.search).get('ink') === '1')

// The sheet is a fixed 210mm (~794px) A4 document. On screens narrower than
// that (phones), scale it down so the whole CV fits the viewport instead of
// overflowing horizontally. Print resets to 1:1 (see @media print below).
const A4_WIDTH_PX = 794
const sheetScale = ref(1)
function updateSheetScale() {
  const horizontalPadding = 40 // cv-page px-4 (32) + a small safety margin
  sheetScale.value = Math.min(1, (window.innerWidth - horizontalPadding) / A4_WIDTH_PX)
}

function downloadCv() {
  window.print()
}

// Make the browser's "Save as PDF" suggest a clean filename, then restore it.
const baseTitle = document.title
const setPrintTitle = () => { document.title = `${constants.fullname} - ${t('nav.cv')}` }
const restoreTitle = () => { document.title = baseTitle }

onMounted(() => {
  updateSheetScale()
  window.addEventListener('resize', updateSheetScale)
  window.addEventListener('beforeprint', setPrintTitle)
  window.addEventListener('afterprint', restoreTitle)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSheetScale)
  window.removeEventListener('beforeprint', setPrintTitle)
  window.removeEventListener('afterprint', restoreTitle)
})
</script>

<template>
  <div class="cv-page flex flex-col items-center px-4 py-8 print:p-0">
    <!-- Toolbar (screen only) -->
    <div class="mb-6 flex w-full max-w-[210mm] flex-wrap items-center justify-between gap-3 print:hidden">
      <RouterLink
        to="/"
        class="flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
      >
        <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        {{ $t('cv.backToSite') }}
      </RouterLink>

      <div class="flex flex-wrap items-center justify-end gap-3">
        <!-- Ink-saver toggle: the switch state shows whether it is on. -->
        <button
          @click="inkSaver = !inkSaver"
          role="switch"
          :aria-checked="inkSaver"
          :title="$t('cv.inkSaverHint')"
          class="flex items-center gap-2 rounded-lg border border-gray-700/60 px-3 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
        >
          <span
            class="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-200"
            :class="inkSaver ? 'bg-violet-600' : 'bg-gray-600'"
          >
            <span
              class="inline-block size-4 rounded-full bg-white shadow transition-transform duration-200"
              :class="inkSaver ? 'translate-x-4' : 'translate-x-0.5'"
            ></span>
          </span>
          {{ $t('cv.ecoVersion') }}
        </button>

        <button
          @click="downloadCv"
          :title="$t('cv.downloadHint')"
          class="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:bg-violet-500"
        >
          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
          </svg>
          {{ $t('cv.download') }}
        </button>
      </div>
    </div>

    <!-- A4 sheet -->
    <article
      class="cv-sheet flex min-h-[297mm] w-[210mm] overflow-hidden bg-white text-gray-800 shadow-2xl print:shadow-none"
      :style="{ zoom: sheetScale }"
    >
      <!-- Sidebar -->
      <aside class="cv-sidebar flex w-[34%] flex-col gap-4 px-5 py-6" :class="{ 'cv-sidebar--light': inkSaver }">
        <!-- Photo (hidden in ink-saver mode to spare toner) -->
        <div v-if="!inkSaver" class="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Axel David"
            class="size-28 rounded-full object-cover ring-2 ring-white/25"
          />
        </div>

        <!-- Contact -->
        <ul class="space-y-1.5 text-[11px]">
          <li class="flex items-center gap-2">
            <svg class="cv-side-icon size-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span>Saint-Nazaire, France · {{ age }} {{ locale === 'fr' ? 'ans' : 'y.o.' }}</span>
          </li>
          <li v-if="constants.phone" class="flex items-center gap-2">
            <svg class="cv-side-icon size-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11 11 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <a :href="phoneHref" class="hover:underline">{{ phoneDisplay }}</a>
          </li>
          <li class="flex items-center gap-2">
            <svg class="cv-side-icon size-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <a :href="`mailto:${constants.email}`" class="break-all hover:underline">{{ constants.email }}</a>
          </li>
          <li class="flex items-center gap-2">
            <svg class="cv-side-icon size-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12" /></svg>
            <a :href="constants.github" target="_blank" rel="noopener noreferrer" class="break-all hover:underline">{{ githubLabel }}</a>
          </li>
          <li class="flex items-center gap-2">
            <svg class="cv-side-icon size-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13l1.6-4.5A2 2 0 016.5 7h11a2 2 0 011.9 1.5L21 13v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z" /><path stroke-linecap="round" stroke-linejoin="round" d="M7 16h.01M17 16h.01" /></svg>
            <span>{{ $t('cv.permis') }}</span>
          </li>
        </ul>

        <!-- Skills -->
        <div>
          <h2 class="cv-side-title">{{ $t('cv.sections.skills') }}</h2>
          <dl class="mt-2 space-y-1.5 text-[10px] leading-snug">
            <div v-for="group in skillGroups" :key="group.labelKey">
              <dt class="cv-side-strong font-semibold">{{ $t(group.labelKey) }}</dt>
              <dd class="cv-side-muted">{{ group.items.join(' · ') }}</dd>
            </div>
          </dl>
        </div>

        <!-- Languages -->
        <div>
          <h2 class="cv-side-title">{{ $t('cv.sections.languages') }}</h2>
          <ul class="mt-2 space-y-1 text-[11px]">
            <li v-for="lang in spokenLanguages" :key="lang.name">
              <span class="cv-side-strong font-semibold">{{ lang.name }}</span>
              <span class="cv-side-muted"> · {{ lang.level }}</span>
            </li>
          </ul>
        </div>

        <!-- Certifications -->
        <div>
          <h2 class="cv-side-title">{{ $t('cv.sections.certifications') }}</h2>
          <ul class="mt-2 space-y-1 text-[10.5px] leading-snug">
            <li v-for="cert in certifications" :key="cert">{{ cert }}</li>
          </ul>
        </div>

        <!-- Interests -->
        <div>
          <h2 class="cv-side-title">{{ $t('cv.sections.interests') }}</h2>
          <p class="cv-side-muted mt-2 text-[10.5px] leading-snug">{{ $t('cv.interests') }}</p>
        </div>
      </aside>

      <!-- Main column -->
      <div class="flex flex-1 flex-col px-7 py-8">
        <!-- Header -->
        <header class="border-b border-gray-200 pb-3">
          <h1 class="text-[30px] font-bold leading-tight tracking-tight text-gray-900">{{ constants.fullname }}</h1>
          <div class="mt-1.5 flex flex-wrap items-center justify-between gap-2">
            <p class="text-[15px] font-semibold uppercase tracking-wide text-slate-500">{{ $t('cv.oneLiner') }}</p>
            <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-300">
              {{ $t('cv.availableForWork') }}
            </span>
          </div>
        </header>

        <!-- Profile -->
        <section class="mt-4">
          <h2 class="cv-main-title">{{ $t('cv.sections.profile') }}</h2>
          <p class="mt-1.5 text-[12px] leading-relaxed text-gray-700">{{ $t('cv.summary', { years }) }}</p>
        </section>

        <!-- Experience -->
        <section class="mt-4">
          <h2 class="cv-main-title">{{ $t('cv.sections.experience') }}</h2>
          <div class="mt-2.5 space-y-3.5">
            <div v-for="{ exp, summaryKey } in proExperiences" :key="exp.company! + exp.startDate" class="cv-entry">
              <div class="flex items-baseline justify-between gap-3">
                <h3 class="text-[13px] font-bold text-gray-900">
                  {{ $t(exp.title) }}
                  <span class="text-slate-700">· {{ exp.company }}</span>
                  <span v-if="exp.consultingCompany" class="text-[11px] font-normal text-gray-500"> (via {{ exp.consultingCompany }})</span>
                  <span v-else-if="exp.category === 'volunteer'" class="text-[11px] font-normal text-gray-500"> ({{ $t('expTypes.volunteer') }})</span>
                </h3>
                <span class="shrink-0 text-[11px] font-medium text-gray-500">{{ dateRange(exp.startDate, exp.endDate) }}</span>
              </div>
              <p class="mt-1 text-[11.5px] leading-relaxed text-gray-600">{{ $t(summaryKey) }}</p>
              <p v-if="exp.stack && exp.stack.length" class="mt-1 text-[10.5px] italic text-gray-400">
                {{ exp.stack.join(' · ') }}
              </p>
            </div>
          </div>
        </section>

        <!-- Education -->
        <section class="mt-4">
          <h2 class="cv-main-title">{{ $t('cv.sections.education') }}</h2>
          <div class="mt-2.5 space-y-2.5">
            <div v-for="edu in education" :key="edu.school" class="flex items-baseline justify-between gap-3">
              <h3 class="text-[13px] text-gray-900">
                <span class="font-bold">{{ $t(edu.title) }}</span>
                <span class="text-gray-600"> · {{ $t(edu.school!) }}</span>
              </h3>
              <span class="shrink-0 text-[11px] font-medium text-gray-500">{{ dateRange(edu.startDate, edu.endDate) }}</span>
            </div>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>

<style scoped>
.cv-main-title {
  @apply text-[13px] font-bold uppercase tracking-wider text-slate-700;
  border-bottom: 2px solid theme('colors.slate.200');
  padding-bottom: 0.15rem;
}

.cv-side-title {
  @apply text-[12px] font-bold uppercase tracking-wider text-white;
  border-bottom: 1px solid theme('colors.slate.600');
  padding-bottom: 0.15rem;
}

/* Sidebar theming. Default = colour version (dark band, light text). */
.cv-sidebar {
  background-image: linear-gradient(to bottom, theme('colors.slate.800'), theme('colors.slate.900'));
  color: theme('colors.slate.300');
}
.cv-side-strong {
  color: #fff;
}
.cv-side-muted {
  color: theme('colors.slate.400');
}
.cv-side-icon {
  color: theme('colors.slate.400');
}

/* Ink-saver version: white sidebar, dark text, thin separating rule, no photo.
   Placed after the defaults so it wins on equal specificity. */
.cv-sidebar--light {
  background-image: none;
  background-color: #fff;
  color: theme('colors.gray.700');
  border-right: 1px solid theme('colors.gray.300');
}
.cv-sidebar--light .cv-side-title {
  color: theme('colors.gray.800');
  border-bottom-color: theme('colors.gray.300');
}
.cv-sidebar--light .cv-side-strong {
  color: theme('colors.gray.900');
}
.cv-sidebar--light .cv-side-muted,
.cv-sidebar--light .cv-side-icon {
  color: theme('colors.gray.500');
}

.cv-entry {
  break-inside: avoid;
}

@media print {
  :global(html),
  :global(body) {
    background: #fff !important;
  }

  .cv-page {
    background: #fff !important;
  }

  /* Force the sidebar gradient and other colours to print. */
  .cv-sheet,
  .cv-sidebar {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* Reset the mobile fit-to-width zoom so the sheet prints the full-bleed A4
     document at 1:1. */
  .cv-sheet {
    zoom: 1 !important;
  }

  @page {
    size: A4;
    margin: 0;
  }
}
</style>
