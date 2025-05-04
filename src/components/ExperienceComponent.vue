<script setup lang="ts">
import EnterpriseExperienceComponent from "@/components/EnterpriseExperienceComponent.vue"
import SchoolExperienceComponent from "@/components/SchoolExperienceComponent.vue"

import { astekExp, astekMissions, geApprenticeship, iutSchool, utbmSchool } from "@/experienceData.ts"

</script>

<template>
  <div>
    <ul>
      <li class="mb-4 flex flex-row">
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
      </li>
      <li class="mb-4 flex flex-row space-x-4">
        <SchoolExperienceComponent
          class="flex w-1/2 flex-col justify-center rounded-lg border-2 border-blue-500 bg-blue-100 p-4 text-gray-800"
          :school-exp="utbmSchool"
        />
        <EnterpriseExperienceComponent
          class="flex w-1/2 flex-col justify-center rounded-lg border-2 border-green-500 bg-green-100 p-4 text-gray-800"
          :entreprise-exp="geApprenticeship"
        />
      </li>
      <SchoolExperienceComponent
        class="rounded-lg border-2 border-blue-500 bg-blue-100 p-4 text-gray-800"
        :school-exp="iutSchool"
      />
    </ul>
  </div>
</template>
