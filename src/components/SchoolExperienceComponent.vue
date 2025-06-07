<script setup lang="ts">
import ExperienceCard from "@/components/ExperienceCard.vue"

const props = defineProps({
    schoolExp: {
        type: Object,
        required: true,
    },
})
</script>

<template>
  <ExperienceCard 
    :title="props.schoolExp.title"
    :institution="props.schoolExp.school"
    :link="props.schoolExp.schoolLink"
    :start-date="props.schoolExp.startDate"
    :end-date="props.schoolExp.endDate"
    :description="props.schoolExp.description"
    color="violet"
    :is-school="true"
  />
</template>