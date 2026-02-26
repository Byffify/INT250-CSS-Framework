<script setup>
import { ref } from "vue";

const link = ref("");
const links = ref([]);

function shorten() {
  if (link.value === "") {
    alert("Please add a link");
    return;
  }

  links.value.push({
    original: link.value,
    short: `https//rel.ink/${link.value}`,
  });

  link.value = "";
}

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Copy to clipboard");
}
</script>

<template>
  <!-- Shortener Section -->
  <section class="w-full bg-gray-100 py-10">
    <!-- Main Container -->
    <div class="max-w-3xl mx-auto px-6 -mt-25">
      <!-- Form -->

      <!-- Input Form Container -->
      <div
        class="bg-indigo-900 px-8 py-10 rounded-lg flex flex-col md:flex-row gap-4"
      >
        <!-- Link Input Field -->
        <input
          v-model="link"
          placeholder="Shorten a link here..."
          class="flex-1 w-full p-3 rounded-xl bg-white"
        />

        <!-- Shorten Button -->
        <button
          @click="shorten"
          class="bg-cyan-500 px-10 py-3 rounded-xl text-white"
        >
          Shorten It!
        </button>
      </div>

      <!-- Cards -->

      <!-- Result Cards Container -->
      <div class="mt-6 space-y-4">
        <!-- Card Item -->
        <div
          v-for="item in links"
          class="bg-white p-4 rounded flex flex-col items-center sm:flex-row sm:justify-between gap-1 sm:gap-4"
        >
          <!-- Original Link -->
          <div class="font-bold">
            {{ item.original }}
          </div>

          <!-- Short Link Section -->
          <div class="flex flex-col items-center gap-2 sm:gap-5 sm:flex-row">
            <!-- Short Link Text -->
            <div class="text-cyan-500 font-bold">
              {{ item.short }}
            </div>

            <!-- Copy Button -->
            <button
              @click="copyText(item.short)"
              class="bg-cyan-500 text-white px-6 py-1 rounded-lg"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
