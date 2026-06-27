<template>
    <div class="min-h-screen px-4 py-12">
      <div class="mx-auto max-w-6xl">
        <!-- Back Button -->
        <div class="mb-8">
          <RouterLink
            to="/projects"
            class="inline-flex items-center text-violet-400 transition-colors duration-300 hover:text-violet-300"
          >
            <svg class="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {{ $t('detail.back') }}
          </RouterLink>
        </div>

        <!-- Hero Section -->
        <div class="mb-16 text-center">
          <div class="mb-6 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-600/20 px-4 py-2 text-sm text-violet-300">
            <svg class="mr-2 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {{ $t('detail.featuredProject') }}
          </div>
          <h1 class="mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            {{ title }}
          </h1>
          <p class="mx-auto mb-8 max-w-4xl text-2xl text-gray-300">
            {{ $t('breizhcard.description') }}
          </p>

          <!-- Tech Stack -->
          <div class="mb-8 flex flex-wrap justify-center gap-3">
            <span
              v-for="tech in stack"
              :key="tech"
              class="rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-600/20 to-purple-600/20 px-4 py-2 text-sm text-violet-300 backdrop-blur-sm"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              :href="gitHubLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
            >
              <svg class="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {{ $t('detail.visitLiveSite') }}
            </a>
            <span class="inline-flex items-center rounded-xl border border-gray-700 bg-gray-800/50 px-6 py-3 font-semibold text-gray-300">
              <svg class="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ $t('breizhcard.year') }}
            </span>
          </div>
        </div>

        <!-- Project Overview -->
        <div class="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div class="lg:col-span-2">
            <div class="h-full rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8">
              <h2 class="mb-6 text-3xl font-bold text-white">{{ $t('detail.overview') }}</h2>
              <div class="prose prose-invert max-w-none">
                <p class="whitespace-pre-line text-lg leading-relaxed text-gray-300">
                  {{ $t('breizhcard.overview') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Project Stats -->
          <div class="space-y-6">
            <div class="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-900/30 to-purple-900/30 p-6">
              <h3 class="mb-4 text-xl font-bold text-white">{{ $t('detail.projectImpact') }}</h3>
              <div class="space-y-4">
                <div>
                  <p class="text-3xl font-bold text-violet-400">20+</p>
                  <p class="text-sm text-gray-300">{{ $t('breizhcard.impact.businesses') }}</p>
                </div>
                <div>
                  <p class="text-3xl font-bold text-purple-400">500+</p>
                  <p class="text-sm text-gray-300">{{ $t('breizhcard.impact.users') }}</p>
                </div>
                <div>
                  <p class="text-3xl font-bold text-pink-400">100%</p>
                  <p class="text-sm text-gray-300">{{ $t('breizhcard.impact.scratch') }}</p>
                </div>
              </div>
            </div>

            <div class="rounded-2xl border border-gray-800/50 bg-gray-900/50 p-6">
              <h3 class="mb-4 text-xl font-bold text-white">{{ $t('detail.myRole') }}</h3>
              <ul class="space-y-2 text-gray-300">
                <li v-for="(role, index) in roles" :key="index" class="flex items-center">
                  <svg class="mr-2 size-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ rt(role) }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Features Grid -->
        <div class="mb-16">
          <h2 class="mb-8 text-center text-3xl font-bold text-white">{{ $t('detail.keyFeatures') }}</h2>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="group rounded-2xl border border-gray-800/50 bg-gray-900/50 p-6 transition-all duration-300 hover:border-violet-500/30"
            >
              <div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 transition-transform duration-300 group-hover:scale-110">
                <svg class="size-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="mb-3 text-xl font-semibold text-white">{{ rt(feature.title) }}</h3>
              <p class="text-gray-300">{{ rt(feature.description) }}</p>
            </div>
          </div>
        </div>

        <!-- Technical Challenges -->
        <div class="mb-16">
          <h2 class="mb-8 text-center text-3xl font-bold text-white">{{ $t('detail.technicalChallenges') }}</h2>
          <div class="space-y-8">
            <div
              v-for="(challenge, index) in challenges"
              :key="index"
              class="rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8"
            >
              <div class="flex items-start space-x-4">
                <div class="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-600">
                  <svg class="size-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L2.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="mb-3 text-xl font-semibold text-white">{{ rt(challenge.title) }}</h3>
                  <p class="mb-4 text-gray-300"><strong class="text-red-400">{{ $t('detail.challenge') }}:</strong> {{ rt(challenge.problem) }}</p>
                  <p class="text-gray-300"><strong class="text-green-400">{{ $t('detail.solution') }}:</strong> {{ rt(challenge.solution) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Timeline -->
        <div>
          <h2 class="mb-8 text-center text-3xl font-bold text-white">{{ $t('detail.developmentTimeline') }}</h2>
          <div class="relative">
            <div class="absolute inset-y-0 left-4 w-0.5 bg-gradient-to-b from-violet-600 to-purple-600 md:left-1/2 md:-translate-x-0.5"></div>

            <div class="space-y-8">
              <div
                v-for="(phase, index) in timeline"
                :key="index"
                class="relative flex items-center"
                :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
              >
                <div class="absolute left-0 z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 md:left-1/2 md:-translate-x-1/2">
                  <span class="text-sm font-bold text-white">{{ index + 1 }}</span>
                </div>

                <div
                  class="ml-12 rounded-2xl border border-gray-800/50 bg-gray-900/50 p-6 md:ml-0"
                  :class="index % 2 === 0 ? 'md:mr-8 md:w-5/12 md:ml-auto' : 'md:ml-8 md:w-5/12'"
                >
                  <h3 class="mb-2 text-xl font-semibold text-white">{{ rt(phase.phase) }}</h3>
                  <p class="mb-3 text-sm font-medium text-violet-400">{{ rt(phase.duration) }}</p>
                  <p class="text-gray-300">{{ rt(phase.description) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { breizhcardExp } from '@/data/experiences'

  const { tm, rt, locale } = useI18n({ useScope: 'global' })

  const title = 'Breizhcard'
  const gitHubLink = 'https://www.breizhcard.com/'
  const stack = breizhcardExp.stack ?? []

  interface Feature { title: string; description: string }
  interface Challenge { title: string; problem: string; solution: string }
  interface Phase { phase: string; duration: string; description: string }

  const roles = computed<string[]>(() => (locale.value ? (tm('breizhcard.roles') as string[]) : []))
  const features = computed<Feature[]>(() => (locale.value ? (tm('breizhcard.features') as Feature[]) : []))
  const challenges = computed<Challenge[]>(() => (locale.value ? (tm('breizhcard.challenges') as Challenge[]) : []))
  const timeline = computed<Phase[]>(() => (locale.value ? (tm('breizhcard.timeline') as Phase[]) : []))
  </script>
