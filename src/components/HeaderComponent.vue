<script setup lang="ts">
import { ref } from 'vue'

    const fullname = ref('Axel David')
    const title = ref('Full Stack Developer')
    const intro = ref('I am a Full Stack Developer with 3 years of experience in web development. I am passionate about building scalable and maintainable web applications.')
</script>

<template>
  <header>
    <h1
      class="text-3xl font-semibold"
    >
      {{ fullname }}
    </h1>
    <h2
      class="text-xl font-semibold"
    >
      {{ title }}
    </h2>
    <p
      class="text-gray-600"
    >
      {{ intro }}
    </p>
  </header>
</template>