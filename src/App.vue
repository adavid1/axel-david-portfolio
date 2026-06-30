<script setup lang="ts">
import particlesConfig from '@/particlesConfig.json'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <vue-particles
    id="tsparticles"
    class="absolute left-0 top-0 z-0 size-full print:hidden"
    :options="particlesConfig"
  />
  <div class="relative min-h-screen">
    <NavbarComponent class="print:hidden" />
    <main class="pt-16 print:pt-0">
      <router-view />
    </main>
    <FooterComponent class="print:hidden" />
  </div>
</template>