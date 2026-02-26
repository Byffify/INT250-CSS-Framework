<script setup></script>

<template>
  <nav class="w-full">
    <div class="h-14 flex items-center px-5 md:gap-20">
      <!-- Left container -->
      <div class="flex items-center gap-4">
        <i class="fa-solid fa-bars"></i>
        <img
          src="../assets/YouTube-Logo.wine.svg"
          alt=""
          class="w-45"
        />
      </div>
      <!-- Middle Container -->
      <div class="flex flex-1 items-center justify-center">
        <!-- Input Container -->
        <div class="flex w-full max-w-xl">
          <div
            class="items-center border border-gray-400 rounded-l-full pl-5 pr-1 py-2 w-full hidden md:flex lg:flex"
          >
            <input type="text" placeholder="Search" class="flex-1" />

            <i class="fa-solid fa-x"></i>
          </div>

          <div
            class="px-5 border py-2 rounded-r-full bg-gray-200 border-gray-400 items-center hidden md:flex lg:flex"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div class="flex items-center md:hidden lg:hidden w-fit px-3">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div
          class="ml-3 p-3 bg-gray-200 rounded-full w-10 h-10 hidden md:flex lg:flex"
        >
          <i class="fa-solid fa-microphone"></i>
        </div>
      </div>
      <!-- Right Container -->
      <div class="flex items-center gap-3">
        <div class="flex items-center bg-gray-200 px-3 py-2 rounded-full gap-1">
          <i class="fa-solid fa-plus"></i>
          <p>สร้าง</p>
        </div>
        <div>
          <i class="fa-regular fa-bell"></i>
        </div>
        <div class="w-8 h-8 bg-black rounded-full"></div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
