<script setup>
defineProps([
  "profileimg",
  "background",
  "name",
  "subheading",
  "followers",
  "followings",
  "projects",
  "facebook",
  "instagram",
  "tiktok",
  "facebookurl",
  "instagramurl",
  "tiktokurl",
]);
</script>

<template>
  <!-- Card -->
  <div
    class="bg-white shadow-lg rounded-2xl min-w-[320px] overflow-hidden text-center"
  >
    <!-- Image Header / Profile Picture -->
    <div
      class="relative min-h-32 bg-cover bg-center"
      :style="'background-image: url(' + background + ')'"
    >
      <img
        :src="profileimg"
        alt="Profile Image"
        class="w-32 h-32 rounded-full object-cover border-4 border-white absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>

    <div class="px-6 pt-20 pb-6">
      <h2 class="font-bold text-gray-800 text-2xl mb-2">{{ name }}</h2>
      <h3 class="text-gray-600 text-lg">{{ subheading }}</h3>
    </div>

    <!-- Social Links -->
    <div class="border-t border-gray-200 p-6">
      <div class="flex justify-center gap-8">
        <a
          :href="facebookurl"
          target="_blank"
          class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
        >
          <i class="fa-brands fa-facebook text-xl"></i>
          <span class="font-semibold">{{ facebook }}</span>
        </a>

        <a
          :href="instagramurl"
          target="_blank"
          class="flex items-center gap-2 text-gray-700 hover:text-pink-300 transition"
        >
          <i class="fa-brands fa-instagram text-xl"></i>
          <span class="font-semibold">{{ instagram }}</span>
        </a>

        <a
          :href="tiktokurl"
          target="_blank"
          class="flex items-center gap-2 text-gray-700 hover:text-black transition"
        >
          <i class="fa-brands fa-tiktok text-xl"></i>
          <span class="font-semibold">{{ tiktok }}</span>
        </a>
      </div>
    </div>

    <!-- Stats -->
    <div
      class="p-6 border-t border-gray-200 flex item-center justify-center gap-6"
    >
      <!-- Follwers -->
      <div>
        <h4 class="text-gray-600 text-sm">Followers</h4>
        <p class="font-bold text-gray-800 text-2xl">{{ followers }}</p>
      </div>

      <!-- Followings -->
      <div>
        <h4 class="text-gray-600 text-sm">Following</h4>
        <p class="font-bold text-gray-800 text-2xl">{{ followings }}</p>
      </div>

      <!-- Project -->
      <div>
        <h4 class="text-gray-600 text-sm">Project</h4>
        <p class="font-bold text-gray-800 text-2xl">{{ projects }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
