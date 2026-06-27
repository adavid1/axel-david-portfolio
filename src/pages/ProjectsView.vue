<template>
  <div class="min-h-screen px-4 py-12">
    <div class="mx-auto max-w-7xl">
      <!-- Header -->
      <div class="mb-16 text-center">
        <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">
          {{ $t('projects.title') }}
        </h1>
        <p class="mx-auto max-w-3xl text-xl text-gray-300">
          {{ $t('projects.subtitle') }}
        </p>
      </div>

      <!-- Featured Projects -->
      <section class="mb-20">
        <h2 class="mb-8 text-2xl font-bold text-white">
          <span class="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">{{ $t('projects.featured') }}</span> {{ $t('projects.featuredSuffix') }}
        </h2>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article
            v-for="project in featuredProjects"
            :key="project.title"
            class="group relative flex flex-col overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-900/20 to-purple-900/20 p-6 transition-all duration-300 hover:border-violet-500/60 sm:p-8"
          >
            <div class="mb-4 flex items-start justify-between gap-4">
              <div>
                <span class="mb-2 inline-block rounded-full bg-violet-600/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
                  {{ $t(project.badge) }}
                </span>
                <h3 class="text-2xl font-bold text-white">{{ project.title }}</h3>
                <p class="text-sm font-medium text-violet-400">{{ project.year }}</p>
              </div>
              <div
                v-if="project.logo"
                class="app-icon flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl"
                :class="project.logoWrapClass"
              >
                <img
                  :src="project.logo"
                  :alt="`${project.title} logo`"
                  loading="lazy"
                  class="size-full"
                  :class="project.logoImgClass"
                />
              </div>
            </div>

            <p class="mb-6 grow text-gray-300">{{ $t(project.description) }}</p>

            <!-- Tech Stack -->
            <div class="mb-6 flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack.slice(0, 6)"
                :key="tech"
                class="rounded-full border border-violet-500/30 bg-violet-600/10 px-3 py-1 text-xs text-violet-200"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.stack.length > 6"
                class="rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1 text-xs text-gray-400"
              >
                +{{ project.stack.length - 6 }}
              </span>
            </div>

            <!-- Actions -->
            <div class="flex flex-wrap items-center gap-3">
              <RouterLink
                :to="project.detailRoute"
                class="inline-flex items-center rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
              >
                {{ $t('common.viewDetails') }}
                <svg class="ml-2 size-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </RouterLink>
              <a
                v-if="project.appStoreLink"
                :href="project.appStoreLink"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-violet-500/50 hover:text-white"
              >
                <svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25" />
                </svg>
                {{ $t('projects.appStore') }}
              </a>
              <a
                v-if="project.websiteLink"
                :href="project.websiteLink"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-violet-500/50 hover:text-white"
              >
                <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                </svg>
                {{ $t('projects.website') }}
              </a>
            </div>

            <div class="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/5 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </article>
        </div>
      </section>

      <!-- Other Projects -->
      <section>
        <h2 class="mb-8 text-2xl font-bold text-white">{{ $t('projects.other') }}</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="group relative flex flex-col rounded-2xl border border-gray-800/50 bg-gray-900/50 p-6 transition-all duration-300 hover:scale-105 hover:border-violet-500/50"
          >
            <!-- Project Header -->
            <div class="mb-4 flex items-start justify-between">
              <div class="flex-1">
                <h3 class="mb-2 text-xl font-semibold text-white">
                  {{ project.title }}
                </h3>
                <p class="text-sm font-medium text-violet-400">
                  {{ project.year }}
                </p>
              </div>
              <a
                v-if="project.gitHubLink"
                :href="project.gitHubLink"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-lg p-2 text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                aria-label="GitHub"
              >
                <svg class="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            <!-- Description -->
            <p class="mb-6 line-clamp-3 text-gray-300">
              {{ $t(project.description) }}
            </p>

            <!-- Tech Stack -->
            <div class="mb-6 mt-auto flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack.slice(0, 3)"
                :key="tech"
                class="rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1 text-xs text-gray-300"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.stack.length > 3"
                class="rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1 text-xs text-gray-400"
              >
                +{{ project.stack.length - 3 }}
              </span>
            </div>

            <!-- View Details Button -->
            <RouterLink
              :to="`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`"
              :class="`w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r ${getGradient(index)} text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 group-hover:shadow-lg`"
            >
              {{ $t('common.viewDetails') }}
              <svg class="ml-2 size-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </RouterLink>

            <!-- Hover Gradient Overlay -->
            <div class="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { portfolio, streamingMultichat, bulk, optymoRecordSplitter, bobRaoul, ncg, unJourEnFrance } from '@/data/projects'
import { breizhcardExp } from '@/data/experiences'

const featuredProjects = [
  {
    title: unJourEnFrance.title,
    badge: 'projects.badgeMobileIos',
    year: unJourEnFrance.year,
    description: unJourEnFrance.description,
    stack: unJourEnFrance.stack,
    detailRoute: '/projects/un-jour-en-france',
    appStoreLink: unJourEnFrance.appStoreLink,
    websiteLink: unJourEnFrance.websiteLink,
    logo: '/ujef-icon.png',
    logoWrapClass: '',
    logoImgClass: 'object-cover',
  },
  {
    title: 'Breizhcard',
    badge: 'projects.badgePlatform',
    year: '2023',
    description: 'projects.breizhcardDescription',
    stack: breizhcardExp.stack ?? [],
    detailRoute: '/projects/breizhcard',
    appStoreLink: undefined as string | undefined,
    websiteLink: breizhcardExp.companyLink,
    logo: '/breizhcard-logo.svg',
    logoWrapClass: 'app-icon--light bg-[#b4d383]',
    logoImgClass: 'object-contain p-2 brightness-0',
  },
]

const projects = [
  portfolio,
  streamingMultichat,
  bulk,
  optymoRecordSplitter,
  bobRaoul,
  ncg
]

const getGradient = (index: number) => {
  const gradients = [
    'from-violet-600 to-purple-700',
    'from-blue-600 to-indigo-700',
    'from-emerald-600 to-teal-700',
    'from-orange-600 to-red-700',
    'from-pink-600 to-rose-700',
    'from-cyan-600 to-blue-700'
  ]
  return gradients[index % gradients.length]
}
</script>
