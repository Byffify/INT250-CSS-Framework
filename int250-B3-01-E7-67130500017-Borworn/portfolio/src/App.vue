<template>
  <!--App root — wraps entire portfolio layout-->
  <div
    id="app"
    class="relative min-h-screen overflow-x-hidden bg-neutral-50 text-neutral-900 antialiased transition-colors duration-300 dark:bg-neutral-950 dark:text-white"
  >
    <!--Decorative background gradients (fixed layer)-->
    <BackgroundElements />

    <!--Top navigation bar-->
    <Navbar />

    <!--Main page content-->
    <main class="relative z-10">
      <div class="container-premium">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>

    <!--Site footer-->
    <Footer />
  </div>
</template>

<script setup>
import BackgroundElements from '@/components/BackgroundElements.vue'
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import Footer from '@/components/Footer.vue'
</script>
