<script setup lang="ts">
import { RouterLink } from 'vue-router'
import constants from "@/constants.ts"
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-4xl w-full text-center">
      <!-- Hero Section -->
      <div class="space-y-8">
        <!-- Profile Image Placeholder -->
        <div class="mx-auto w-32 h-32 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
          <span class="text-4xl font-bold text-white">{{ constants.fullname.split(' ').map(n => n[0]).join('') }}</span>
        </div>

        <!-- Name and Title -->
        <div class="space-y-4">
          <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
            {{ constants.fullname }}
          </h1>
          <h2 class="text-xl md:text-2xl text-violet-300 font-medium">
            {{ $t('title') }}
          </h2>
        </div>

        <!-- Description -->
        <div class="max-w-2xl mx-auto">
          <p class="text-lg text-gray-300 leading-relaxed">
            {{ $t('intro') }}
          </p>
        </div>

        <!-- Call to Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <RouterLink
            to="/timeline"
            class="group px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-violet-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            View My Journey
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </RouterLink>
          <RouterLink
            to="/projects"
            class="px-8 py-3 border-2 border-violet-400 text-violet-300 rounded-xl font-semibold hover:bg-violet-400 hover:text-black transition-all duration-300"
          >
            Explore Projects
          </RouterLink>
        </div>

        <!-- Tech Stack Preview -->
        <div class="pt-12">
          <p class="text-sm text-gray-400 mb-6">Technologies I work with</p>
          <div class="flex flex-wrap justify-center gap-3">
            <span v-for="tech in ['Vue.js', 'TypeScript', 'Node.js', 'Docker', 'C#', '.NET']" 
                  :key="tech"
                  class="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-violet-400 hover:text-violet-300 transition-all duration-300">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>