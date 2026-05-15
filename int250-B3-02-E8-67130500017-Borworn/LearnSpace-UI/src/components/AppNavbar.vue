<script setup>
import UserDropdown from "./UserDropdown.vue";
</script>

<template>
  <header
    class="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90"
  >
    <!-- Navigation -->
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <!-- logo -->
      <a href="#" class="flex items-center gap-3">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-sm font-bold text-white shadow-sm"
        >
          LS
        </div>
        <div>
          <h1 class="text-lg font-bold leading-tight">LearnSpace</h1>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Student Dashboard
          </p>
        </div>
      </a>

      <!-- Desktop Menu  -->
      <ul
        class="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex dark:text-slate-300"
      >
        <li>
          <a href="#" class="transition hover:text-indigo-600">Dashboard</a>
        </li>
        <li>
          <a href="#" class="transition hover:text-indigo-600">Courses</a>
        </li>
        <li>
          <a href="#" class="transition hover:text-indigo-600">Assignments</a>
        </li>
        <li>
          <a href="#" class="transition hover:text-indigo-600">Progress</a>
        </li>
      </ul>

      <!-- Desktop Dropdown -->
      <UserDropdown />
    </nav>
  </header>
</template>
