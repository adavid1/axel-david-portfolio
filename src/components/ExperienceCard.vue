<script setup lang="ts">
import { formatDate/*, splittedList*/ } from "@/utils.ts"

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: false,
        default: null,
    },
    description: {
        type: String,
        required: true,
    },
})
</script>

<template>
  <div class="m-1 flex flex-col justify-center space-y-2 rounded-3xl border-8 text-gray-200 xl:p-4">
    <h3 class="text-base font-semibold text-white md:text-3xl xl:text-5xl">
      {{ props.title }}
    </h3>
    <a
      class="text-sm"
      :href="props.link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ props.institution }}
    </a>
    <p
      v-if="props.endDate"
      class="text-sm"
    >
      {{ formatDate(props.startDate) }} - {{ formatDate(props.endDate) }}
    </p>
    <p
      v-else
      class="text-sm"
    >
      {{ formatDate(props.startDate) }} - {{ $t("now") }}
    </p>
    <!-- <p
      v-for="e in splittedList(props.description)"
      :key="e"
      class="text-sm"
    >
      {{ e }}
    </p> -->
  </div>
</template>