<template>
  <div
    class="group relative cursor-pointer rounded-2xl border border-gray-800/50 bg-gray-900/50 p-6 transition-all duration-300 hover:border-violet-500/30 hover:shadow-xl md:hover:-translate-y-1"
    @click="$emit('click')"
  >
    <!-- External link, anchored top-right of the card -->
    <a
      v-if="experience.companyLink || experience.schoolLink"
      :href="experience.companyLink || experience.schoolLink"
      target="_blank"
      rel="noopener noreferrer"
      class="absolute right-4 top-4 z-10 flex size-6 items-center justify-center rounded-full bg-gray-800/50 text-gray-400 transition-colors hover:bg-violet-600/20 hover:text-violet-400"
      @click.stop
    >
      <svg class="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>

    <!--
      Mobile-first: everything stacks in a single column.
      When the card is alone in its period (`!compact`), from md up the main info
      moves left and the meta (dates / location / stack) right, so it fills the full
      width. When several experiences share the period the card stays compact so two
      can sit side by side without cramping.
    -->
    <div
      class="flex flex-col gap-5"
      :class="{ 'md:flex-row md:items-start md:justify-between md:gap-8': !compact }"
    >
      <!-- Main info -->
      <div class="min-w-0 flex-1 space-y-3 pr-8" :class="{ 'md:pr-0': !compact }">
        <!-- Type indicator -->
        <div class="flex items-center space-x-2">
          <div
            class="flex size-8 shrink-0 items-center justify-center rounded-full"
            :class="typeConfig.bgColor"
          >
            <svg class="size-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="typeConfig.iconPath" />
            </svg>
          </div>
          <span
            class="text-xs font-medium uppercase tracking-wider"
            :class="typeConfig.textColor"
          >
            {{ $t(typeConfig.label) }}
          </span>
        </div>

        <!-- Title -->
        <h3 class="text-lg font-bold leading-tight text-white">
          {{ $t(experience.title) }}
        </h3>

        <!-- Institution/Company -->
        <div class="space-y-1">
          <p
            class="font-medium transition-colors"
            :class="typeConfig.textColor"
          >
            {{ institution }}
          </p>

          <!-- Consulting company reference -->
          <p v-if="experience.consultingCompany" class="text-xs text-gray-500">
            via
            <a
              :href="experience.consultingCompanyLink"
              target="_blank"
              rel="noopener noreferrer"
              class="text-violet-400 transition-colors hover:text-violet-300"
              @click.stop
            >
              {{ experience.consultingCompany }}
            </a>
          </p>
        </div>
      </div>

      <!-- Meta column: dates, location, stack -->
      <div
        class="space-y-3"
        :class="{
          'md:max-w-xs md:shrink-0 md:text-right': !compact,
          'md:pr-8': !compact && hasExternalLink,
        }"
      >
        <!-- Date range -->
        <p class="text-sm text-gray-400">
          {{ dateRange }}
          <span v-if="!experience.endDate" class="ml-1 inline-block size-2 rounded-full bg-green-500"></span>
        </p>

        <!-- Location (if available) -->
        <p v-if="experience.location" class="flex items-center text-sm text-gray-500" :class="{ 'md:justify-end': !compact }">
          <svg class="mr-1 size-3" :class="{ 'md:order-2 md:ml-1 md:mr-0': !compact }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span :class="{ 'md:order-1': !compact }">{{ experience.location }}</span>
        </p>

        <!-- Tech stack -->
        <div v-if="experience.stack && experience.stack.length > 0">
          <div class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            {{ $t('timeline.techStack') }}
          </div>
          <div class="flex flex-wrap gap-1" :class="{ 'md:justify-end': !compact }">
            <span
              v-for="tech in experience.stack.slice(0, 4)"
              :key="tech"
              class="rounded border px-2 py-1 text-xs transition-all"
              :class="typeConfig.stackClasses"
            >
              {{ tech }}
            </span>
            <span
              v-if="experience.stack.length > 4"
              class="rounded border border-gray-600/30 bg-gray-600/10 px-2 py-1 text-xs text-gray-400"
            >
              +{{ experience.stack.length - 4 }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Hover effect overlay -->
    <div
      class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      :class="typeConfig.hoverOverlay"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { formatDateRange } from '@/utils'

interface Props {
  experience: {
    title: string
    company?: string
    school?: string
    companyLink?: string
    schoolLink?: string
    startDate: string
    endDate?: string | null
    location?: string
    stack?: string[]
    type: 'work' | 'education'
    category?: string
    consultingCompany?: string
    consultingCompanyLink?: string
  }
  /** Forces the compact single-column layout (used when cards sit side by side). */
  compact?: boolean
}

interface Emits {
  (e: 'click'): void
}

const props = defineProps<Props>()
defineEmits<Emits>()

const { t, locale } = useI18n({ useScope: 'global' })

const hasExternalLink = computed(() => !!(props.experience.companyLink || props.experience.schoolLink))
const institution = computed(() => props.experience.company || t(props.experience.school || ''))
const dateRange = computed(() =>
  formatDateRange(props.experience.startDate, props.experience.endDate, locale.value, t('common.present'))
)

const typeConfig = computed(() => {
  if (props.experience.type === 'education') {
    return {
      iconPath: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14zm-4 6v-7.5l4-2.222',
      label: 'expTypes.education',
      bgColor: 'bg-gradient-to-br from-amber-500 to-orange-600',
      textColor: 'text-amber-300',
      stackClasses: 'border-amber-400/30 bg-amber-400/10 text-amber-200',
      hoverOverlay: 'bg-gradient-to-r from-amber-600/10 to-orange-600/10'
    }
  }
  
  // Work experience
  const category = props.experience.category
  
  if (category === 'volunteer') {
    return {
      iconPath: 'M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z',
      label: 'expTypes.volunteer',
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-300',
      stackClasses: 'border-green-400/30 bg-green-400/10 text-green-200',
      hoverOverlay: 'bg-gradient-to-r from-green-600/10 to-emerald-600/10'
    }
  }
  
  if (category === 'apprenticeship') {
    return {
      iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      label: 'expTypes.apprenticeship',
      bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-300',
      stackClasses: 'border-blue-400/30 bg-blue-400/10 text-blue-200',
      hoverOverlay: 'bg-gradient-to-r from-blue-600/10 to-indigo-600/10'
    }
  }
  
  if (category === 'freelance') {
    return {
      iconPath: 'M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z',
      label: 'expTypes.freelance',
      bgColor: 'bg-gradient-to-br from-cyan-500 to-teal-600',
      textColor: 'text-cyan-300',
      stackClasses: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200',
      hoverOverlay: 'bg-gradient-to-r from-cyan-600/10 to-teal-600/10'
    }
  }

  // Default work experience
  return {
    iconPath: 'M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z',
    label: 'expTypes.professional',
    bgColor: 'bg-gradient-to-br from-violet-500 to-purple-600',
    textColor: 'text-violet-300',
    stackClasses: 'border-violet-400/30 bg-violet-400/10 text-violet-200',
    hoverOverlay: 'bg-gradient-to-r from-violet-600/10 to-purple-600/10'
  }
})
</script>