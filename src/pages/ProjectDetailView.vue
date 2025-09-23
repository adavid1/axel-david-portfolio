<template>
  <div v-if="project" class="min-h-screen px-4 py-12">
    <div class="mx-auto max-w-4xl">
      <!-- Back Button -->
      <div class="mb-8">
        <RouterLink
          to="/projects"
          class="inline-flex items-center text-violet-400 transition-colors duration-300 hover:text-violet-300"
        >
          <svg class="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </RouterLink>
      </div>

      <!-- Project Header -->
      <div class="mb-12 text-center">
        <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">
          {{ project.title }}
        </h1>
        <p class="mb-6 text-xl text-gray-300">
          {{ project.description }}
        </p>
        <div class="mb-8 flex flex-wrap justify-center gap-2">
          <span
            v-for="tech in project.stack"
            :key="tech"
            class="rounded-full border border-violet-500/30 bg-violet-600/20 px-4 py-2 text-sm text-violet-300"
          >
            {{ tech }}
          </span>
        </div>
        <div class="flex justify-center space-x-4">
          <span class="rounded-full bg-gray-800/50 px-3 py-1 text-sm text-gray-400">
            {{ project.year }}
          </span>
          <a
            :href="project.gitHubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-lg bg-gray-800 px-4 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
          >
            <svg class="mr-2 size-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>

      <!-- Content Sections -->
      <div class="space-y-12">
        <!-- Detailed Description -->
        <div class="rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8">
          <h2 class="mb-6 text-2xl font-bold text-white">Overview</h2>
          <div class="prose prose-invert max-w-none">
            <p class="whitespace-pre-line leading-relaxed text-gray-300">{{ project.detailedDescription }}</p>
          </div>
        </div>

        <!-- Features -->
        <div v-if="project.features && project.features.length > 0" class="rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8">
          <h2 class="mb-6 text-2xl font-bold text-white">Key Features</h2>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
              v-for="(feature, index) in project.features"
              :key="index"
              class="flex items-start space-x-3 rounded-lg bg-gray-800/30 p-4"
            >
              <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-violet-600">
                <svg class="size-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-white">{{ feature.title }}</h3>
                <p class="text-sm text-gray-400">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Technical Challenges -->
        <div v-if="project.challenges && project.challenges.length > 0" class="rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8">
          <h2 class="mb-6 text-2xl font-bold text-white">Technical Challenges</h2>
          <div class="space-y-6">
            <div
              v-for="(challenge, index) in project.challenges"
              :key="index"
              class="border-l-4 border-violet-500 pl-6"
            >
              <h3 class="mb-2 font-semibold text-white">{{ challenge.title }}</h3>
              <p class="mb-3 text-gray-300">{{ challenge.problem }}</p>
              <p class="text-sm text-gray-400"><strong class="text-violet-400">Solution:</strong> {{ challenge.solution }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 404 for non-existent projects -->
  <div v-else class="flex min-h-screen items-center justify-center px-4">
    <div class="text-center">
      <h1 class="mb-4 text-4xl font-bold text-white">Project Not Found</h1>
      <p class="mb-8 text-gray-300">The project you're looking for doesn't exist.</p>
      <RouterLink
        to="/projects"
        class="inline-flex items-center rounded-lg bg-violet-600 px-6 py-3 text-white transition-colors duration-300 hover:bg-violet-700"
      >
        <svg class="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { portfolio, streamingMultichat, bulk, optymoRecordSplitter, bobRaoul, ncg } from '@/data/projects'

const route = useRoute()
const slug = route.params.slug as string

const projects = {
  'portfolio': {
    ...portfolio,
    detailedDescription: `This portfolio website represents a modern approach to personal branding and professional presentation. Built with Vue.js 3 and TypeScript, it showcases clean architecture and contemporary web development practices.

The site features a responsive design that works seamlessly across all devices, with smooth animations and particle effects that create an engaging user experience without compromising performance. The codebase demonstrates best practices in component architecture, type safety, and maintainable code structure.`,
    features: [
      {
        title: "Modern Tech Stack",
        description: "Built with Vue.js 3, TypeScript, and Tailwind CSS for optimal performance and maintainability"
      },
      {
        title: "Responsive Design",
        description: "Fully responsive layout that adapts beautifully to desktop, tablet, and mobile devices"
      },
      {
        title: "Interactive Elements",
        description: "Particle animations and smooth transitions create an engaging user experience"
      },
      {
        title: "Clean Architecture",
        description: "Well-structured codebase with reusable components and clear separation of concerns"
      }
    ],
    challenges: [
      {
        title: "Performance Optimization",
        problem: "Balancing visual appeal with fast loading times and smooth animations",
        solution: "Implemented lazy loading, optimized particle systems, and efficient CSS animations"
      },
      {
        title: "Cross-Device Compatibility",
        problem: "Ensuring consistent experience across different screen sizes and devices",
        solution: "Utilized Tailwind CSS responsive utilities and thorough testing across multiple devices"
      }
    ]
  },
  'streaming-multichat': {
    ...streamingMultichat,
    detailedDescription: `Streaming Multichat is a real-time chat overlay application designed for content creators who stream on multiple platforms simultaneously. The application unifies chat messages from Twitch, YouTube Live, and TikTok Live into a single, customizable interface.

This project addresses a common pain point for streamers who want to engage with their audience across multiple platforms without constantly switching between different chat windows. The application features real-time message synchronization, customizable styling, and overlay capabilities.`,
    features: [
      {
        title: "Multi-Platform Integration",
        description: "Connects to Twitch, YouTube Live, and TikTok Live chat APIs simultaneously"
      },
      {
        title: "Real-Time Synchronization",
        description: "WebSocket-based architecture ensures instant message delivery across all platforms"
      },
      {
        title: "Customizable Overlay",
        description: "Streamers can customize the appearance, position, and behavior of the chat overlay"
      },
      {
        title: "Message Filtering",
        description: "Advanced filtering options to manage spam and inappropriate content"
      }
    ],
    challenges: [
      {
        title: "API Rate Limiting",
        problem: "Different platforms have varying rate limits and API restrictions",
        solution: "Implemented intelligent queuing and caching mechanisms to optimize API usage"
      },
      {
        title: "Real-Time Performance",
        problem: "Maintaining smooth performance during high-traffic streams with hundreds of messages per minute",
        solution: "Optimized WebSocket handling and implemented message batching for better performance"
      }
    ]
  },
  'bulk': {
    ...bulk,
    detailedDescription: `Bulk is an interactive party game platform where players use their mobile devices to participate in various mini-games displayed on a shared screen. The game supports multiple simultaneous players and features a variety of question-based and creative challenges.

The platform consists of a main display application built with Angular and a mobile companion app created with Ionic. Players join games by scanning QR codes or entering room codes, creating a seamless party game experience that leverages the devices everyone already has in their pockets.`,
    features: [
      {
        title: "Multi-Device Gameplay",
        description: "Players use their smartphones as controllers while viewing the main game on a shared screen"
      },
      {
        title: "Real-Time Synchronization",
        description: "Instant response collection and display using WebSocket technology"
      },
      {
        title: "Variety of Game Types",
        description: "Multiple game modes including trivia, creative challenges, and voting games"
      },
      {
        title: "Easy Room Management",
        description: "Simple game creation with QR code joining and room code alternatives"
      }
    ],
    challenges: [
      {
        title: "Cross-Platform Mobile Support",
        problem: "Ensuring consistent experience across iOS and Android devices",
        solution: "Used Ionic framework for hybrid app development with platform-specific optimizations"
      },
      {
        title: "Real-Time State Management",
        problem: "Keeping game state synchronized across multiple devices and the main display",
        solution: "Implemented a robust state management system with WebSocket communication and conflict resolution"
      }
    ]
  },
  'optymo-record-splitter': {
    ...optymoRecordSplitter,
    detailedDescription: `The Optymo Record Splitter is a specialized tool designed to process daily radio recordings from the Optymo bus network in Belfort, France. The application automatically splits long audio recordings into individual conversations based on silence detection and timestamps.

This tool was created to help radio operators efficiently archive and review communications. The software can process hours of continuous recording and intelligently separate different conversations, making it much easier to locate specific communications or incidents for review or compliance purposes.`,
    features: [
      {
        title: "Automatic Audio Segmentation",
        description: "Intelligently splits audio files based on silence detection and conversation patterns"
      },
      {
        title: "Timestamp Generation",
        description: "Automatically generates accurate timestamps for each conversation segment"
      },
      {
        title: "Batch Processing",
        description: "Processes multiple audio files simultaneously with progress tracking"
      },
      {
        title: "Quality Control",
        description: "Built-in validation to ensure no conversations are lost during processing"
      }
    ],
    challenges: [
      {
        title: "Audio Processing Performance",
        problem: "Processing large audio files efficiently without consuming excessive system resources",
        solution: "Implemented streaming audio processing with configurable buffer sizes for optimal performance"
      },
      {
        title: "Accurate Silence Detection",
        problem: "Distinguishing between natural pauses and actual conversation breaks in noisy radio environments",
        solution: "Developed adaptive algorithms that account for background noise and radio static"
      }
    ]
  },
  'bob-raoul': {
    ...bobRaoul,
    detailedDescription: `Bob Raoul is a fun hardware project that combines physical gaming with digital feedback. The project features a physical target (Bob's head) where players attempt to throw bottle caps or similar small objects. When a successful hit is detected, the system provides both visual and audio feedback.

Built using a Raspberry Pi and GPIO sensors, this project demonstrates the integration of hardware sensors with software applications. The system includes LED animations, sound effects, and score tracking, making it an entertaining addition to any office or recreational space.`,
    features: [
      {
        title: "Physical Target Detection",
        description: "GPIO sensors detect when objects successfully hit the target"
      },
      {
        title: "Audiovisual Feedback",
        description: "LED animations and sound effects provide immediate feedback for successful hits"
      },
      {
        title: "Score Tracking",
        description: "Keeps track of successful hits and displays statistics"
      },
      {
        title: "Raspberry Pi Integration",
        description: "Efficient use of Raspberry Pi GPIO pins and Python libraries"
      }
    ],
    challenges: [
      {
        title: "Sensor Calibration",
        problem: "Ensuring accurate detection while avoiding false positives from vibrations or environmental factors",
        solution: "Implemented debouncing algorithms and calibration routines for optimal sensor sensitivity"
      },
      {
        title: "Hardware Reliability",
        problem: "Creating a robust system that can withstand repeated impacts and continuous operation",
        solution: "Used industrial-grade sensors and protective housings to ensure long-term reliability"
      }
    ]
  },
  'no-copyright-gang': {
    ...ncg,
    detailedDescription: `No Copyright Gang (NCG) is an automation project that streamlines the entire workflow of sourcing, editing, and publishing royalty-free music content to YouTube. The system automatically discovers new music from various royalty-free sources, downloads tracks, applies basic editing, and uploads them to YouTube with appropriate metadata.

This project demonstrates advanced automation capabilities, including web scraping, audio processing, and YouTube API integration. The system was designed to operate autonomously, requiring minimal manual intervention while maintaining high-quality output standards.`,
    features: [
      {
        title: "Automated Content Discovery",
        description: "Automatically searches and identifies new royalty-free music from multiple sources"
      },
      {
        title: "Audio Processing Pipeline",
        description: "Applies consistent audio processing, normalization, and format conversion"
      },
      {
        title: "YouTube Integration",
        description: "Automated uploading with proper titles, descriptions, and tags using YouTube API"
      },
      {
        title: "Quality Control",
        description: "Built-in checks to ensure audio quality and copyright compliance"
      }
    ],
    challenges: [
      {
        title: "Copyright Verification",
        problem: "Ensuring all processed music is truly royalty-free and safe for YouTube monetization",
        solution: "Implemented multiple verification layers and database tracking of source licensing"
      },
      {
        title: "YouTube API Limitations",
        problem: "Working within YouTube's API rate limits and upload restrictions",
        solution: "Developed intelligent queuing and retry mechanisms to optimize upload success rates"
      }
    ]
  }
}

const project = computed(() => {
  return projects[slug as keyof typeof projects] || null
})
</script>