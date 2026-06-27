<template>
  <div v-if="project" class="min-h-screen px-4 py-12">
    <div class="mx-auto max-w-4xl">
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

      <!-- Project Header -->
      <div class="mb-12 text-center">
        <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">
          {{ project.title }}
        </h1>
        <p class="mb-6 text-xl text-gray-300">
          {{ $t(project.description) }}
        </p>
        <div class="mb-8 flex flex-wrap justify-center gap-2">
          <span
            v-for="tech in project.stack"
            :key="tech"
            class="rounded-full border border-violet-500/30 bg-violet-600/20 px-4 py-2 text-sm text-violet-300"
          >
            {{ tech }}
          </span>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <span class="rounded-full bg-gray-800/50 px-3 py-1 text-sm text-gray-400">
            {{ project.year }}
          </span>
          <a
            v-if="project.websiteLink"
            :href="project.websiteLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 px-4 py-2 text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
          >
            <svg class="mr-2 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
            </svg>
            {{ $t('detail.visitLiveSite') }}
          </a>
          <a
            v-if="project.appStoreLink"
            :href="project.appStoreLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-lg bg-gray-800 px-4 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
          >
            <svg class="mr-2 size-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25" />
            </svg>
            {{ $t('detail.downloadAppStore') }}
          </a>
          <a
            v-if="project.gitHubLink"
            :href="project.gitHubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-lg bg-gray-800 px-4 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
          >
            <svg class="mr-2 size-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {{ $t('detail.viewSource') }}
          </a>
        </div>
      </div>

      <!-- Content Sections -->
      <div class="space-y-12">
        <!-- Detailed Description -->
        <div class="rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8">
          <h2 class="mb-6 text-2xl font-bold text-white">{{ $t('detail.overview') }}</h2>
          <div class="prose prose-invert max-w-none">
            <p class="whitespace-pre-line leading-relaxed text-gray-300">{{ overview }}</p>
          </div>
        </div>

        <!-- Features -->
        <div v-if="features.length > 0" class="rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8">
          <h2 class="mb-6 text-2xl font-bold text-white">{{ $t('detail.keyFeatures') }}</h2>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-start space-x-3 rounded-lg bg-gray-800/30 p-4"
            >
              <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-violet-600">
                <svg class="size-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-white">{{ rt(feature.title) }}</h3>
                <p class="text-sm text-gray-400">{{ rt(feature.description) }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Technical Challenges -->
        <div v-if="challenges.length > 0" class="rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8">
          <h2 class="mb-6 text-2xl font-bold text-white">{{ $t('detail.technicalChallenges') }}</h2>
          <div class="space-y-6">
            <div
              v-for="(challenge, index) in challenges"
              :key="index"
              class="border-l-4 border-violet-500 pl-6"
            >
              <h3 class="mb-2 font-semibold text-white">{{ rt(challenge.title) }}</h3>
              <p class="mb-3 text-gray-300">{{ rt(challenge.problem) }}</p>
              <p class="text-sm text-gray-400"><strong class="text-violet-400">{{ $t('detail.solution') }}:</strong> {{ rt(challenge.solution) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 404 for non-existent projects -->
  <div v-else class="flex min-h-screen items-center justify-center px-4">
    <div class="text-center">
      <h1 class="mb-4 text-4xl font-bold text-white">{{ $t('detail.notFound') }}</h1>
      <p class="mb-8 text-gray-300">{{ $t('detail.notFoundDescription') }}</p>
      <RouterLink
        to="/projects"
        class="inline-flex items-center rounded-lg bg-violet-600 px-6 py-3 text-white transition-colors duration-300 hover:bg-violet-700"
      >
        <svg class="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        {{ $t('detail.back') }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import type { Project } from '@/types'
import { portfolio, streamingMultichat, bulk, optymoRecordSplitter, bobRaoul, ncg } from '@/data/projects'

interface Feature { title: string; description: string }
interface Challenge { title: string; problem: string; solution: string }

const route = useRoute()
const { t, tm, rt, locale } = useI18n({ useScope: 'global' })

const slug = route.params.slug as string

const bySlug: Record<string, { project: Project; contentKey: string }> = {
  'portfolio': { project: portfolio, contentKey: 'portfolio' },
  'streaming-multichat': { project: streamingMultichat, contentKey: 'streamingMultichat' },
  'bulk': { project: bulk, contentKey: 'bulk' },
  'optymo-record-splitter': { project: optymoRecordSplitter, contentKey: 'optymoRecordSplitter' },
  'bob-raoul': { project: bobRaoul, contentKey: 'bobRaoul' },
  'no-copyright-gang': { project: ncg, contentKey: 'noCopyrightGang' },
}

const entry = bySlug[slug] ?? null
const project = computed(() => entry?.project ?? null)

const overview = computed(() => (entry && locale.value ? t(`projDetail.${entry.contentKey}.overview`) : ''))
const features = computed<Feature[]>(() =>
  entry && locale.value ? (tm(`projDetail.${entry.contentKey}.features`) as Feature[]) : []
)
const challenges = computed<Challenge[]>(() =>
  entry && locale.value ? (tm(`projDetail.${entry.contentKey}.challenges`) as Challenge[]) : []
)
</script>
