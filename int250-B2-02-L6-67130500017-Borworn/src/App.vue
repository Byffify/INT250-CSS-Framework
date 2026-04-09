<script setup>
import NavBar from './component/NavBar.vue';
import Feature from './component/Feature.vue';
import Creation from './component/Creation.vue';
import Footer from './component/Footer.vue';
import { ref } from 'vue';

const menuItems = ref([
  {name: "About", link: "#"},
  {name: "Careers", link: "#"},
  {name: "Events", link: "#"},
  {name: "Products", link: "#"},
  {name: "Supports", link: "#"},
])
</script>

<template>
  <NavBar :menu-items="menuItems"/>
  <Feature/>
  <Creation/>
  <Footer/>
</template>

<style scoped></style>
