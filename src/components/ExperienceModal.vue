<template>
    <Teleport to="body">
      <div 
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="closeModal"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        
        <!-- Modal content -->
        <div 
          class="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-2xl"
          @click.stop
        >
          <!-- Header -->
          <div class="mb-6 flex items-start justify-between">
            <div>
              <h2 class="text-2xl font-bold text-white">{{ experience.title }}</h2>
              <p class="text-lg text-violet-300">
                {{ experience.company || experience.school }}
              </p>
              <p class="text-sm text-gray-400">
                {{ formatDateRange(experience.startDate, experience.endDate) }}
              </p>
            </div>
            
            <button 
              @click="closeModal"
              class="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
            >
              <svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Description -->
          <div class="mb-6">
            <h3 class="mb-3 text-lg font-semibold text-white">Description</h3>
            <p class="whitespace-pre-line leading-relaxed text-gray-300">
              {{ experience.description }}
            </p>
          </div>
          
          <!-- Tech Stack -->
          <div v-if="experience.stack && experience.stack.length > 0" class="mb-6">
            <h3 class="mb-3 text-lg font-semibold text-white">Technologies Used</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in experience.stack"
                :key="tech"
                class="rounded-lg border border-violet-500/30 bg-violet-600/20 px-3 py-1 text-sm text-violet-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          
          <!-- Missions (for Astek) -->
          <div v-if="experience.missions && experience.missions.length > 0" class="mb-6">
            <h3 class="mb-3 text-lg font-semibold text-white">Client Missions</h3>
            <div class="space-y-4">
              <div
                v-for="mission in experience.missions"
                :key="mission.title"
                class="rounded-lg border border-gray-700/50 bg-gray-800/30 p-4"
              >
                <h4 class="mb-2 font-semibold text-white">{{ mission.company }}</h4>
                <p class="mb-2 text-sm text-violet-300">{{ mission.title }}</p>
                <p class="mb-3 text-xs text-gray-400">
                  {{ formatDateRange(mission.startDate, mission.endDate) }}
                </p>
                <p class="text-sm text-gray-300">{{ mission.description }}</p>
                
                <!-- Mission tech stack -->
                <div v-if="mission.stack && mission.stack.length > 0" class="mt-3">
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="tech in mission.stack"
                      :key="tech"
                      class="rounded border border-gray-600/30 bg-gray-600/10 px-2 py-1 text-xs text-gray-300"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Location -->
          <div v-if="experience.location" class="flex items-center text-sm text-gray-400">
            <svg class="mr-2 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ experience.location }}
          </div>
        </div>
      </div>
    </Teleport>
  </template>
  
  <script setup lang="ts">
import { Experience } from '@/types';

  interface Props {
    isOpen: boolean
    experience: Experience
  }
  
  interface Emits {
    (e: 'close'): void
  }
  
  defineProps<Props>()
  const emit = defineEmits<Emits>()
  
  function closeModal() {
    emit('close')
  }
  
  function formatDateRange(startDate: string, endDate: string | null | undefined): string {
    const parseDate = (dateStr: string) => {
      const [day, month, year] = dateStr.split('-')
      return new Date(Number(year), Number(month) - 1, Number(day))
    }
    
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
      })
    }
    
    const start = formatDate(parseDate(startDate))
    const end = endDate ? formatDate(parseDate(endDate)) : 'Present'
    
    return start === end ? start : `${start} - ${end}`
  }
  </script>