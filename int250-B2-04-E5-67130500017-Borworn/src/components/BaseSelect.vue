<script setup>
defineProps({
  modelValue: { type: [String, Number], default: "" },
  label: { type: String, required: true },
  options: { type: Array, required: true },
  placeholder: { type: String, default: "Select an option" },
  error: { type: String, default: "" },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="text-sm font-medium text-slate-700">{{ label }}</label>
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="rounded-lg border bg-white px-4 py-2.5 outline-none transition focus:ring-2"
      :class="
        error
          ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-200'
          : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'
      "
    >
      <option value="" disabled>{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>