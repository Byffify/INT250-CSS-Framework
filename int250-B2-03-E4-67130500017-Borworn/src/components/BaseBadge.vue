<script setup>
import { computed } from "vue";

const props = defineProps({
  label: { type: String, default: "badge" },
  variant: { type: String, default: "success" },
});

const badgeClass = computed(() => ({
  "rounded-full px-3 py-1 font-bold w-fit text-sm": true,
  "bg-green-800/20 text-green-800": props.variant === "success",
  "bg-yellow-500/20 text-yellow-700": props.variant === "warning",
  "bg-red-500/20 text-red-700": props.variant === "error",
  "bg-gray-500/20 text-gray-800": props.variant === "neutral",
}));
</script>

<template>
  <div :class="badgeClass">
    {{ label }}
  </div>
</template>
