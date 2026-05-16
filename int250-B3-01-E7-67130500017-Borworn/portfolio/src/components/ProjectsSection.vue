<template>
  <!--ProjectsSection — featured project showcase-->
  <section id="work" class="py-32" v-observe>
    <h2 class="mb-4 text-3xl font-bold text-heading">Selected Work</h2>
    <p class="mb-16 text-body">A curated selection of my recent projects.</p>

    <div class="space-y-32">
      <!--Project 1: Study Plan Declaration-->
      <article class="group relative grid gap-8 md:grid-cols-2 md:items-center">
        <div class="project-frame">
          <div class="relative overflow-hidden rounded-2xl">
            <img
              :src="project1Img"
              alt="Study Plan Declaration"
              class="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-neutral-900/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-neutral-950/20"
            />
          </div>
        </div>
        <div class="flex flex-col items-start px-4">
          <h3 class="mb-4 text-2xl font-bold text-heading">Study Plan Declaration</h3>
          <p class="mb-6 leading-relaxed text-body">
            A comprehensive system designed to streamline the academic planning process. Features
            include robust REST API integration, containerized deployment, and extensive end-to-end
            testing.
          </p>
          <div class="mb-8 flex flex-wrap gap-2">
            <span
              v-for="tech in ['HTML/CSS/JS', 'REST API', 'MySQL', 'Docker', 'Cypress']"
              :key="tech"
              class="chip"
            >
              {{ tech }}
            </span>
          </div>
          <a
            href="#"
            class="inline-flex items-center gap-2 text-sm font-semibold text-heading transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            View Project
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </article>

      <!--Project 2: Health & Wellness Reminder-->
      <article class="group relative grid gap-8 md:grid-cols-2 md:items-center">
        <div class="order-2 flex flex-col items-start px-4 md:order-1">
          <h3 class="mb-4 text-2xl font-bold text-heading">Health &amp; Wellness Reminder</h3>
          <p class="mb-6 leading-relaxed text-body">
            A responsive web application focused on promoting healthy habits. Built with modern
            frontend tooling to ensure a fast, fluid, and intuitive user experience across all
            devices.
          </p>
          <div class="mb-8 flex flex-wrap gap-2">
            <span v-for="tech in ['Vue.js', 'Tailwind CSS', 'Vite']" :key="tech" class="chip">
              {{ tech }}
            </span>
          </div>
          <a
            href="#"
            class="inline-flex items-center gap-2 text-sm font-semibold text-heading transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            View Project
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div class="project-frame order-1 md:order-2">
          <div class="relative overflow-hidden rounded-2xl">
            <img
              :src="project2Img"
              alt="Health App"
              class="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-neutral-900/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-neutral-950/20"
            />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import project1Img from '@/assets/project-1.jpg'
import project2Img from '@/assets/project-2.jpg'
</script>
