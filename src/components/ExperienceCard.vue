<script setup lang="ts">
import { computed } from "vue"
import { formatDate, splittedList } from "@/utils.ts"
import GraduationCapIcon from "@/components/GraduationCapIcon.vue"
import GEIcon from "@/components/GEIcon.vue"

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
    stack: {
        type: Array,
        required: false,
        default: () => [],
    },
    logo: {
        type: String,
        required: false,
        default: null,
    },
})

const logo = computed(() => {
    if (props.logo === "graduation-cap") {
        return GraduationCapIcon
    } else if (props.logo === "general-electric") {
        return GEIcon
    }
    return null
})

const isEducation = computed(() => props.logo === "graduation-cap")
const cardGradient = computed(() => {
  return isEducation.value 
    ? 'from-amber-400 to-orange-500' 
    : 'from-violet-400 to-purple-500'
})

const cardBgGradient = computed(() => {
  return isEducation.value 
    ? 'from-amber-400 to-orange-500' 
    : 'from-violet-400 to-purple-500'
})

const borderColor = computed(() => {
  return isEducation.value 
    ? 'border-amber-400/50' 
    : 'border-violet-400/50'
})

const hoverBorderColor = computed(() => {
  return isEducation.value 
    ? 'hover:border-amber-400' 
    : 'hover:border-violet-400'
})
</script>

<template>
  <div class="group m-1 h-full w-28 rounded-3xl [perspective:1000px] md:w-64">
    <div class="relative size-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <!-- Front Face -->
      <div
        class="absolute flex size-full flex-col items-center justify-center space-y-2 overflow-hidden rounded-2xl border-2 shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:shadow-xl"
        :class="[borderColor, hoverBorderColor]"
        :style="`
          background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%), 
                      linear-gradient(135deg, ${isEducation ? 'rgba(251,191,36,0.1)' : 'rgba(139,92,246,0.1)'} 0%, 
                                                ${isEducation ? 'rgba(249,115,22,0.05)' : 'rgba(147,51,234,0.05)'} 100%);
          backface-visibility: hidden; 
          transform: rotateY(0deg);
        `"
      >
        <component
          :is="logo"
          v-if="logo"
          class="absolute inset-0 z-0 size-full fill-transparent opacity-20 transition-opacity duration-500 group-hover:opacity-30"
          :class="isEducation ? 'stroke-amber-400 stroke-[100]' : 'stroke-violet-400 stroke-[100]'"
        />
        
        <!-- Animated background orb -->
        <div class="absolute inset-0 opacity-30">
          <div 
            class="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl transition-all duration-700 group-hover:scale-125"
            :class="`bg-gradient-to-r ${cardBgGradient}`"
          ></div>
        </div>
        
        <h3 class="z-10 text-center text-base font-bold text-white drop-shadow-lg md:text-2xl">
          {{ props.title }}
        </h3>
        <a
          class="z-10 text-center text-sm font-medium text-white/90 transition-colors hover:text-white"
          :href="props.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ props.institution }}
        </a>
        <div class="z-10 text-center">
          <p v-if="props.endDate" class="text-sm text-white/80">
            {{ formatDate(props.startDate) }} - {{ formatDate(props.endDate) }}
          </p>
          <p v-else class="text-sm text-white/80">
            {{ formatDate(props.startDate) }} - {{ $t("now") }}
          </p>
        </div>
      </div>
      
      <!-- Back Face -->
      <div
        class="absolute flex size-full flex-col items-start justify-start overflow-hidden rounded-2xl border-2 p-4 shadow-2xl backdrop-blur-sm"
        :class="[borderColor]"
        :style="`
          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%), 
                      linear-gradient(135deg, ${isEducation ? 'rgba(251,191,36,0.2)' : 'rgba(139,92,246,0.2)'} 0%, 
                                                ${isEducation ? 'rgba(249,115,22,0.1)' : 'rgba(147,51,234,0.1)'} 100%);
          backface-visibility: hidden; 
          transform: rotateY(180deg);
        `"
      >
        <component
          :is="logo"
          v-if="logo"
          class="absolute right-2 top-2 size-16 fill-transparent opacity-60 md:size-20"
          :class="isEducation ? 'stroke-amber-400 stroke-[20]' : 'stroke-violet-400 stroke-[20]'"
        />
        
        <div class="flex h-full flex-col justify-between">
          <div>
            <h3 class="mb-2 text-sm font-bold text-white md:text-lg">
              {{ props.title }}
            </h3>
            <a
              class="mb-3 block text-xs font-medium transition-colors hover:text-white md:text-sm"
              :class="isEducation ? 'text-amber-300 hover:text-amber-200' : 'text-violet-300 hover:text-violet-200'"
              :href="props.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ props.institution }}
            </a>
            <p class="mb-4 text-xs text-white/80">
              {{ props.endDate ? `${formatDate(props.startDate)} - ${formatDate(props.endDate)}` : `${formatDate(props.startDate)} - ${$t("now")}` }}
            </p>
          </div>
          
          <div v-if="props.stack.length > 0" class="mt-auto">
            <div class="mb-2 text-xs font-semibold text-white/90">Tech Stack:</div>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="tech in props.stack.slice(0, 3)"
                :key="tech"
                class="rounded-full border px-2 py-1 text-xs transition-all"
                :class="isEducation 
                  ? 'border-amber-400/30 bg-amber-400/10 text-amber-200' 
                  : 'border-violet-400/30 bg-violet-400/10 text-violet-200'"
              >
                {{ tech }}
              </span>
              <span
                v-if="props.stack.length > 3"
                class="rounded-full border px-2 py-1 text-xs text-white/60"
                :class="isEducation 
                  ? 'border-amber-400/20 bg-amber-400/5' 
                  : 'border-violet-400/20 bg-violet-400/5'"
              >
                +{{ props.stack.length - 3 }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>