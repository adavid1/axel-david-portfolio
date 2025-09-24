<template>
  <div class="relative">
    <!-- Timeline dot -->
    <div class="absolute left-0 top-8 z-20 flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 shadow-lg md:left-1/2 md:-translate-x-1/2">
      <div class="size-3 rounded-full bg-white"></div>
    </div>
    
    <!-- Mobile layout: simple left margin -->
    <div class="ml-12 md:hidden">
      <!-- Date range indicator -->
      <div class="mb-4 text-left">
        <span class="inline-block rounded-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-sm">
          {{ formatDateRange }}
          <span v-if="group.hasOngoingExperience" class="ml-2 inline-block size-2 rounded-full bg-green-500"></span>
        </span>
      </div>
      
      <!-- Experiences grid -->
      <div class="grid grid-cols-1 gap-4">
        <ExperienceCard
          v-for="experience in group.experiences"
          :key="experience.title + (experience.company || experience.school)"
          :experience="experience"
          @click="handleExperienceClick(experience)"
        />
      </div>
    </div>
    
    <!-- Desktop layout: alternating sides with clear separation -->
    <div class="hidden md:block">
      <div class="flex">
        <!-- Left side content -->
        <div 
          class="w-1/2 pr-12"
          :class="{ 'invisible': !isLeft }"
        >
          <div v-if="isLeft">
            <!-- Date range indicator -->
            <div class="mb-4">
              <span class="inline-block rounded-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-sm">
                {{ formatDateRange }}
                <span v-if="group.hasOngoingExperience" class="ml-2 inline-block size-2 rounded-full bg-green-500"></span>
              </span>
            </div>
            
            <!-- Experiences grid -->
            <div 
              class="grid gap-4"
              :class="{
                'grid-cols-1': group.experiences.length === 1,
                'grid-cols-2': group.experiences.length === 2,
                'grid-cols-3': group.experiences.length > 2
              }"
            >
              <ExperienceCard
                v-for="experience in group.experiences"
                :key="experience.title + (experience.company || experience.school)"
                :experience="experience"
                :isLeft="isLeft"
                @click="handleExperienceClick(experience)"
              />
            </div>
          </div>
        </div>
        
        <!-- Right side content -->
        <div 
          class="w-1/2 pl-12"
          :class="{ 'invisible': isLeft }"
        >
          <div v-if="!isLeft">
            <!-- Date range indicator -->
            <div class="mb-4">
              <span class="inline-block rounded-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-sm">
                {{ formatDateRange }}
                <span v-if="group.hasOngoingExperience" class="ml-2 inline-block size-2 rounded-full bg-green-500"></span>
              </span>
            </div>
            
            <!-- Experiences grid -->
            <div 
              class="grid gap-4"
              :class="{
                'grid-cols-1': group.experiences.length === 1,
                'grid-cols-2': group.experiences.length === 2,
                'grid-cols-3': group.experiences.length > 2
              }"
            >
              <ExperienceCard
                v-for="experience in group.experiences"
                :key="experience.title + (experience.company || experience.school)"
                :experience="experience"
                :isLeft="isLeft"
                @click="handleExperienceClick(experience)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import { Experience } from '@/types'

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

function handleExperienceClick(experience: Experience) {
  emit('experience-click', experience)
}

const formatDateRange = computed(() => {
  const startDate = new Date(props.group.startDate)
  const endDate = new Date(props.group.endDate)
  const now = new Date()
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    })
  }
  
  const start = formatDate(startDate)
  const end = endDate.getTime() > now.getTime() - 86400000 ? 'Present' : formatDate(endDate)
  
  return start === end ? start : `${start} - ${end}`
})
</script>