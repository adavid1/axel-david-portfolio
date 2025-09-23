<script setup lang="ts">
import linkedinLogo from '@/assets/linkedin.svg'
import githubLogo from '@/assets/github.svg'
import constants from '@/constants'
</script>

<template>
  <footer class="relative mt-20 border-t border-gray-800/50 bg-black/80 backdrop-blur-lg">
    <div class="mx-auto max-w-6xl px-4 py-12">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- Brand Section -->
        <div class="space-y-4">
          <h3 class="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-xl font-bold text-transparent">
            {{ constants.fullname }}
          </h3>
          <p class="text-sm leading-relaxed text-gray-400">
            Full Stack Developer passionate about building scalable and maintainable web applications. 
            Always eager to learn new technologies and solve complex problems.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-white">Quick Links</h4>
          <nav class="flex flex-col space-y-2">
            <RouterLink to="/" class="text-sm text-gray-400 transition-colors duration-300 hover:text-violet-400">
              Home
            </RouterLink>
            <RouterLink to="/timeline" class="text-sm text-gray-400 transition-colors duration-300 hover:text-violet-400">
              Professional Timeline
            </RouterLink>
            <RouterLink to="/projects" class="text-sm text-gray-400 transition-colors duration-300 hover:text-violet-400">
              My Projects
            </RouterLink>
            <RouterLink to="/projects/breizhcard" class="text-sm text-gray-400 transition-colors duration-300 hover:text-violet-400">
              Featured: Breizhcard
            </RouterLink>
          </nav>
        </div>

        <!-- Contact & Social -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-white">Connect With Me</h4>
          <div class="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/axel-david-297346143/"
              target="_blank"
              rel="noopener noreferrer"
              class="group rounded-xl border border-gray-700/50 bg-gray-800/50 p-3 transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-600/20"
              aria-label="LinkedIn Profile"
            >
              <img
                :src="linkedinLogo"
                alt="LinkedIn"
                class="size-5 invert transition-all duration-300 group-hover:brightness-0 group-hover:invert-0 group-hover:saturate-100 group-hover:filter-none"
                style="filter: invert(1) sepia(1) saturate(5) hue-rotate(200deg) brightness(1.2);"
              >
            </a>
            <a
              href="https://github.com/adavid1"
              target="_blank"
              rel="noopener noreferrer"
              class="group rounded-xl border border-gray-700/50 bg-gray-800/50 p-3 transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-600/20"
              aria-label="GitHub Profile"
            >
              <img
                :src="githubLogo"
                alt="GitHub"
                class="size-5 invert transition-all duration-300 group-hover:brightness-0 group-hover:invert-0 group-hover:saturate-100"
                style="filter: invert(1);"
              >
            </a>
          </div>
          
          <!-- Location -->
          <div class="flex items-center text-sm text-gray-400">
            <svg class="mr-2 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Brittany, France
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-gray-800/50 pt-6 md:flex-row md:space-y-0">
        <div class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} {{ constants.fullname }}. Built with Vue.js & Tailwind CSS.
        </div>
        
        <!-- Tech Stack Pills -->
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tech in ['Vue.js', 'TypeScript', 'Tailwind CSS']" 
            :key="tech"
            class="rounded border border-gray-700/50 bg-gray-800/30 px-2 py-1 text-xs text-gray-400"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <!-- Gradient Overlay -->
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-900/5 to-transparent"></div>
  </footer>
</template>