<script setup></script>

<template>
  <section class="w-full">
    <div class="max-w-7xl mx-auto px-4 py-4">
      <!-- Top Section -->
      <div class="flex gap-3 items-start lg:gap-6">
        <!-- Avatar -->
        <div
          class="w-12 h-12 lg:w-36 lg:h-36 bg-gray-300 rounded-full flex-shrink-0"
        ></div>

        <!-- Info -->
        <div class="flex flex-col">
          <!-- Title -->
          <h1 class="text-2xl lg:text-3xl font-bold">SIT KMUTT</h1>

          <!-- Channel Info -->

          <!-- Mobile + Tablet -->
          <div class="flex flex-col lg:hidden">
            <p class="font-semibold">@SIT.Family</p>

            <div class="flex gap-1 text-gray-500 text-sm">
              <p>ผู้ติดตาม 703 คน</p>

              <p>•</p>

              <p>วิดิโอ 135 รายการ</p>
            </div>
          </div>

          <!-- Desktop -->
          <div class="hidden lg:flex gap-2 text-gray-500">
            <p class="font-semibold text-black">@SIT.Family</p>

            <p>•</p>

            <p>ผู้ติดตาม 703 คน</p>

            <p>•</p>

            <p>วิดิโอ 135 รายการ</p>
          </div>

          <!-- Description -->
          <div class="text-gray-600 mt-1">
            School of Information Technology,KMUTT

            <button class="font-semibold ml-1">...เพิ่มเติม</button>
          </div>

          <!-- Link -->
          <a href="#" class="text-blue-600 mt-1 w-fit"> sit.kmutt.ac.th </a>

          <!-- Subscribe -->

          <!-- Mobile + Tablet -->
          <button
            class="bg-black text-white py-3 rounded-full w-full mt-4 lg:hidden"
          >
            ติดตาม
          </button>

          <!-- Desktop -->
          <button
            class="bg-black text-white px-5 py-2 rounded-full w-fit mt-3 hidden lg:block"
          >
            ติดตาม
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
