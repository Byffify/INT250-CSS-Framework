<script setup>
defineProps({
  label: { type: String, required: true },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  helperText: { type: String, default: "" },
  options: { type: Array, default: () => [] },
});
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <label class="text-sm font-bold text-gray-800">{{ label }}</label>

    <select
      v-if="type === 'select'"
      class="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
    >
      <option value="" disabled selected>{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
    </select>

    <textarea
      v-else-if="type === 'textarea'"
      :placeholder="placeholder"
      rows="4"
      class="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>

    <input
      v-else
      :type="type"
      :placeholder="placeholder"
      class="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <span v-if="helperText" class="text-xs text-gray-500 mt-1">{{
      helperText
    }}</span>
  </div>
</template>
