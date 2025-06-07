<script setup lang="ts">
import { computed } from "vue"
import { formatDate, splittedList } from "@/utils.ts"

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
    color: {
        type: String,
        required: false,
        default: "gray",
    },
    stack: {
        type: Array,
        required: true,
    },
})

const frontBgClass = computed(() => {
  if (props.color === "purple") {
    return "border-purple-950 bg-purple-900"
  }
  if (props.color === "blue") {
    return "border-blue-950 bg-blue-900"
  }
  return "border-gray-950 bg-gray-900"
})

const backBgClass = computed(() => {
  if (props.color === "purple") {
    return "border-purple-950 bg-purple-950"
  }
  if (props.color === "blue") {
    return "border-blue-950 bg-blue-950"
  }
  return "border-gray-950 bg-gray-950"
})
</script>

<template>
  <div class="group m-1 h-full w-28 rounded-3xl [perspective:1000px] md:w-64 xl:p-4">
    <div class="relative size-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <!-- Front Face -->
      <div
        class="absolute flex size-full flex-col items-center justify-center space-y-2 rounded-xl border-8 text-black shadow-lg [backface-visibility:hidden]"
        :class="frontBgClass"
      >
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
      </div>
      <!-- Back Face -->
      <div
        class="absolute flex size-full flex-col items-center justify-center overflow-hidden rounded-xl border-8 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]"
        :class="backBgClass"
      >
        <h3 class="text-base font-semibold text-white">
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
        <div
          class="size-6"
        />
        <div v-if="props.stack && props.stack.length > 0">
          <p
            v-for="e in splittedList(props.stack.join(', '))"
            :key="e"
            class="text-xs"
          >
            {{ e }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>