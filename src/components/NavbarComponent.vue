<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="fixed inset-x-0 top-0 z-50 bg-white/90 shadow-sm backdrop-blur-sm">
    <div class="container mx-auto px-4">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <RouterLink
            to="/"
            class="text-xl font-bold text-gray-800"
          >
            Axel David
          </RouterLink>
        </div>
        <div class="flex space-x-8">
          <RouterLink
            to="/timeline"
            class="transition-colors"
            :class="{ 'text-violet-600 hover:text-violet-600': $route.path === '/timeline',
                      'text-gray-600 hover:text-violet-700': $route.path !== '/timeline' }"
          >
            Timeline
          </RouterLink>
          <RouterLink
            to="/projects"
            class="transition-colors"
            :class="{ 'text-violet-600 hover:text-violet-600': $route.path === '/projects',
                      'text-gray-600 hover:text-violet-700': $route.path !== '/projects' }"
          >
            Projects
          </RouterLink>
          <RouterLink
            to="/about"
            class="transition-colors"
            :class="{ 'text-violet-600 hover:text-violet-600': $route.path === '/about',
                      'text-gray-600 hover:text-violet-700': $route.path !== '/about' }"
          >
            About me
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template> 