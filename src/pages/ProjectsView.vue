<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { portfolio, streamingMultichat, bulk, optymoRecordSplitter, bobRaoul, ncg } from '@/data/projects'

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

<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          My Projects
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          A collection of personal projects showcasing different technologies and problem-solving approaches
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.title"
          class="group relative bg-gray-900/50 rounded-2xl p-6 border border-gray-800/50 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <!-- Project Header -->
          <div class="flex items-start justify-between mb-4">
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-white mb-2">
                {{ project.title }}
              </h3>
              <p class="text-sm text-violet-400 font-medium">
                {{ project.year }}
              </p>
            </div>
            <div class="flex space-x-2">
              <a
                :href="project.gitHubLink"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Description -->
          <p class="text-gray-300 mb-6 line-clamp-3">
            {{ project.description }}
          </p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tech in project.stack.slice(0, 3)"
              :key="tech"
              class="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300"
            >
              {{ tech }}
            </span>
            <span
              v-if="project.stack.length > 3"
              class="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-400"
            >
              +{{ project.stack.length - 3 }} more
            </span>
          </div>

          <!-- View Details Button -->
          <RouterLink
            :to="`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`"
            :class="`w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r ${getGradient(index)} text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 group-hover:shadow-lg`"
          >
            View Details
            <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </RouterLink>

          <!-- Hover Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

      <!-- Special Section for Breizhcard -->
      <div class="mt-16 p-8 bg-gradient-to-r from-violet-900/30 to-purple-900/30 rounded-2xl border border-violet-500/30">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-white mb-4">
            Featured Project: Breizhcard
          </h2>
          <p class="text-gray-300 mb-6 max-w-3xl mx-auto">
            A comprehensive full-stack project I built from scratch - worth a dedicated deep dive
          </p>
          <RouterLink
            to="/projects/breizhcard"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
          >
            Explore Breizhcard Project
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>