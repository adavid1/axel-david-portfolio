<template>
  <div class="flex min-h-screen items-center justify-center px-4">
    <div class="w-full max-w-4xl text-center">
      <!-- Hero Section -->
      <div class="space-y-8">
        <!-- Profile Image Placeholder -->
        <div class="mx-auto flex size-32 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-purple-600 shadow-2xl">
          <span class="text-4xl font-bold text-white">{{ constants.fullname.split(' ').map(n => n[0]).join('') }}</span>
        </div>

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
            View My Journey
            <svg class="size-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </RouterLink>
          <RouterLink
            to="/projects"
            class="rounded-xl border-2 border-violet-400 px-8 py-3 font-semibold text-violet-300 transition-all duration-300 hover:bg-violet-400 hover:text-black"
          >
            Explore Projects
          </RouterLink>
        </div>

        <!-- Tech Stack Preview -->
        <div class="pt-12">
          <p class="mb-6 text-sm text-gray-400">Technologies I work with</p>
          <div class="flex flex-wrap justify-center gap-3">
            <span v-for="tech in ['Vue.js', 'TypeScript', 'Node.js', 'Docker', 'C#', '.NET']" 
                  :key="tech"
                  class="rounded-full border border-gray-700 bg-gray-800/50 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-violet-400 hover:text-violet-300">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import constants from "@/constants.ts"
</script>