<script setup lang="ts">
import { formatDate, splittedList } from "@/utils.ts"

const props = defineProps({
    entrepriseExp: {
        type: Object,
        required: true,
    },
})
</script>

<template>
  <div>
    <h3 class="text-lg font-semibold">
      {{ props.entrepriseExp.title }}
    </h3>
    <a
      class="text-sm"
      :href="props.entrepriseExp.companyLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ props.entrepriseExp.company }}
    </a>
    <p class="text-sm">
      {{ formatDate(props.entrepriseExp.startDate) }} - {{ formatDate(props.entrepriseExp.endDate) }}
    </p>
    <p
      v-for="e in splittedList(props.entrepriseExp.description)"
      :key="e"
      class="text-sm"
    >
      {{ e }}
    </p>
  </div>
</template>