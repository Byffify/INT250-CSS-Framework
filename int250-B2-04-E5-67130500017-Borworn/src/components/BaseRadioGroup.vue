<script setup>
defineProps({
  modelValue: { type: [String, Number], default: "" },
  label: { type: String, required: true },
  options: { type: Array, required: true },
  error: { type: String, default: "" },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="text-sm font-medium text-slate-700">{{ label }}</label>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      <label
        v-for="option in options"
        :key="option.value"
        class="relative flex cursor-pointer rounded-xl border p-4 transition-all focus:outline-none"
        :class="
          modelValue === option.value
            ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500'
            : 'border-slate-200 bg-white hover:border-slate-300'
        "
      >
        <div class="flex w-full flex-col gap-1">
          <div class="flex items-center justify-between">
            <span class="text-sm font-semibold text-slate-900">{{ option.label }}</span>
            <input
              type="radio"
              :value="option.value"
              :checked="modelValue === option.value"
              @change="$emit('update:modelValue', $event.target.value)"
              class="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
            />
          </div>
          <span v-if="option.desc" class="text-xs text-slate-500">{{ option.desc }}</span>
        </div>
      </label>
    </div>
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>