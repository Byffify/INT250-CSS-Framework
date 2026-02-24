<script setup></script>

<template>
  <!-- Card Section -->
  <div class="flex items-center justify-center bg-zinc-700 h-screen">
    <!-- Card Container -->
    <div class="bg-zinc-800 p-2 mx-1 rounded-2xl">
      <!-- Flex Container -->
      <div class="flex flex-col md:flex-row rounded-l-xl">
        <!-- Card Image -->
        <img
          src="../assets/caesar-salad.jpg"
          alt=""
          class="object-fit md:rounded-r-none rounded-xl h-80 md:h-64 md:rounded-l-xl transform hover:scale-105 hover:rounded-xl duration-200"
        />

        <!-- Text Content -->
        <div class="p-6 md:p-12">
          <!-- Heading -->
          <h2
            class="font-serif text-xl font-medium text-center text-white md:text-left"
          >
            Get diet and fitness tips in your inbox
          </h2>

          <!-- Description -->
          <p
            class="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left"
          >
            Eat better and exercise better. Sign up for the Diet&Fitness
            newsletter.
          </p>

          <!-- Form Container -->
          <div
            class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0"
          >
            <!-- Email Input -->
            <input
              type="text"
              placeholder="Enter your email address"
              class="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
            />

            <!-- Subscribe Button -->
            <button
              class="px-5 py-3 text-zinc-800 bg-lime-500 hoverLbg-lime-700 hover:text-white duration-500"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
