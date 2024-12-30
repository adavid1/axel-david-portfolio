<script setup lang="ts">
import linkedinLogo from '@/assets/linkedin.svg'
</script>

<template>
  <footer class="flex flex-row items-center justify-center p-4">
    <a
      href="https://www.linkedin.com/in/axel-david-297346143/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        :src="linkedinLogo"
        alt="LinkedIn logo"
        class="size-12"
      >
    </a>
  </footer>
</template>