<script setup lang="ts">
import particlesConfig from './particlesConfig'
import HeaderComponent from './components/HeaderComponent.vue'
import ExperienceComponent from './components/ExperienceComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <vue-particles
    id="tsparticles"
    class="absolute left-0 top-0 z-0 size-full"
    :options="particlesConfig"
  />
  <div
    class="relative flex min-h-screen flex-col items-center justify-center space-y-8"
  >
    <HeaderComponent />
    <ExperienceComponent />
    <FooterComponent />
  </div>
</template>