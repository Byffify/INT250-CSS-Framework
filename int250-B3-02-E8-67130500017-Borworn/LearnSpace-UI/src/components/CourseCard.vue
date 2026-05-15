<script setup>
defineProps({
  courseCode: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    default: "",
    required: false,
  },
  progress: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

defineEmits(["viewDetails", "submitAssignment"]);
</script>

<template>
  <!-- Course card container -->
  <div
    class="bg-white rounded-2xl border-slate-200 border dark:border-slate-800 p-4 shadow-sm flex flex-col gap-4"
  >
    <!-- Badge section -->
    <div class="flex justify-between items-center">
      <div
        class="px-4 py-1 flex justify-center items-center text-indigo-600 bg-indigo-400/20 rounded-full text-sm font-medium"
      >
        {{ courseCode }}
      </div>
      <div
        class="px-4 py-1 flex justify-center items-center text-yellow-600 bg-yellow-400/20 rounded-full text-sm font-medium"
      >
        {{ status }}
      </div>
    </div>

    <!-- Title -->
    <div>
      <h1 class="text-xl font-bold">{{ title }}</h1>
    </div>

    <!-- Description -->
    <div>
      <p class="text-slate-400 text-sm">{{ desc }}</p>
    </div>

    <!-- Progress section -->
    <div class="flex flex-col gap-2">
      <div class="flex justify-between">
        <p>Progress</p>
        <p>{{ progress }}%</p>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-3">
        <div
          class="bg-indigo-600 h-3 rounded-full"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
    </div>

    <!-- Action buttons -->
    <div class="flex gap-2 mt-4">
      <button
        @click="$emit('viewDetails', { courseCode, title, desc })"
        class="rounded-xl px-4 py-2 bg-indigo-600 text-white font-semibold hover:bg-indigo-800 w-1/2 md:w-fit"
      >
        View Course Details
      </button>
      <button
        @click="$emit('submitAssignment', { courseCode, title, desc })"
        class="rounded-2xl px-4 py-2 bg-white text-black font-semibold hover:bg-indigo-100 border border-slate-500/20 w-1/2 md:w-fit"
      >
        Submit Assignment
      </button>
    </div>
  </div>
</template>

<style scoped></style>
