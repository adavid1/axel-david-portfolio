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
          {{ $t('ujef.description') }}
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
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            :href="appStoreLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
          >
            <svg class="mr-2 size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25" />
            </svg>
            {{ $t('detail.downloadAppStore') }}
          </a>
          <a
            :href="websiteLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-xl border border-gray-700 bg-gray-800/50 px-6 py-3 font-semibold text-gray-300 transition-colors hover:border-violet-500/50 hover:text-white"
          >
            <svg class="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
            </svg>
            {{ $t('detail.visitWebsite') }}
          </a>
        </div>
      </div>

      <!-- Project Overview -->
      <div class="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <div class="h-full rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8">
            <h2 class="mb-6 text-3xl font-bold text-white">{{ $t('detail.overview') }}</h2>
            <div class="prose prose-invert max-w-none">
              <p class="whitespace-pre-line text-lg leading-relaxed text-gray-300">
                {{ $t('ujef.overview') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Status & Role -->
        <div class="space-y-6">
          <div class="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-900/30 to-purple-900/30 p-6">
            <h3 class="mb-4 text-xl font-bold text-white">{{ $t('detail.availability') }}</h3>
            <dl class="space-y-4">
              <div v-for="(item, index) in status" :key="index">
                <dt class="text-sm text-gray-400">{{ rt(item.label) }}</dt>
                <dd class="font-semibold text-violet-300">{{ rt(item.value) }}</dd>
              </div>
            </dl>
          </div>

          <div class="rounded-2xl border border-gray-800/50 bg-gray-900/50 p-6">
            <h3 class="mb-4 text-xl font-bold text-white">{{ $t('detail.myRole') }}</h3>
            <ul class="space-y-2 text-gray-300">
              <li v-for="(role, index) in roles" :key="index" class="flex items-start">
                <svg class="mr-2 mt-1 size-4 shrink-0 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div class="mb-4 flex items-center gap-3">
              <div class="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 transition-transform duration-300 group-hover:scale-110">
                <svg class="size-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span
                v-if="featurePremium[index]"
                class="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-amber-300"
              >
                {{ $t('detail.premium') }}
              </span>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">{{ rt(feature.title) }}</h3>
            <p class="text-gray-300">{{ rt(feature.description) }}</p>
          </div>
        </div>
      </div>

      <!-- Technical Challenges -->
      <div>
        <h2 class="mb-8 text-center text-3xl font-bold text-white">{{ $t('detail.technicalChallenges') }}</h2>
        <div class="space-y-8">
          <div
            v-for="(challenge, index) in challenges"
            :key="index"
            class="rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8"
          >
            <div class="flex items-start space-x-4">
              <div class="flex size-8 shrink-0 items-center justify-center rounded-full bg-violet-600">
                <span class="text-sm font-bold text-white">{{ index + 1 }}</span>
              </div>
              <div class="flex-1">
                <h3 class="mb-3 text-xl font-semibold text-white">{{ rt(challenge.title) }}</h3>
                <p class="text-gray-300">{{ rt(challenge.description) }}</p>
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
import { unJourEnFrance } from '@/data/projects'

const { tm, rt, locale } = useI18n({ useScope: 'global' })

const title = unJourEnFrance.title
const stack = unJourEnFrance.stack
const appStoreLink = unJourEnFrance.appStoreLink
const websiteLink = unJourEnFrance.websiteLink

// Which feature cards carry the Premium badge (kept here: it is layout, not text).
const featurePremium = [false, false, false, false, true, true]

interface LabelValue { label: string; value: string }
interface Feature { title: string; description: string }
interface Challenge { title: string; description: string }

const status = computed<LabelValue[]>(() => (locale.value ? (tm('ujef.status') as LabelValue[]) : []))
const roles = computed<string[]>(() => (locale.value ? (tm('ujef.roles') as string[]) : []))
const features = computed<Feature[]>(() => (locale.value ? (tm('ujef.features') as Feature[]) : []))
const challenges = computed<Challenge[]>(() => (locale.value ? (tm('ujef.challenges') as Challenge[]) : []))
</script>
