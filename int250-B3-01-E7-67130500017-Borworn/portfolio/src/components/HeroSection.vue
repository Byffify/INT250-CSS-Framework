<template>
  <!--HeroSection — intro, name, CTA, profile image-->
  <section
    id="top"
    class="relative flex min-h-[90vh] items-center pt-28 pb-16 lg:min-h-[92vh] lg:pt-32"
  >
    <div class="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
      <!--Left column: headline and buttons-->
      <div class="text-center lg:col-span-7 lg:text-left">
        <p v-observe class="section-eyebrow mb-4">Portfolio</p>

        <h1
          v-observe
          class="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span class="text-heading">Hi, I'm</span>
          <span
            class="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500"
          >
            {{ FULL_NAME }}
          </span>
        </h1>

        <p v-observe class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body lg:mx-0">
          Year 2 Information Technology student · Full Stack Developer
          <span class="mt-2 block text-base text-muted">
            Building real-world web apps, learning every day, and growing across Frontend &amp;
            Backend.
          </span>
        </p>

        <!--Primary CTAs-->
        <div v-observe class="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
          <a href="#work" class="btn-primary-solid">View Work</a>
          <a href="#contact" class="btn-secondary-outline">Get in Touch</a>
        </div>

        <!--Quick stats row-->
        <div
          v-observe
          class="mt-12 hidden flex-wrap justify-center gap-8 border-t border-subtle pt-8 sm:flex lg:justify-start"
        >
          <div v-for="stat in stats" :key="stat.label" class="text-left">
            <p class="text-2xl font-bold text-heading">{{ stat.value }}</p>
            <p class="text-sm text-muted">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <!--Right column: profile portrait-->
      <div v-observe class="relative flex justify-center lg:col-span-5 lg:justify-end">
        <div
          class="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] xl:max-w-[440px]"
        >
          <!--Glow behind image-->
          <div
            class="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/15 blur-3xl dark:from-blue-500/25 dark:via-indigo-500/15 dark:to-purple-500/20"
            aria-hidden="true"
          />

          <!--Profile photo card-->
          <div
            class="group relative overflow-hidden rounded-3xl border border-subtle bg-glass p-3 shadow-lg transition-all duration-500 hover:border-blue-400/30 hover:shadow-xl dark:shadow-[0_0_60px_rgba(59,130,246,0.12)] dark:hover:shadow-[0_0_80px_rgba(59,130,246,0.2)]"
          >
            <div class="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                :src="profileImg"
                :alt="`${FULL_NAME} — profile photo`"
                width="440"
                height="550"
                class="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent dark:from-neutral-950/80"
                aria-hidden="true"
              />
            </div>
          </div>

          <!--Status badge under photo-->
          <div
            class="absolute -bottom-3 left-4 right-4 rounded-2xl border border-subtle bg-glass-strong px-4 py-3 text-center shadow-md backdrop-blur-md sm:left-6 sm:right-6"
          >
            <p class="text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Currently
            </p>
            <p class="mt-0.5 text-sm font-semibold text-heading">Year 2 · Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profileImg from '@/assets/profile.png'
import { FULL_NAME } from '@/site.js'

const stats = [
  { value: '2+', label: 'Years learning IT' },
  { value: '5+', label: 'Projects built' },
  { value: 'Full', label: 'Stack focus' },
]
</script>
