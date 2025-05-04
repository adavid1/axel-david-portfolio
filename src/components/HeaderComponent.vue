<script setup lang="ts">
import constants from "@/constants.ts"
</script>

<template>
  <header>
    <h1
      class="text-3xl font-semibold"
    >
      {{ constants.fullname }}
    </h1>
    <h2
      class="text-xl font-semibold"
    >
      {{ $t('title') }}
    </h2>
    <p
      class="text-gray-300"
    >
      {{ $t('intro') }}
    </p>
  </header>
</template>