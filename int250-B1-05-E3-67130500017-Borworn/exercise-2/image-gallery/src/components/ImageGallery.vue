<script setup>
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const images = [img1, img2, img3, img4, img5, img6];
</script>

<template>
  <!-- Images gallery section -->
  <section class="w-full my-10">
    <!-- Container -->
    <div class="max-w-7xl mx-auto">
      <!-- Image Layout -->
      <div class="grid grid-cols-3 gap-4">
        <!-- image template -->
        <img v-for="(img, index) in images" :key="index" :src="img" class="w-full h-56 object-cover object-center"/>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
