<template>
  <div class="relative">
    <!-- Timeline dot: sits on the left rail -->
    <div class="absolute left-4 top-2 z-20 flex size-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 shadow-lg">
      <div class="size-3 rounded-full bg-white"></div>
    </div>

    <!-- Full-width content column, offset to clear the left rail -->
    <div class="pl-12">
      <!-- Date range badge -->
      <div class="mb-4">
        <span class="inline-block rounded-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-sm">
          {{ formatDateRange }}
          <span v-if="group.hasOngoingExperience" class="ml-2 inline-block size-2 rounded-full bg-green-500"></span>
        </span>
      </div>

      <!-- "In parallel" hint when several experiences share this period -->
      <div
        v-if="isConcurrent"
        class="mb-3 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-violet-300"
      >
        <svg class="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
        </svg>
        {{ $t('timeline.concurrent', { count: group.experiences.length }) }}
      </div>

      <!--
        One card per row by default (mobile-first). When a period holds several
        experiences, they sit side by side from md up to signal they ran in parallel.
      -->
      <div
        class="grid gap-4"
        :class="{ 'md:grid-cols-2': isConcurrent }"
      >
        <ExperienceCard
          v-for="experience in group.experiences"
          :key="experience.title + (experience.company || experience.school)"
          :experience="experience"
          :compact="isConcurrent"
          @click="handleExperienceClick(experience)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ExperienceCard from '@/components/ExperienceCard.vue'
import { Experience } from '@/types'
import { formatTimestampRange } from '@/utils'

interface Props {
  group: {
    experiences: Experience[]
    startDate: number
    endDate: number
    hasOngoingExperience?: boolean
  }
}

interface Emits {
  (e: 'experience-click', experience: Experience): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { t, locale } = useI18n({ useScope: 'global' })

function handleExperienceClick(experience: Experience) {
  emit('experience-click', experience)
}

const formatDateRange = computed(() =>
  formatTimestampRange(props.group.startDate, props.group.endDate, locale.value, t('common.present'))
)

const isConcurrent = computed(() => props.group.experiences.length > 1)
</script>
