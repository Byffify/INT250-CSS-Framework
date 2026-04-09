<script setup>
import { computed } from "vue";
const props = defineProps({
  label: { type: String, default: "Button" },
  variant: { type: String, default: "primary" },
  disabled: { type: Boolean, default: false },
});

const buttonClass = computed(() => ({
  "rounded-lg font-semibold text-sm px-4 py-2 transition-colors cursor-pointer": true,
  "bg-blue-600 hover:bg-blue-700 text-white": props.variant === "primary",
  "bg-gray-900 hover:bg-gray-950 text-white": props.variant === "secondary",
  "bg-white border border-blue-700 hover:bg-gray-50 text-blue-700": props.variant === "outline",
  "bg-white text-blue-600 hover:bg-gray-100": props.variant === "white",
  "bg-gray-200 text-gray-400 cursor-not-allowed": props.variant === "disabled" || props.disabled,
}));
</script>

<template>
  <button :class="buttonClass" :disabled="disabled">
    {{ label }}
  </button>
</template>