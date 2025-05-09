<script setup lang="ts">
import EnterpriseExperienceComponent from "@/components/EnterpriseExperienceComponent.vue"
import SchoolExperienceComponent from "@/components/SchoolExperienceComponent.vue"

import { breizhcardExp, astekExp, astekMissions, geApprenticeship, iutSchool, utbmSchool } from "@/experienceData.ts"
import { computed } from "vue"

const now = computed(() => {
  const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = Number('0' + dd);
    if (mm < 10) mm = Number('0' + mm);

    return dd + '-' + mm + '-' + yyyy;
})

const monthsSinceFirstExp = computed(() => {
  const [day, month, year] = iutSchool.startDate.split("-")
  const firstExpDate = new Date(Number(year), Number(month) - 1, Number(day))
  const currentDate = new Date()
  const diffTime = Math.abs(currentDate.getTime() - firstExpDate.getTime())
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44)) // Average month length
  return diffMonths
})

function monthsBetween(startDate: string, endDate: string | null): number {
  if (!endDate) endDate = now.value
  const [startDay, startMonth, startYear] = startDate.split("-")
  const [endDay, endMonth, endYear] = endDate.split("-")
  const start = new Date(Number(startYear), Number(startMonth) - 1, Number(startDay))
  const end = new Date(Number(endYear), Number(endMonth) - 1, Number(endDay))
  const diffTime = Math.abs(end.getTime() - start.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44)) // Average month length
}

</script>

<template>
  <div
    class="grid grid-cols-6"
    :style="{ gridTemplateRows: `repeat(${monthsSinceFirstExp}, 15px)` }"
  >
    <EnterpriseExperienceComponent
      class="col-span-2"
      :style="{
        gridRow: `${monthsBetween(now, breizhcardExp.endDate) | 1} / span ${monthsBetween(breizhcardExp.startDate, breizhcardExp.endDate)}`
      }"
      :entreprise-exp="breizhcardExp"
    />
    <EnterpriseExperienceComponent
      class="col-span-2"
      :style="{
        gridRow: `${monthsBetween(now, astekExp.endDate)} / span ${monthsBetween(astekExp.startDate, astekExp.endDate)}`
      }"
      :entreprise-exp="astekExp"
    />
    <EnterpriseExperienceComponent
      v-for="mission in astekMissions"
      :key="mission.title"
      class="col-span-2"
      :style="{
        gridRow: `${monthsBetween(now, mission.endDate)} / span ${monthsBetween(mission.startDate, mission.endDate)}`
      }"
      :entreprise-exp="mission"
    />
    <EnterpriseExperienceComponent
      class="col-span-2"
      :style="{
        gridRow: `${monthsBetween(now, geApprenticeship.endDate)} / span ${monthsBetween(geApprenticeship.startDate, geApprenticeship.endDate)}`
      }"
      :entreprise-exp="geApprenticeship"
    />
    <SchoolExperienceComponent
      class="col-span-2"
      :style="{
        gridRow: `${monthsBetween(now, utbmSchool.endDate)} / span ${monthsBetween(utbmSchool.startDate, utbmSchool.endDate)}`
      }"
      :school-exp="utbmSchool"
    />
    <SchoolExperienceComponent
      class="col-span-2"
      :style="{
        gridRow: `${monthsBetween(now, iutSchool.endDate)} / span ${monthsBetween(iutSchool.startDate, iutSchool.endDate)}`,
      }"
      :school-exp="iutSchool"
    />
  </div>
</template>
