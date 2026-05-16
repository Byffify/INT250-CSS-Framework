<template>
  <!--SkillsSection — tech stack grid-->
  <section id="skills" class="py-32" v-observe>
    <h2 class="mb-4 text-3xl font-bold text-heading">Technical Arsenal</h2>
    <p class="mb-12 text-body">Tools and technologies I use to bring ideas to life.</p>
    <!--Skill cards grid-->
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="skill-card group flex cursor-default flex-col items-center justify-center"
      >
        <div
          class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-lg font-bold text-neutral-600 transition-colors duration-300 group-hover:bg-blue-500/10 group-hover:text-blue-600 dark:bg-white/5 dark:text-neutral-500 dark:group-hover:text-blue-400"
        >
          {{ skill.initial }}
        </div>
        <span class="text-sm font-medium tracking-wide text-neutral-700 dark:text-neutral-300">{{
          skill.name
        }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'JavaScript', initial: 'JS' },
  { name: 'Java', initial: 'Jv' },
  { name: 'Python', initial: 'Py' },
  { name: 'HTML/CSS', initial: 'HC' },
  { name: 'Tailwind', initial: 'Tw' },
  { name: 'Vue.js', initial: 'Vu' },
  { name: 'Docker', initial: 'Dk' },
  { name: 'Cypress', initial: 'Cy' },
]
</script>
