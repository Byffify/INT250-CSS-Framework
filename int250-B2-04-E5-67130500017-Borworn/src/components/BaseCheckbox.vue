<script setup>
defineProps({
  modelValue: { type: Boolean, default: false },
  label: { type: String, required: true },
  error: { type: String, default: "" },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        class="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
      />
      <span class="text-sm text-slate-700">
        {{ label }}
      </span>
    </label>
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>