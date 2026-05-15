<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "info",
    validator: (value) => ["success", "error", "info", "warning"].includes(value),
  },
  duration: {
    type: Number,
    default: 3000,
  },
});

const emit = defineEmits(["close"]);

const isVisible = ref(true);

const typeStyles = {
  success: {
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-800",
    icon: "✓",
    iconColor: "text-green-600 dark:text-green-400",
  },
  error: {
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-800",
    icon: "✕",
    iconColor: "text-red-600 dark:text-red-400",
  },
  info: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    icon: "ℹ",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  warning: {
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    border: "border-yellow-200 dark:border-yellow-800",
    icon: "⚠",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
};

const styles = typeStyles[props.type];

onMounted(() => {
  if (props.duration > 0) {
    setTimeout(() => {
      isVisible.value = false;
      emit("close");
    }, props.duration);
  }
});
</script>

<template>
  <!-- Toast notification container -->
  <div
    v-if="isVisible"
    :class="[
      'fixed bottom-4 right-4 z-50 max-w-sm rounded-lg border p-4 shadow-md flex items-center gap-3',
      styles.bg,
      styles.border,
    ]"
  >
    <!-- Icon -->
    <div :class="['text-xl font-bold', styles.iconColor]">{{ styles.icon }}</div>

    <!-- Message -->
    <p class="flex-1 text-sm font-medium dark:text-slate-200">{{ message }}</p>

    <!-- Close button -->
    <button
      @click="
        isVisible = false;
        $emit('close');
      "
      class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
    >
      ✕
    </button>
  </div>
</template>

<style scoped></style>