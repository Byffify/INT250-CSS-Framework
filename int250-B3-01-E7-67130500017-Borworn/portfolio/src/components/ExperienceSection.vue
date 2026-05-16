<template>
  <!--ExperienceSection — learning journey timeline-->
  <section id="journey" class="py-32" v-observe>
    <h2 class="mb-4 text-3xl font-bold text-heading">Journey</h2>
    <p class="mb-16 max-w-2xl text-body">
      My learning path from 2023 to today — currently in Year 2 of IT, specializing as a Full Stack
      Developer.
    </p>

    <!--Timeline list-->
    <div class="relative border-l border-subtle pl-8 md:border-none md:pl-0">
      <div class="space-y-16">
        <article
          v-for="(item, index) in journey"
          :key="item.year"
          v-observe
          class="relative md:grid md:grid-cols-5 md:gap-8"
        >
          <!--Timeline dot + period label-->
          <div
            class="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-neutral-50 dark:border-neutral-950 md:relative md:left-auto md:top-auto md:col-span-1 md:flex md:justify-end"
            :class="
              index === 0
                ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]'
                : 'bg-neutral-400 dark:bg-neutral-700'
            "
          >
            <span
              class="mr-4 mt-1 hidden whitespace-nowrap text-sm font-medium md:block"
              :class="index === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-muted'"
            >
              {{ item.period }}
            </span>
          </div>

          <!--Timeline content-->
          <div class="md:col-span-4">
            <span
              class="mb-2 block text-sm font-medium md:hidden"
              :class="index === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-muted'"
            >
              {{ item.period }}
            </span>
            <p class="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {{ item.year }}
            </p>
            <h3 class="mt-1 text-xl font-bold text-heading">{{ item.title }}</h3>
            <p class="mt-2 leading-relaxed text-body">{{ item.description }}</p>
            <div v-if="item.tags?.length" class="mt-4 flex flex-wrap gap-2">
              <span v-for="tag in item.tags" :key="tag" class="chip">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const journey = [
  {
    year: '2026',
    period: 'Present',
    title: 'Year 2 IT Student — Full Stack Developer',
    description:
      'Focused on end-to-end web applications, university projects, and this portfolio — using Vue.js, Tailwind CSS, REST APIs, and modern tooling to prepare for the industry.',
    tags: ['Vue 3', 'Tailwind', 'Full Stack', 'Portfolio'],
  },
  {
    year: '2025',
    period: '2025',
    title: 'Year 2 & Full Stack Focus',
    description:
      'Connected Frontend and Backend in real projects such as Study Plan Declaration, practiced Docker and Cypress, and designed systems ready to deploy.',
    tags: ['REST API', 'MySQL', 'Docker', 'Cypress'],
  },
  {
    year: '2024',
    period: '2024',
    title: 'Year 1 — Information Technology',
    description:
      'Built foundations in programming, data structures, HTML/CSS/JavaScript, and databases — with a solid grasp of SDLC and teamwork.',
    tags: ['JavaScript', 'HTML/CSS', 'Database', 'Git'],
  },
  {
    year: '2023',
    period: '2023',
    title: 'Starting the IT Path',
    description:
      'Began the software development journey — systems thinking, problem-solving with code, and preparing for full-time IT studies.',
    tags: ['Programming Basics', 'Problem Solving', 'Self-learning'],
  },
]
</script>
