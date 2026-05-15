<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
});
</script>

<template>
  <!-- Stat card container -->
  <div class="bg-white rounded-2xl border-slate-200 border dark:border-slate-800 p-6 shadow-sm">
    <!-- Label -->
    <p class="text-slate-500 dark:text-slate-400">{{ title }}</p>
    <!-- Value -->
    <h2 class="font-bold text-2xl">{{ value }}</h2>
  </div>
</template>

<style scoped></style>
