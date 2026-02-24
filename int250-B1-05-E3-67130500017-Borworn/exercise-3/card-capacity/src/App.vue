<script setup>
import Card from "./components/Card.vue";
</script>

<template>
  <div
    class="flex items-center justify-center gap-8 min-h-screen w-full bg-indigo-950"
  >
    <Card level="BASIC" capacity="100GB" price="$1.99" subcapacity="100 GB" />
    <Card
      level="STANDARD"
      capacity="200GB"
      price="$3.99"
      subcapacity="200 GB"
    />
    <Card level="PREMIUM" capacity="2TB" price="$8.99" subcapacity="2 TB" />
  </div>
</template>

<style scoped></style>
