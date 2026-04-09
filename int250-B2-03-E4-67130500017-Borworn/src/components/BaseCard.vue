<script setup>
defineProps({
  title: { type: String, default: "" },
  desc: { type: String, default: "" },
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm px-4 py-6 border border-gray-200">
    <h1 class="text-lg font-bold texy-black">{{ title }}</h1>
    <p class="text-gray-500 font-semibold text-sm">{{ desc }}</p>
    <slot />
  </div>
</template>
