<script setup lang="ts">
import linkedinLogo from '@/assets/linkedin.svg'
import githubLogo from '@/assets/github.svg'
import constants from '@/constants'
</script>

<template>
  <footer class="relative border-t border-gray-800/50 bg-black/80 backdrop-blur-lg mt-20">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand Section -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            {{ constants.fullname }}
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Full Stack Developer passionate about building scalable and maintainable web applications. 
            Always eager to learn new technologies and solve complex problems.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-white">Quick Links</h4>
          <nav class="flex flex-col space-y-2">
            <RouterLink to="/" class="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-sm">
              Home
            </RouterLink>
            <RouterLink to="/timeline" class="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-sm">
              Professional Timeline
            </RouterLink>
            <RouterLink to="/projects" class="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-sm">
              My Projects
            </RouterLink>
            <RouterLink to="/projects/breizhcard" class="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-sm">
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
              class="group p-3 bg-gray-800/50 hover:bg-violet-600/20 border border-gray-700/50 hover:border-violet-500/50 rounded-xl transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <img
                :src="linkedinLogo"
                alt="LinkedIn"
                class="w-5 h-5 invert group-hover:invert-0 group-hover:brightness-0 group-hover:saturate-100 group-hover:filter-none transition-all duration-300"
                style="filter: invert(1) sepia(1) saturate(5) hue-rotate(200deg) brightness(1.2);"
              >
            </a>
            <a
              href="https://github.com/adavid1"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-3 bg-gray-800/50 hover:bg-violet-600/20 border border-gray-700/50 hover:border-violet-500/50 rounded-xl transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <img
                :src="githubLogo"
                alt="GitHub"
                class="w-5 h-5 invert group-hover:invert-0 group-hover:brightness-0 group-hover:saturate-100 transition-all duration-300"
                style="filter: invert(1);"
              >
            </a>
          </div>
          
          <!-- Location -->
          <div class="flex items-center text-gray-400 text-sm">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Brittany, France
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-6 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div class="text-gray-500 text-sm">
          © {{ new Date().getFullYear() }} {{ constants.fullname }}. Built with Vue.js & Tailwind CSS.
        </div>
        
        <!-- Tech Stack Pills -->
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tech in ['Vue.js', 'TypeScript', 'Tailwind CSS']" 
            :key="tech"
            class="px-2 py-1 bg-gray-800/30 border border-gray-700/50 rounded text-xs text-gray-400"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-violet-900/5 to-transparent pointer-events-none"></div>
  </footer>
</template>