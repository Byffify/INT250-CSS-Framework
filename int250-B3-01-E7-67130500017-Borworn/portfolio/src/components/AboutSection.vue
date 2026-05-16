<template>
  <!--AboutSection — bio and introduction-->
  <section id="about" class="py-32" v-observe>
    <div class="grid gap-16 md:grid-cols-2 lg:gap-24">
      <!--Section headline-->
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-heading sm:text-5xl">
          Building the future of the web.
        </h2>
      </div>
      <!--Bio paragraphs-->
      <div class="space-y-6 text-body">
        <p class="leading-relaxed">
          I'm {{ FULL_NAME }}, a Year 2 Information Technology student with a growing focus on full
          stack development. I enjoy turning ideas into clean, usable interfaces and reliable
          backend systems.
        </p>
        <p class="leading-relaxed">
          From coursework to personal projects, I aim to write maintainable code and ship solutions
          that feel polished — whether it's a Vue app, a REST API, or a containerized deployment.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FULL_NAME } from '@/site.js'
</script>
