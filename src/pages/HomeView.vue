<script setup lang="ts">
import { RouterLink } from 'vue-router'
import constants from '@/constants.ts'
import { skillGroups } from '@/data/skills'
</script>

<template>
  <div class="px-4">
    <!-- Hero Section -->
    <section class="flex min-h-screen items-center justify-center">
      <div class="w-full max-w-4xl text-center">
        <div class="space-y-8">
          <!-- Profile Image -->
          <img
            src="/profile.jpg"
            :alt="constants.fullname"
            class="mx-auto size-32 rounded-full object-cover shadow-2xl ring-4 ring-violet-500/40"
          >


          <!-- Name and Title -->
          <div class="space-y-4">
            <h1 class="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
              {{ constants.fullname }}
            </h1>
            <h2 class="text-xl font-medium text-violet-300 md:text-2xl">
              {{ $t('title') }}
            </h2>
          </div>

          <!-- Description -->
          <div class="mx-auto max-w-2xl">
            <p class="text-lg leading-relaxed text-gray-300">
              {{ $t('intro') }}
            </p>
          </div>

          <!-- Call to Action Buttons -->
          <div class="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
            <RouterLink
              to="/timeline"
              class="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/25"
            >
              {{ $t('home.viewJourney') }}
              <svg class="size-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </RouterLink>
            <RouterLink
              to="/projects"
              class="rounded-xl border-2 border-violet-400 px-8 py-3 font-semibold text-violet-300 transition-all duration-300 hover:bg-violet-400 hover:text-black"
            >
              {{ $t('home.exploreProjects') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="mx-auto max-w-3xl scroll-mt-24 py-20">
      <h2 class="mb-8 text-3xl font-bold text-white md:text-4xl">
        <span class="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">{{ $t('about.title') }}</span>
      </h2>
      <div class="space-y-5 text-lg leading-relaxed text-gray-300">
        <p>{{ $t('about.p1') }}</p>
        <p>{{ $t('about.p2') }}</p>
        <p>{{ $t('about.p3') }}</p>
        <p>{{ $t('about.p4') }}</p>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="mx-auto max-w-5xl scroll-mt-24 py-20">
      <div class="mb-12 text-center">
        <h2 class="mb-3 text-3xl font-bold text-white md:text-4xl">
          <span class="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">{{ $t('skills.title') }}</span>
        </h2>
        <p class="text-gray-400">{{ $t('skills.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="group in skillGroups"
          :key="group.labelKey"
          class="rounded-2xl border border-gray-800/60 bg-gray-900/40 p-6 transition-all duration-300 hover:border-violet-500/40"
        >
          <h3 class="mb-4 text-lg font-semibold text-violet-300">{{ $t(group.labelKey) }}</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in group.items"
              :key="item"
              class="rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1 text-sm text-gray-300"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>

      <!-- Spoken languages -->
      <div class="mt-8 rounded-2xl border border-gray-800/60 bg-gray-900/40 p-6">
        <h3 class="mb-4 text-lg font-semibold text-violet-300">{{ $t('skills.languagesTitle') }}</h3>
        <div class="flex flex-wrap gap-x-10 gap-y-3">
          <div class="flex items-baseline gap-2">
            <span class="font-medium text-white">{{ $t('skills.spoken.french') }}</span>
            <span class="text-sm text-gray-400">{{ $t('skills.spoken.frenchLevel') }}</span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="font-medium text-white">{{ $t('skills.spoken.english') }}</span>
            <span class="text-sm text-gray-400">{{ $t('skills.spoken.englishLevel') }}</span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="font-medium text-white">{{ $t('skills.spoken.spanish') }}</span>
            <span class="text-sm text-gray-400">{{ $t('skills.spoken.spanishLevel') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="mx-auto max-w-3xl scroll-mt-24 py-20 text-center">
      <h2 class="mb-3 text-3xl font-bold text-white md:text-4xl">
        <span class="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">{{ $t('contact.title') }}</span>
      </h2>
      <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">{{ $t('contact.subtitle') }}</p>
      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          :href="`mailto:${constants.email}`"
          class="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/25"
        >
          <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {{ $t('contact.emailCta') }}
        </a>
        <a
          :href="constants.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-xl border-2 border-violet-400 px-8 py-3 font-semibold text-violet-300 transition-all duration-300 hover:bg-violet-400 hover:text-black"
        >
          {{ $t('contact.linkedinCta') }}
        </a>
      </div>
      <p class="mt-6 text-sm text-gray-500">{{ constants.email }}</p>
    </section>
  </div>
</template>
