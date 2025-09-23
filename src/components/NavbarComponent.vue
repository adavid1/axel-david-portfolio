<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="fixed inset-x-0 top-0 z-50 border-b border-gray-800/50 bg-black/80 backdrop-blur-lg">
    <div class="container mx-auto px-4">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <RouterLink
            to="/"
            class="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-xl font-bold text-transparent transition-all duration-300 hover:from-violet-300 hover:to-purple-400"
          >
            Axel David
          </RouterLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden space-x-1 md:flex">
          <RouterLink
            to="/"
            class="rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
            :class="{ 
              'bg-violet-600 text-white shadow-lg shadow-violet-600/25': $route.path === '/',
              'text-gray-300 hover:bg-gray-800/50 hover:text-white': $route.path !== '/' 
            }"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/timeline"
            class="rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
            :class="{ 
              'bg-violet-600 text-white shadow-lg shadow-violet-600/25': $route.path === '/timeline',
              'text-gray-300 hover:bg-gray-800/50 hover:text-white': $route.path !== '/timeline' 
            }"
          >
            Timeline
          </RouterLink>
          <RouterLink
            to="/projects"
            class="rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
            :class="{ 
              'bg-violet-600 text-white shadow-lg shadow-violet-600/25': $route.path === '/projects',
              'text-gray-300 hover:bg-gray-800/50 hover:text-white': $route.path !== '/projects' 
            }"
          >
            Projects
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="rounded-lg p-2 text-gray-300 transition-all duration-300 hover:bg-gray-800/50 hover:text-white"
          >
            <svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                v-if="!isMobileMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="isMobileMenuOpen"
        class="border-t border-gray-800/50 bg-black/90 backdrop-blur-lg md:hidden"
      >
        <div class="space-y-1 px-2 pb-3 pt-2">
          <RouterLink
            to="/"
            @click="isMobileMenuOpen = false"
            class="block rounded-lg px-3 py-2 text-base font-medium transition-all duration-300"
            :class="{ 
              'bg-violet-600 text-white': $route.path === '/',
              'text-gray-300 hover:bg-gray-800/50 hover:text-white': $route.path !== '/' 
            }"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/timeline"
            @click="isMobileMenuOpen = false"
            class="block rounded-lg px-3 py-2 text-base font-medium transition-all duration-300"
            :class="{ 
              'bg-violet-600 text-white': $route.path === '/timeline',
              'text-gray-300 hover:bg-gray-800/50 hover:text-white': $route.path !== '/timeline' 
            }"
          >
            Timeline
          </RouterLink>
          <RouterLink
            to="/projects"
            @click="isMobileMenuOpen = false"
            class="block rounded-lg px-3 py-2 text-base font-medium transition-all duration-300"
            :class="{ 
              'bg-violet-600 text-white': $route.path === '/projects',
              'text-gray-300 hover:bg-gray-800/50 hover:text-white': $route.path !== '/projects' 
            }"
          >
            Projects
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>