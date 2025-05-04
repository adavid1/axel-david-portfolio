<script setup lang="ts">
import EnterpriseExperienceComponent from "@/components/EnterpriseExperienceComponent.vue"
import SchoolExperienceComponent from "@/components/SchoolExperienceComponent.vue"
import { formatDate } from "@/utils.ts"

import {
  astekExp,
  astekMissions,
  geApprenticeship,
  iutSchool,
  utbmSchool
} from "@/experienceData.ts"
</script>

<template>
  <div class="relative flex flex-col space-y-4">
    <!-- EXPERIENCE BLOCK 1 -->
    <div class="relative flex flex-row space-x-4">
      <!-- Year -->
      <div class="flex w-16 justify-end pr-2">
        <span class="absolute -translate-y-1/2 text-sm text-gray-400">{{ $t('now') }}</span>
      </div>

      <!-- Experience Content -->
      <EnterpriseExperienceComponent
        class="mr-4 flex w-1/4 flex-col justify-center rounded-lg border-2 border-green-500 bg-green-100 p-4 text-gray-800"
        :entreprise-exp="astekExp"
      />
      <div class="flex w-3/4 flex-col space-y-4">
        <EnterpriseExperienceComponent
          v-for="mission in astekMissions"
          :key="mission.title"
          class="flex flex-col rounded-lg border-2 border-green-500 bg-green-100 p-4 text-gray-800"
          :entreprise-exp="mission"
        />
      </div>
    </div>

    <!-- EXPERIENCE BLOCK 2 -->
    <div class="relative flex flex-row space-x-4">
      <div class="flex w-16 justify-end pr-2">
        <span class="absolute -translate-y-1/2 text-sm text-gray-400">{{ formatDate(geApprenticeship.endDate) }}</span>
      </div>
      <SchoolExperienceComponent
        class="flex w-1/2 flex-col justify-center rounded-lg border-2 border-blue-500 bg-blue-100 p-4 text-gray-800"
        :school-exp="utbmSchool"
      />
      <EnterpriseExperienceComponent
        class="flex w-1/2 flex-col justify-center rounded-lg border-2 border-green-500 bg-green-100 p-4 text-gray-800"
        :entreprise-exp="geApprenticeship"
      />
    </div>

    <!-- EXPERIENCE BLOCK 3 -->
    <div class="relative flex flex-row space-x-4">
      <div class="flex w-16 justify-end pr-2">
        <span class="absolute -translate-y-1/2 text-sm text-gray-400">{{ formatDate(iutSchool.endDate) }}</span>
      </div>
      <SchoolExperienceComponent
        class="w-full rounded-lg border-2 border-blue-500 bg-blue-100 p-4 text-gray-800"
        :school-exp="iutSchool"
      />
    </div>
  </div>
</template>
