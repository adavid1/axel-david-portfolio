<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="fixed inset-x-0 top-0 z-50 bg-white/80 shadow-sm backdrop-blur-sm">
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
            class="text-gray-600 transition-colors hover:text-gray-900"
            active-class="text-blue-600"
          >
            Timeline
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-gray-600 transition-colors hover:text-gray-900"
            active-class="text-blue-600"
          >
            About me
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template> 