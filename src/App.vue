<script setup lang="ts">
import particlesConfig from '@/particlesConfig.json'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <vue-particles
    id="tsparticles"
    class="absolute left-0 top-0 z-0 size-full"
    :options="particlesConfig"
  />
  <div class="relative min-h-screen">
    <NavbarComponent />
    <main class="pt-16">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>