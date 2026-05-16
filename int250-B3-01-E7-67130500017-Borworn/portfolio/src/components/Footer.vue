<template>
  <!--Footer — copyright and quick links-->
  <footer class="relative z-10 border-t border-subtle bg-glass py-8 backdrop-blur-md">
    <div class="container-premium flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p class="text-sm text-muted">© {{ year }} {{ FULL_NAME }}. All rights reserved.</p>
      <div class="flex gap-6 text-sm text-body">
        <a href="#work" class="transition-colors hover:text-heading">Work</a>
        <a href="#journey" class="transition-colors hover:text-heading">Journey</a>
        <a href="#about" class="transition-colors hover:text-heading">About</a>
        <a href="#contact" class="transition-colors hover:text-heading">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { FULL_NAME } from '@/site.js'

const year = new Date().getFullYear()
</script>
