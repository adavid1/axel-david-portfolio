<script setup lang="ts">
import { ref } from "vue"

const astekExp = ref({
  title: "IT Engineer",
  company: "Astek",
  location: "Rennes, France",
  type: "Full-time",
  startDate: "2021-01-01",
  endDate: "2024-12-20",
  description: "",
  stack: [],
})

const geAprenticeship = ref({
  title: "Apprentice IT Engineer",
  company: "GENERAL ELECTRIC",
  location: "Belfort, France",
  type: "Apprenticeship",
  startDate: "2017-09-01",
  endDate: "2020-08-31",
  description:
  "Sandwich course with UTBM | REMOTE 💻" +
  "- Developed applications to eliminate paper usage (C#, WPF)" +
  "- Created databases related to the applications (SQL, MS SQL Server)" +
  "- Worked directly with end-users" +
  "- Used agile methodologies to structure projects" +
  "- Worked for 2 years within the quality department based in the factory" +
  "- Trained users" +
  "- Wrote structural documentation",
  stack: ["C#", "WPF", "SQL", "MS SQL Server"],
})

const fivesSylepsMission = {
  title: "Database Developer",
  company: "Fives Syleps",
  location: "Lorient, France",
  type: "Indirect Contract",
  startDate: "2020-12-01",
  endDate: "2021-07-31",
  description:
  "REMOTE 💻" +
  "- Software development (C#, PL/SQL)" +
  "- Integration of tools" +
  "- Software configuration" +
  "- Support and training" +
  "- Activity reporting",
  stack: ["C#", "PL/SQL", "Oracle"],
}

const navalGroupMission = {
  title: "Database Administrator & Developer",
  company: "NAVAL GROUP",
  location: "Brest, France",
  type: "Indirect Contract",
  startDate: "2021-08-01",
  endDate: "2022-08-31",
  description:
  "- Ensured the operational maintenance and stability of the X3 software" +
  "- Provided comprehensive support for the X3 software at Levels 1, 2, and 3" +
  "- Conducted data extractions from X3 for migration to the eBusiness Suite R12" +
  "- Archived X3 data using the MEMORY system" +
  "- Finalized documentation related to the archiving of production management data (GPAO)" +
  "- Coordinated and supervised the deletion of automatic scheduling plans" +
  "- Decommissioned servers utilized by GPAO NA Cherbourg" +
  "- Automated daily SQL data extractions using Visual Basic",
  stack: ["X3", "eBusiness Suite R12", "MEMORY system", "GPAO", "Visual Basic"],
}

const atemeMission = {
  title: "Full Stack Developer",
  company: "Ateme",
  location: "Rennes, France",
  type: "Indirect Contract",
  startDate: "2022-09-01",
  endDate: "2024-12-20",
  description:
  "REMOTE 💻" +
  "- Development across the stack: frontend (VueJs), backend (NodeJs, Express, GraphQL), integration (Docker, Kubernetes)" +
  "- Participate in scrum ceremonies: sprint planning, daily standups, sprint reviews, retrospectives" +
  "- Code quality and best practices: code reviews, testing (Jest, pytest), documentation writing" +
  "- Problem solving and troubleshooting: debugging, performance optimization",
  stack: [
  "VueJs",
  "NodeJs",
  "Express",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "Jest",
  "pytest",
  ],
}

const utbmSchool = {
  title: "IT Engineer by apprenticeship",
  school: "Université de Technologie de Belfort-Montbéliard",
  location: "Belfort, France",
  grade: "Master's Degree in Engineering",
  startDate: "2017-09-01",
  endDate: "2020-08-31",
  description:
  "- Complex computer systems: analysis, specification, design, modeling, development, administration, and industrialization" +
  "- Project management and leadership - law - marketing - communication - finance"
}

const astekMissions = ref([
  atemeMission,
  navalGroupMission,
  fivesSylepsMission,
])
</script>

<template>
  <div>
    <ul>
      <li class="mb-4 flex flex-row">
        <div class="mr-4 w-1/4 rounded-lg bg-gray-100 p-4 text-gray-800">
          <h3 class="text-lg font-semibold">
            {{ astekExp.title }}
          </h3>
          <p class="text-sm">
            {{ astekExp.company }}
          </p>
          <p class="text-sm">
            {{ astekExp.startDate }} - {{ astekExp.endDate }}
          </p>
          <p class="text-sm">
            {{ astekExp.description }}
          </p>
        </div>
        <div class="flex w-3/4 flex-col space-y-4">
          <div
            v-for="mission in astekMissions"
            :key="mission.title"
            class="flex flex-col rounded-lg bg-gray-100 p-4 text-gray-800"
          >
            <h3 class="text-lg font-semibold">
              {{ mission.title }}
            </h3>
            <p class="text-sm">
              {{ mission.company }}
            </p>
            <p class="text-sm">
              {{ mission.startDate }} - {{ mission.endDate }}
            </p>
            <p class="text-sm">
              {{ mission.description }}
            </p>
          </div>
        </div>
      </li>
      <li class="mb-4 flex flex-row space-x-4">
        <div class="w-1/2 rounded-lg bg-gray-100 p-4 text-gray-800">
          <h3 class="text-lg font-semibold">
            {{ utbmSchool.title }}
          </h3>
          <p class="text-sm">
            {{ utbmSchool.school }}
          </p>
          <p class="text-sm">
            {{ utbmSchool.startDate }} - {{ utbmSchool.endDate }}
          </p>
          <p class="text-sm">
            {{ utbmSchool.description }}
          </p>
        </div>
        <div class="w-1/2  rounded-lg bg-gray-100 p-4 text-gray-800">
          <h3 class="text-lg font-semibold">
            {{ geAprenticeship.title }}
          </h3>
          <p class="text-sm">
            {{ geAprenticeship.company }}
          </p>
          <p class="text-sm">
            {{ geAprenticeship.startDate }} - {{ geAprenticeship.endDate }}
          </p>
          <p class="text-sm">
            {{ geAprenticeship.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
