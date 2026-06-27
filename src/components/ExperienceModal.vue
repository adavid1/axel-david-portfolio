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
              <h2 class="text-2xl font-bold text-white">{{ $t(experience.title) }}</h2>
              <p class="text-lg text-violet-300">
                {{ institution }}
              </p>
              <p class="text-sm text-gray-400">
                {{ dateRange }}
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
            <h3 class="mb-3 text-lg font-semibold text-white">{{ $t('modal.description') }}</h3>
            <p class="whitespace-pre-line leading-relaxed text-gray-300">
              {{ $t(experience.description) }}
            </p>
          </div>

          <!-- Tech Stack -->
          <div v-if="experience.stack && experience.stack.length > 0" class="mb-6">
            <h3 class="mb-3 text-lg font-semibold text-white">{{ $t('modal.technologies') }}</h3>
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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Experience } from '@/types'
import { formatDateRange } from '@/utils'

  interface Props {
    isOpen: boolean
    experience: Experience
  }

  interface Emits {
    (e: 'close'): void
  }

  const props = defineProps<Props>()
  const emit = defineEmits<Emits>()

  const { t, locale } = useI18n({ useScope: 'global' })

  const institution = computed(() => props.experience.company || t(props.experience.school || ''))
  const dateRange = computed(() =>
    formatDateRange(props.experience.startDate, props.experience.endDate, locale.value, t('common.present'), 'long')
  )

  function closeModal() {
    emit('close')
  }
  </script>