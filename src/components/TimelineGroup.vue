<template>
  <div class="relative">
    <!-- Timeline dot: sits on the line (left on mobile, centered on desktop) -->
    <div class="absolute left-4 top-8 z-20 flex size-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 shadow-lg md:left-1/2">
      <div class="size-3 rounded-full bg-white"></div>
    </div>

    <!--
      Single content column.
      Mobile: full width, offset to clear the line on the left.
      Desktop: half width, alternating sides depending on `isLeft`.
    -->
    <div
      class="pl-12 md:w-1/2 md:pl-0"
      :class="isLeft ? 'md:pr-12' : 'md:ml-auto md:pl-12'"
    >
      <!-- Date range badge -->
      <div class="mb-4">
        <span class="inline-block rounded-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-sm">
          {{ formatDateRange }}
          <span v-if="group.hasOngoingExperience" class="ml-2 inline-block size-2 rounded-full bg-green-500"></span>
        </span>
      </div>

      <!-- Experiences grid (stacks on mobile, up to 2 columns when several overlap) -->
      <div
        class="grid gap-4"
        :class="{ 'sm:grid-cols-2': group.experiences.length > 1 }"
      >
        <ExperienceCard
          v-for="experience in group.experiences"
          :key="experience.title + (experience.company || experience.school)"
          :experience="experience"
          :is-left="isLeft"
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
  isLeft: boolean
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
</script>
