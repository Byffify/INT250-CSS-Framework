<script setup>
defineProps({
  modelValue: { type: [String, Number], default: "" },
  label: { type: String, required: true },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  error: { type: String, default: "" },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="text-sm font-medium text-slate-700">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="rounded-lg border px-4 py-2.5 outline-none transition focus:ring-2"
      :class="
        error
          ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-200'
          : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'
      "
    />
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>