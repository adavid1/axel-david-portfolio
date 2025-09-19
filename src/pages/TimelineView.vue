<script setup lang="ts">
import { computed } from "vue"
import EnterpriseExperienceComponent from "@/components/EnterpriseExperienceComponent.vue"
import SchoolExperienceComponent from "@/components/SchoolExperienceComponent.vue"

import { breizhcardExp, astekExp, astekMissions, geApprenticeship, iutSchool, utbmSchool } from "@/data/experiences"

const now = computed(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = Number('0' + dd);
    if (mm < 10) mm = Number('0' + mm);

    return dd + '-' + mm + '-' + yyyy;
})

const [day, month, year] = iutSchool.startDate.split("-")
const firstExpDate = new Date(Number(year), Number(month) - 1, Number(day))

const monthsSinceFirstExp = computed(() => {
  const now = new Date()
  return (now.getFullYear() - firstExpDate.getFullYear()) * 12 + (now.getMonth() - firstExpDate.getMonth())
})

const yearCount = computed(() => Math.ceil(monthsSinceFirstExp.value / 12)) // Number of years since the first experience
const monthsOffset = computed(() => new Date().getMonth() + 1) // months since the start of the current year

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
    <!-- YEAR LINES -->
    <div
      v-for="yearIndex in yearCount"
      :key="yearIndex"
      class="col-span-6 flex items-center border-t border-gray-400 text-xs text-gray-500"
      :style="{ gridRow: `${(yearIndex - 1) * 12 + monthsOffset}` }"
    >
      <span class="ml-2">
        {{ new Date().getFullYear() - yearIndex + 1 }}
      </span>
    </div>

    <!-- EXPERIENCE COMPONENTS -->
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
