<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, required: true },
  placeholder: { type: String, default: "" },
  maxLength: { type: Number, default: 200 },
  description: { type: String, default: "" },
});

defineEmits(["update:modelValue"]);

const currentLength = computed(() => props.modelValue.length);
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="text-sm font-medium text-slate-700">{{ label }}</label>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :maxlength="maxLength"
      rows="3"
      :placeholder="placeholder"
      class="rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    ></textarea>
    <div class="mt-1 flex justify-between text-xs text-slate-500">
      <span>{{ description }}</span>
      <span :class="{ 'text-red-500': currentLength >= maxLength }">
        {{ currentLength }}/{{ maxLength }}
      </span>
    </div>
  </div>
</template>