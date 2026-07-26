<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import constants from '@/constants'
import { unJourEnFrance, puffless, wakeVerse } from '@/data/projects'

const { t } = useI18n({ useScope: 'global' })

// Apps published under DAVID SERVICES. A store is a link only when its listing
// URL is known (see src/data/projects.ts); otherwise the store is still named,
// as plain text, so the entry stays complete.
const publishedApps = computed(() =>
  [unJourEnFrance, puffless, wakeVerse].map((project) => ({
    title: project.title,
    stores: [
      { label: t('projects.appStore'), href: project.appStoreLink },
      { label: t('projects.playStore'), href: project.playStoreLink },
    ],
  }))
)
</script>

<template>
  <div class="min-h-screen px-4 py-12">
    <div class="mx-auto max-w-3xl">
      <!-- Header -->
      <div class="mb-12 text-center">
        <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">
          {{ $t('legal.title') }}
        </h1>
        <p class="text-lg text-gray-300">
          {{ $t('legal.subtitle') }}
        </p>
      </div>

      <section class="rounded-2xl border border-gray-800/50 bg-gray-900/50 p-6 sm:p-8">
        <dl class="divide-y divide-gray-800/50">
          <div class="grid gap-1 py-4 first:pt-0 sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-semibold uppercase tracking-wider text-violet-300">
              {{ $t('legal.publisher') }}
            </dt>
            <dd class="text-gray-200 sm:col-span-2">{{ $t('legal.publisherValue') }}</dd>
          </div>

          <div class="grid gap-1 py-4 sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-semibold uppercase tracking-wider text-violet-300">
              {{ $t('legal.siren') }}
            </dt>
            <dd class="tabular-nums text-gray-200 sm:col-span-2">{{ constants.siren }}</dd>
          </div>

          <div class="grid gap-1 py-4 sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-semibold uppercase tracking-wider text-violet-300">
              {{ $t('legal.siret') }}
            </dt>
            <dd class="tabular-nums text-gray-200 sm:col-span-2">{{ constants.siret }}</dd>
          </div>

          <div class="grid gap-1 py-4 sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-semibold uppercase tracking-wider text-violet-300">
              {{ $t('legal.headOffice') }}
            </dt>
            <dd class="text-gray-200 sm:col-span-2">{{ $t('legal.headOfficeValue') }}</dd>
          </div>

          <div class="grid gap-1 py-4 sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-semibold uppercase tracking-wider text-violet-300">
              {{ $t('legal.contact') }}
            </dt>
            <dd class="sm:col-span-2">
              <a
                :href="`mailto:${constants.email}`"
                class="break-all text-gray-200 transition-colors duration-300 hover:text-violet-400"
              >
                {{ constants.email }}
              </a>
            </dd>
          </div>

          <div class="grid gap-1 py-4 last:pb-0 sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-semibold uppercase tracking-wider text-violet-300">
              {{ $t('legal.apps') }}
            </dt>
            <dd class="sm:col-span-2">
              <ul class="space-y-2">
                <li v-for="app in publishedApps" :key="app.title" class="text-gray-200">
                  {{ app.title }}
                  <span class="text-sm text-gray-400">
                    (<template v-for="(store, index) in app.stores" :key="store.label"
                      ><span v-if="index > 0"> / </span
                      ><a
                        v-if="store.href"
                        :href="store.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="transition-colors duration-300 hover:text-violet-400"
                        >{{ store.label }}</a
                      ><span v-else>{{ store.label }}</span></template
                    >)
                  </span>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </section>
    </div>
  </div>
</template>
