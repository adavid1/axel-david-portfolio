<script setup lang="ts">
import { formatDate, splittedList } from "@/utils.ts"

const props = defineProps({
    schoolExp: {
        type: Object,
        required: true,
    },
})
</script>

<template>
  <div>
    <h3 class="text-lg font-semibold text-white">
      {{ props.schoolExp.title }}
    </h3>
    <a
      class="text-sm"
      :href="props.schoolExp.schoolLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ props.schoolExp.school }}
    </a>
    <p class="text-sm">
      {{ formatDate(props.schoolExp.startDate) }} - {{ formatDate(props.schoolExp.endDate) }}
    </p>
    <p
      v-for="e in splittedList(props.schoolExp.description)"
      :key="e"
      class="text-sm"
    >
      {{ e }}
    </p>
  </div>
</template>