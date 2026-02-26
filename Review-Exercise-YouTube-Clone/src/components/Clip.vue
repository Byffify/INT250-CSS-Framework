<script setup>
defineProps(["linkvideo", "topic", "chanel", "viewer", "period"]);
</script>

<template>
  <section>
    <div>
      <div>
        <iframe
          :src="linkvideo"
          allowfullscreen
          class="rounded-xl aspect-video"
        ></iframe>
        <p class="line-clamp-2 mb-3 text-base">{{ topic }}</p>
        <p class="text-gray-500 text-sm">{{ chanel }}</p>
        <div class="flex">
          <p class="text-gray-500 text-xs">การดู {{ viewer }} ครั้ง</p>
          <p class="text-gray-500 text-xs">•</p>
          <p class="text-gray-500 text-xs">{{ period }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
