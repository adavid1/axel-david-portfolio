<script setup lang="ts">
import { ref } from 'vue'

const experiences = ref([
    {
      title: 'IT Engineer',
      company: 'Astek',
      location: 'Rennes, France',
      type: 'Full-time',
      startDate: '2021-01-01',
      endDate: '2024-12-20',
      description: '',
      stack: []
    },
    {
      title: 'Apprentice IT Engineer',
      company: 'GENERAL ELECTRIC',
      location: 'Belfort, France',
      type: 'Apprenticeship',
      startDate: '2017-09-01',
      endDate: '2020-08-31',
      description: 'Sandwich course with UTBM | REMOTE 💻' +
'- Developed applications to eliminate paper usage (C#, WPF)' +
'- Created databases related to the applications (SQL, MS SQL Server)' +
'- Worked directly with end-users' +
'- Used agile methodologies to structure projects' +
'- Worked for 2 years within the quality department based in the factory' +
'- Trained users' +
'- Wrote structural documentation',
      stack: ['C#', 'WPF', 'SQL', 'MS SQL Server']
    }
  ])

  const astekExperiences = [
  {
      title: 'Full Stack Developer',
      company: 'Ateme',
      location: 'Rennes, France',
      type: 'Indirect Contract',
      startDate: '2022-09-01',
      endDate: '2024-12-20',
      description: 'REMOTE 💻' +
'- Development across the stack: frontend (VueJs), backend (NodeJs, Express, GraphQL), integration (Docker, Kubernetes)' +
'- Participate in scrum ceremonies: sprint planning, daily standups, sprint reviews, retrospectives' +
'- Code quality and best practices: code reviews, testing (Jest, pytest), documentation writing' +
'- Problem solving and troubleshooting: debugging, performance optimization',
      stack: ['VueJs', 'NodeJs', 'Express', 'GraphQL', 'Docker', 'Kubernetes', 'Jest', 'pytest']
    },
    {
      title: 'IT Engineer',
      company: 'Astek',
      location: 'Rennes, France',
      type: 'Full-time',
      startDate: '2021-01-01',
      endDate: '2024-12-20',
      description: '',
      stack: []
    },
    {
      title: 'Database Administrator & Developer',
      company: 'NAVAL GROUP',
      location: 'Brest, France',
      type: 'Indirect Contract',
      startDate: '2021-08-01',
      endDate: '2022-08-31',
      description: '- Ensured the operational maintenance and stability of the X3 software' +
'- Provided comprehensive support for the X3 software at Levels 1, 2, and 3' +
'- Conducted data extractions from X3 for migration to the eBusiness Suite R12' +
'- Archived X3 data using the MEMORY system' +
'- Finalized documentation related to the archiving of production management data (GPAO)' +
'- Coordinated and supervised the deletion of automatic scheduling plans' +
'- Decommissioned servers utilized by GPAO NA Cherbourg' +
'- Automated daily SQL data extractions using Visual Basic',
      stack: ['X3', 'eBusiness Suite R12', 'MEMORY system', 'GPAO', 'Visual Basic']
    },
    {
      title: 'Database Developer',
      company: 'Fives Syleps',
      location: 'Lorient, France',
      type: 'Indirect Contract',
      startDate: '2020-12-01',
      endDate: '2021-07-31',
      description: 'REMOTE 💻' +
'- Software development (C#, PL/SQL)' +
'- Integration of tools' +
'- Software configuration' +
'- Support and training' +
'- Activity reporting',
      stack: ['C#', 'PL/SQL', 'Oracle']
    }
  ]
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold">Experience</h2>
    <ul>
      <li class="flex flex-row p-4 my-4 bg-gray-100 rounded-lg text-gray-800">
        <div class="w-1/4">
          <h3 class="text-lg font-semibold">Astek</h3>
          <p class="text-sm">Rennes, France</p>
          <p class="text-sm">Full-time</p>
          <p class="text-sm">2021-01-01 - 2024-12-20</p>
        </div>
        <div class="w-3/4 flex flex-col">
          <div v-for="experience in astekExperiences" :key="experience.title" class="flex flex-col mb-4">
            <h3 class="text-lg font-semibold">{{ experience.title }}</h3>
            <p class="text-sm">{{ experience.company }}</p>
            <p class="text-sm">{{ experience.startDate }} - {{ experience.endDate }}</p>
            <p class="text-sm">{{ experience.description }}</p>
          </div>
        </div>
      </li>
      <li v-for="experience in experiences" :key="experience.title" class="p-4 my-4 bg-gray-100 rounded-lg text-gray-800">
        <h3 class="text-lg font-semibold">{{ experience.title }}</h3>
        <p class="text-sm">{{ experience.company }}</p>
        <p class="text-sm">{{ experience.startDate }} - {{ experience.endDate }}</p>
        <p class="text-sm">{{ experience.description }}</p>
      </li>
    </ul>
  </div>
</template>
