<template>
  <!--ContactSection — contact form and social links-->
  <section id="contact" class="py-32 text-center" v-observe>
    <h2 class="mb-4 text-5xl font-bold tracking-tight text-heading">Let's collaborate.</h2>
    <p class="mb-12 text-body">
      I'm always open to discussing product design work or partnership opportunities.
    </p>

    <!--Contact form-->
    <div class="mx-auto max-w-xl text-left">
      <form class="form-panel" @submit.prevent="onSubmit">
        <div class="space-y-6">
          <div>
            <label class="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Name
            </label>
            <input
              v-model="form.name"
              type="text"
              placeholder="John Doe"
              class="field-input input-glow"
            />
          </div>
          <div>
            <label class="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Email
            </label>
            <input
              v-model="form.email"
              type="email"
              placeholder="john@example.com"
              class="field-input input-glow"
            />
          </div>
          <div>
            <label class="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Message
            </label>
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Tell me about your project..."
              class="field-input input-glow resize-none"
            />
          </div>
          <button
            type="submit"
            class="group w-full overflow-hidden rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-blue-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>

    <!--Social / contact cards-->
    <div class="mt-16 grid gap-6 md:grid-cols-3">
      <a :href="`mailto:${EMAIL}`" class="contact-card">
        <div class="mb-2 text-2xl"><i class="fa-solid fa-at"></i></div>
        <h4 class="font-semibold text-heading">Email</h4>
        <p class="text-sm text-body">{{ EMAIL }}</p>
      </a>
      <a
        href="https://www.instagram.com/fiatkul/"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-card"
      >
        <div class="mb-2 text-2xl"><i class="fa-brands fa-instagram"></i></div>
        <h4 class="font-semibold text-heading">Instagram</h4>
        <p class="text-sm text-body">Connect with me</p>
      </a>
      <a
        href="https://github.com/Byffify"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-card"
      >
        <div class="mb-2 text-2xl"><i class="fa-brands fa-github"></i></div>
        <h4 class="font-semibold text-heading">GitHub</h4>
        <p class="text-sm text-body">View my code</p>
      </a>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { EMAIL } from '@/site.js'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

function onSubmit() {
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )
  window.location.href = `mailto:${EMAIL}?subject=Portfolio%20Inquiry&body=${body}`
}
</script>
