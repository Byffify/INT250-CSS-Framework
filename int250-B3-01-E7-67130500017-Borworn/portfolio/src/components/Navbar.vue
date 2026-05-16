<template>
  <!--Navbar — fixed top navigation-->
  <nav class="nav-bar fixed top-0 z-40 w-full transition-all duration-300">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
      <!--Brand / logo link to hero-->
      <a
        href="#top"
        class="shrink-0 text-lg font-bold tracking-tighter text-heading sm:text-xl"
        :title="FULL_NAME"
      >
        <span class="sm:hidden">Borworn K.</span>
        <span class="hidden sm:inline">{{ FULL_NAME }}</span
        ><span class="text-blue-600 dark:text-blue-500">.</span>
      </a>

      <!--Desktop section links-->
      <div class="hidden space-x-8 text-sm font-medium text-body md:flex">
        <a href="#work" class="transition-colors hover:text-heading">Work</a>
        <a href="#skills" class="transition-colors hover:text-heading">Skills</a>
        <a href="#journey" class="transition-colors hover:text-heading">Journey</a>
        <a href="#about" class="transition-colors hover:text-heading">About</a>
        <a href="#contact" class="transition-colors hover:text-heading">Contact</a>
      </div>

      <!--Theme toggle + CV download-->
      <div class="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          class="theme-toggle"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggle"
        >
          <svg
            class="theme-toggle__icon"
            :class="{ 'theme-toggle__icon--active': !isDark }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <svg
            class="theme-toggle__icon"
            :class="{ 'theme-toggle__icon--active': isDark }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { FULL_NAME } from '@/site.js'
import { useTheme } from '@/theme.js'

const { isDark, toggle } = useTheme()
</script>

<style scoped>
.theme-toggle {
  @apply relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition-all duration-300 hover:border-blue-400/40 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:border-blue-400/50 dark:hover:text-blue-400;
}

.theme-toggle__icon {
  @apply absolute h-5 w-5 transition-all duration-300;
  opacity: 0;
  transform: scale(0.5);
}

.theme-toggle__icon--active {
  opacity: 1;
  transform: scale(1);
}
</style>
