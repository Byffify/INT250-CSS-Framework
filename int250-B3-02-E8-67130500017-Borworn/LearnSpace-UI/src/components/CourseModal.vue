<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  courseData: {
    type: Object,
    required: false,
    default: () => ({
      title: "",
      description: "",
      instructor: "",
      students: 0,
      rating: 0,
    }),
  },
});

defineEmits(["close", "enroll"]);
</script>

<template>
  <!-- Modal overlay -->
  <div
    v-if="isOpen && courseData"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur"
    @click="$emit('close')"
  >
    <!-- Modal container -->
    <div
      class="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl dark:bg-slate-900"
      @click.stop
    >
      <!-- Header -->
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">{{ courseData.title }}</h2>
        <button
          @click="$emit('close')"
          class="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        >
          ✕
        </button>
      </div>

      <!-- Course Details -->
      <div class="mt-6 space-y-4">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Instructor</p>
          <p class="font-medium">{{ courseData.instructor }}</p>
        </div>
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Description</p>
          <p class="text-slate-700 dark:text-slate-300">
            {{ courseData.description }}
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-slate-500 dark:text-slate-400">Students</p>
            <p class="text-xl font-bold">{{ courseData.students }}</p>
          </div>
          <div>
            <p class="text-sm text-slate-500 dark:text-slate-400">Rating</p>
            <p class="text-xl font-bold">{{ courseData.rating }}/5</p>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="mt-8 flex gap-3">
        <button
          @click="$emit('enroll')"
          class="flex-1 rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-800"
        >
          Enroll Now
        </button>
        <button
          @click="$emit('close')"
          class="flex-1 rounded-xl border border-slate-300 px-4 py-3 font-semibold hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>