<script setup lang="ts">
import { computed } from "vue"
import { formatDate, splittedList } from "@/utils.ts"
import graduationCap from "@/assets/graduation-cap.svg"

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
        required: false,
        default: () => [],
    },
    isSchool: {
        type: Boolean,
        required: false,
        default: false,
    },
})

const frontBgClass = computed(() => {
  if (props.color === "violet") {
    return "border-violet-400 bg-violet-300"
  }
  if (props.color === "blue") {
    return "border-blue-400 bg-blue-300"
  }
  return "border-gray-400 bg-gray-300"
})

const backBgClass = computed(() => {
  if (props.color === "violet") {
    return "border-violet-400 bg-violet-400"
  }
  if (props.color === "blue") {
    return "border-blue-400 bg-blue-400"
  }
  return "border-gray-400 bg-gray-400"
})

const hasGraduationCap = computed(() => props.isSchool)

const svgFilter = computed(() => {
  return {
    filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'
  }
})
</script>

<template>
  <div class="group m-1 h-full w-28 rounded-3xl [perspective:1000px] md:w-64 xl:p-4">
    <div class="relative size-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <!-- Front Face -->
      <div
        class="absolute flex size-full flex-col items-center justify-center space-y-2 rounded-xl border-2 text-black shadow-lg [backface-visibility:hidden]"
        :class="frontBgClass"
      >
        <img
          v-if="hasGraduationCap"
          :src="graduationCap"
          class="absolute right-1 top-0 size-20 opacity-80 md:size-24"
          :style="svgFilter"
          alt="Graduation cap"
        >
        <h3 class="text-base font-semibold text-black md:text-3xl xl:text-5xl">
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
        class="absolute flex size-full flex-col items-center justify-center overflow-hidden rounded-xl border-2 text-black shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]"
        :class="backBgClass"
      >
        <img
          v-if="hasGraduationCap"
          :src="graduationCap"
          class="absolute right-1 top-0 size-20 opacity-80 md:size-24"
          :style="svgFilter"
          alt="Graduation cap"
        >
        <h3 class="text-base font-semibold">
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
        <div v-if="props.stack.length > 0">
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