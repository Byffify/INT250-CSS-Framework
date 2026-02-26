<script setup></script>

<template>
  <!-- CTA Section -->
  <section class="cta w-full bg-indigo-950">
    <!-- CTA Container -->
    <div class="max-w-6xl mx-auto text-center py-25 px-6">
      <!-- CTA Heading -->
      <h1 class="text-white font-bold text-3xl lg:text-4xl">
        Boost your links today
      </h1>

      <!-- Get Started Button -->
      <button
        class="bg-cyan-500 px-8 py-3 rounded-full text-white font-bold mt-6"
      >
        Get Started
      </button>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background-image: url("../assets/bg-boost-desktop.svg");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 1024px) {
  .cta {
    background-image: url("../assets/bg-boost-mobile.svg");
  }
}
</style>
