<script setup>
import { computed } from "vue";

const props = defineProps({
  title: { type: String, default: "Alert" },
  desc: { type: String, default: "" },
  variant: { type: String, default: "success" },
});

const alertClass = computed(() => ({
  "rounded-md p-6 flex flex-col gap-2": true,
  "bg-green-800/20 text-green-800": props.variant === "success",
  "bg-yellow-500/20 text-yellow-700": props.variant === "warning",
  "bg-red-500/20 text-red-700": props.variant === "error",
}));
</script>

<template>
  <div :class="alertClass">
    <h1 class="font-bold text-lg">{{ title }}</h1>
    <p class="font-semibold text-sm">{{ desc }}</p>
  </div>
</template>
