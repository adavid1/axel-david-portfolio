<script setup lang="ts">
import ExperienceCard from "@/components/ExperienceCard.vue"

const props = defineProps({
    entrepriseExp: {
        type: Object,
        required: true,
    },
})
</script>

<template>
  <ExperienceCard 
    class="border-purple-950 bg-purple-900"
    :title="props.entrepriseExp.title"
    :institution="props.entrepriseExp.company"
    :link="props.entrepriseExp.companyLink"
    :start-date="props.entrepriseExp.startDate"
    :end-date="props.entrepriseExp.endDate"
    :description="props.entrepriseExp.description"
  />
</template>