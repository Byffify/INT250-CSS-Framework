<script setup>
import { ref } from "vue";

const isOpen = ref(false);

defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <!-- 2.1 Hero Section -->
  <section
    class="bg-[url('/src/assets/mobile/image-hero.jpg')] md:bg-[url('/src/assets/desktop/image-hero.jpg')] bg-no-repeat bg-cover min-h-screen"
  >
    <!-- 2.2 Container Layout -->
    <div class="max-w-6xl mx-auto px-6 py-12 flex flex-col min-h-screen">
      <!-- 2.3 Create the Navigation Bar (Logo and Menu) -->
      <nav class="flex flex-row justify-between font-bold text-white">
        <img
          src="../assets/logo.svg"
          alt="logo"
          class="h-max"
          v-if="isOpen == !true"
        />
        <!-- 2.4 Desktop Menu (md+ only) -->
        <div class="hidden md:flex h-10 font-sans md:space-x-8">
          <!-- 2.5 Menu Links and Hover Underline Effect -->
          <div v-for="item in menuItems" :key="item.name" class="group">
            <a :href="item.link">{{ item.name }}</a>
            <div
              class="mx-2 group-hover:border-b group-hover:border-blue-50"
            ></div>
          </div>
        </div>
        <!-- Mobile Menu -->
        <div v-if="isOpen == !true" class="md:hidden">
          <button @click="isOpen = true">
            <img src="../assets/icon-hamburger.svg" alt="hamburger-bar" />
          </button>
        </div>

        <div
          v-if="isOpen"
          class="w-full flex flex-col font-light uppercase gap-2 z-50 md:hidden"
        >
          <div class="flex justify-end items-center">
            <button @click="isOpen = false">
              <img src="../assets/icon-close.svg" alt="close" />
            </button>
          </div>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Events</a>
          <a href="#">Products</a>
          <a href="#">Support</a>
        </div>
      </nav>
      <!-- 2.6 Add the Hero Headline Text Box -->
      <div
        class="group mx-2 border-2 border-white w-full md:w-fit p-8 tracking-widest my-auto"
      >
        <h1 class="text-white text-4xl md:text-5xl font-light uppercase">
          impressive<br />
          expreiences<br />
          that deliver
        </h1>
        <div
          class="mt-4 transition duration-200 border-transparent group-hover:border-2 group-hover:border-blue-50"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
