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
          class="mr-4 flex w-1/4 flex-col justify-center rounded-3xl border-8 border-[#271252] bg-[#4b248e] p-4 text-gray-200"
          :entreprise-exp="astekExp"
        />
        <div class="flex w-3/4 flex-col space-y-4">
          <EnterpriseExperienceComponent
            v-for="mission in astekMissions"
            :key="mission.title"
            class="flex flex-col rounded-3xl border-8 border-[#271252] bg-[#4b248e] p-4 text-gray-200"
            :entreprise-exp="mission"
          />
        </div>
      </li>
      <li class="mb-4 flex flex-row space-x-4">
        <SchoolExperienceComponent
          class="flex w-1/2 flex-col justify-center rounded-3xl border-8 border-indigo-950 bg-indigo-900 p-4 text-gray-200"
          :school-exp="utbmSchool"
        />
        <EnterpriseExperienceComponent
          class="flex w-1/2 flex-col justify-center rounded-3xl border-8 border-[#271252] bg-[#4b248e] p-4 text-gray-200"
          :entreprise-exp="geApprenticeship"
        />
      </li>
      <SchoolExperienceComponent
        class="rounded-3xl border-8 border-indigo-950 bg-indigo-900 p-4 text-gray-200"
        :school-exp="iutSchool"
      />
    </ul>
  </div>
</template>
