<template>
  <div class="min-h-screen px-4 py-12">
    <div class="mx-auto max-w-6xl">
      <!-- Header -->
      <div class="mb-16 text-center">
        <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">
          Professional Timeline
        </h1>
        <p class="mx-auto max-w-3xl text-xl text-gray-300">
          My journey from student to full-stack developer - experience, education, and continuous growth
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line positioned between content areas, not over them -->
        <div class="absolute left-4 top-0 z-0 h-full w-0.5 bg-gradient-to-b from-violet-600 via-purple-500 to-pink-500 md:left-1/2 md:-translate-x-0.5"></div>
        
        <!-- Content with proper spacing to avoid line overlap -->
        <div class="relative z-10 space-y-12">
          <TimelineGroup
            v-for="(group, index) in timelineGroups"
            :key="`group-${index}`"
            :group="group"
            :is-left="index % 2 === 0"
            @experience-click="openExperienceModal"
          />
        </div>
      </div>
    </div>

    <!-- Experience Modal -->
    <ExperienceModal 
      :is-open="!!selectedExperience"
      :experience="selectedExperience as Experience"
      @close="selectedExperience = null"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TimelineGroup from '@/components/TimelineGroup.vue'
import ExperienceModal from '@/components/ExperienceModal.vue'
import { Experience } from '@/types'
import { 
  breizhcardExp, 
  fivesSylepsMission,
  navalGroupMission, 
  atemeMission,
  geApprenticeship, 
  iutSchool, 
  utbmSchool 
} from '@/data/experiences'

const selectedExperience = ref<Experience | null>(null)

function openExperienceModal(experience: Experience) {
  selectedExperience.value = experience
}

// Helper function to parse dates
function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split('-')
  return new Date(Number(year), Number(month) - 1, Number(day))
}

// Helper function to check if experiences overlap
function doPeriodsOverlap(exp1: Experience, exp2: Experience): boolean {
  const start1 = parseDate(exp1.startDate)
  const end1 = exp1.endDate ? parseDate(exp1.endDate) : new Date()
  const start2 = parseDate(exp2.startDate)
  const end2 = exp2.endDate ? parseDate(exp2.endDate) : new Date()
  
  return start1 <= end2 && start2 <= end1
}

const timelineGroups = computed(() => {
  // All experiences with their types (now using separate missions)
  const allExperiences: Experience[] = [
    { ...breizhcardExp, type: 'work', category: 'volunteer' },
    { ...atemeMission, type: 'work', category: 'mission' },
    { ...navalGroupMission, type: 'work', category: 'mission' },
    { ...fivesSylepsMission, type: 'work', category: 'mission' },
    { ...geApprenticeship, type: 'work', category: 'apprenticeship' },
    { ...utbmSchool, type: 'education', category: 'university' },
    { ...iutSchool, type: 'education', category: 'technical' }
  ]

  // Sort by start date (most recent first)
  const sortedExperiences = [...allExperiences].sort((a, b) => 
    parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime()
  )

  const groups = []
  const processedExperiences = new Set()

  for (const experience of sortedExperiences) {
    if (processedExperiences.has(experience.title + (experience.company || experience.school))) continue

    // Find overlapping experiences (but don't group Breizhcard with finished experiences)
    const overlappingExps = sortedExperiences.filter(exp => {
      if (processedExperiences.has(exp.title + (exp.company || exp.school))) return false
      if (exp === experience) return true
      
      // Special case: don't group ongoing experiences with finished ones
      const expIsOngoing = !exp.endDate
      const experienceIsOngoing = !experience.endDate
      if (expIsOngoing !== experienceIsOngoing) return false
      
      return doPeriodsOverlap(experience, exp)
    })

    // Create group
    const group = {
      experiences: overlappingExps,
      startDate: Math.min(...overlappingExps.map(exp => parseDate(exp.startDate).getTime())),
      endDate: Math.max(...overlappingExps.map(exp => 
        exp.endDate ? parseDate(exp.endDate).getTime() : Date.now()
      )),
      hasOngoingExperience: overlappingExps.some(exp => !exp.endDate)
    }

    groups.push(group)
    
    // Mark as processed
    overlappingExps.forEach(exp => processedExperiences.add(exp.title + (exp.company || exp.school)))
  }

  return groups.sort((a, b) => b.startDate - a.startDate)
})
</script>