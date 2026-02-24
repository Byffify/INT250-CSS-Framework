<script setup>
defineProps(["level", "capacity", "price", "subcapacity"]);
</script>

<template>
  <!-- Card section -->
  <section>
    <!-- Outline Container -->
    <div
      class="group w-72 border-11 border-gray-700 hover:border-violet-500 rounded-2xl p-3 transition"
    >
    <!-- Inline Container -->
      <div class="rounded-xl bg-indigo-950">
        <!-- Card content -->
        <div class="flex flex-col items-center text-white py-5">
          <!-- Plan Level -->
          <p>{{ level }}</p>
          <div class="p-5 flex flex-col items-center gap-5">
            <!-- Capacity Info -->
            <div class="flex flex-col items-center">
              <!-- Capacity -->
              <h1 class="capacity">{{ capacity }}</h1>
              <!-- Price -->
              <p>{{ price }}/month</p>
            </div>
            <!-- Purchase Button -->
            <button
              class="mb-6 px-10 py-3 border-violet-500 border-1 group-hover:bg-violet-500 rounded-lg"
            >
              Purchase
            </button>
          </div>
        </div>
        <!-- Card Feature -->
        <div
          class="flex flex-col items-center gap-3 py-8 text-white border-t-3 border-gray-700"
        >
        <!-- List Feature -->
          <p><i class="fa-solid fa-check"></i>{{ subcapacity }}</p>
          <p><i class="fa-solid fa-check"></i>Option to add members</p>
          <p><i class="fa-solid fa-check"></i>Extra member benefits</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.capacity {
  font-family: Georgia, serif;
  font-size: 48px;
}
</style>
