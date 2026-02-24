<script setup>
import { ref } from "vue";

const open = ref(false);

function toggleMenu() {
  open.value = !open.value;
}
</script>

<template>
  <!-- Nav Container -->
  <nav class="w-full">
    <!-- Flex Container for all item-->
    <div class="max-w-6xl mx-auto p-6 flex justify-between items-center">
      <!-- Flex container for Logo/Menu -->
      <div class="flex items-center gap-10">
        <img src="../assets/logo.svg" alt="" />

        <div class="hidden lg:flex gap-6">
          <a href="#">Feature</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
      </div>

      <!-- Right Menu -->
      <div class="hidden lg:flex gap-4 items-center">
        <a href="#">Login</a>

        <a href="#" class="bg-cyan-500 px-6 py-2 rounded-full text-white">
          Sign Up
        </a>
      </div>

      <!-- Hamburger -->
      <button class="lg:hidden text-3xl" @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div
    v-if="open"
    class="bg-gray-800 text-white text-center p-6 space-y-4 lg:hidden"
  >
    <div><a href="#">Feature</a></div>
    <div><a href="#">Pricing</a></div>
    <div><a href="#">Resources</a></div>

    <hr />

    <div><a href="#">Login</a></div>
    <button class="bg-cyan-500 px-6 py-2 rounded-full">
      <a href="#">Sign Up</a>
    </button>
  </div>
</template>

<style scoped></style>
