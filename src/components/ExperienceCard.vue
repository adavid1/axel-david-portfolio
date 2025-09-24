<template>
  <div 
    class="group relative h-full cursor-pointer rounded-2xl border border-gray-800/50 bg-gray-900/50 p-6 transition-all duration-300 hover:scale-105 hover:border-violet-500/30 hover:shadow-xl"
    @click="$emit('click')"
  >
    <!-- Type indicator -->
    <div class="mb-4 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <div 
          class="flex size-8 items-center justify-center rounded-full"
          :class="typeConfig.bgColor"
        >
          <component :is="typeConfig.icon" class="size-4 text-white" />
        </div>
        <span 
          class="text-xs font-medium uppercase tracking-wider"
          :class="typeConfig.textColor"
        >
          {{ typeConfig.label }}
        </span>
      </div>
      
      <!-- External link if available -->
      <a 
        v-if="experience.companyLink || experience.schoolLink"
        :href="experience.companyLink || experience.schoolLink"
        target="_blank"
        rel="noopener noreferrer"
        class="flex size-6 items-center justify-center rounded-full bg-gray-800/50 text-gray-400 transition-colors hover:bg-violet-600/20 hover:text-violet-400"
        @click.stop
      >
        <svg class="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>

    <!-- Content -->
    <div class="space-y-3">
      <!-- Title -->
      <h3 class="text-lg font-bold leading-tight text-white">
        {{ experience.title }}
      </h3>
      
      <!-- Institution/Company -->
      <div class="space-y-1">
        <p 
          class="font-medium transition-colors"
          :class="typeConfig.textColor"
        >
          {{ experience.company || experience.school }}
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
      
      <!-- Date range -->
      <p class="text-sm text-gray-400">
        {{ formatDateRange(experience.startDate, experience.endDate) }}
        <span v-if="!experience.endDate" class="ml-1 inline-block size-2 rounded-full bg-green-500"></span>
      </p>
      
      <!-- Location (if available) -->
      <p v-if="experience.location" class="flex items-center text-sm text-gray-500" :class="{ 'flex-row-reverse': !isLeft }">
        <svg class="mx-1 size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {{ experience.location }}
      </p>
      
      <!-- Tech stack for work experiences -->
      <div v-if="experience.stack && experience.stack.length > 0" class="mt-4">
        <div class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400" :class="{ 'text-right': !isLeft, 'text-left': isLeft }">
          Tech Stack
        </div>
        <div class="flex flex-wrap gap-1" :class="{ 'flex-row-reverse': !isLeft }">
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

    <!-- Hover effect overlay -->
    <div 
      class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      :class="typeConfig.hoverOverlay"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

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
  },
  isLeft: boolean
}

interface Emits {
  (e: 'click'): void
}

const props = defineProps<Props>()
defineEmits<Emits>()

const typeConfig = computed(() => {
  if (props.experience.type === 'education') {
    return {
      icon: 'AcademicCapIcon',
      label: 'Education',
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
      icon: 'HeartIcon',
      label: 'Volunteer',
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-300',
      stackClasses: 'border-green-400/30 bg-green-400/10 text-green-200',
      hoverOverlay: 'bg-gradient-to-r from-green-600/10 to-emerald-600/10'
    }
  }
  
  if (category === 'apprenticeship') {
    return {
      icon: 'CogIcon',
      label: 'Apprenticeship',
      bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-300',
      stackClasses: 'border-blue-400/30 bg-blue-400/10 text-blue-200',
      hoverOverlay: 'bg-gradient-to-r from-blue-600/10 to-indigo-600/10'
    }
  }
  
  // Default work experience
  return {
    icon: 'BriefcaseIcon',
    label: 'Professional',
    bgColor: 'bg-gradient-to-br from-violet-500 to-purple-600',
    textColor: 'text-violet-300',
    stackClasses: 'border-violet-400/30 bg-violet-400/10 text-violet-200',
    hoverOverlay: 'bg-gradient-to-r from-violet-600/10 to-purple-600/10'
  }
})

function formatDateRange(startDate: string, endDate: string | null | undefined): string {
  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split('-')
    return new Date(Number(year), Number(month) - 1, Number(day))
  }
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    })
  }
  
  const start = formatDate(parseDate(startDate))
  const end = endDate ? formatDate(parseDate(endDate)) : 'Present'
  
  return start === end ? start : `${start} - ${end}`
}
</script>