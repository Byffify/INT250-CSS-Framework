<script setup></script>

<template>
  <!-- Search Section -->
  <section class="w-full mt-30">
    <!-- Container -->
    <div class="max-w-7xl mx-auto">
      <!-- Search and Upload Container -->
      <div class="flex justify-between gap-120">
        <!-- Search Box -->
        <div
          class="flex justify-between items-center flex-1 p-3 outline-2 outline-offset-0 outline-gray-400"
        >
          <!-- Search Input -->
          <input type="text" placeholder="Search" class="flex-1" />

          <!-- Search Icon -->
          <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
        </div>

        <!-- Upload Button -->
        <button class="px-8 py-3 bg-black text-white rounded-xl">Upload</button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
