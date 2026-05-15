<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const dropdownRef = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    closeDropdown();
  }
};

const handleLogout = () => {
  console.log("Logout clicked");
  closeDropdown();
};

const handleProfile = () => {
  console.log("Profile clicked");
  closeDropdown();
};

const handleSettings = () => {
  console.log("Settings clicked");
  closeDropdown();
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div ref="dropdownRef" class="relative">
    <!-- Dropdown button -->
    <button
      @click="toggleDropdown"
      class="border-slate-200 bg-white/90 p-2 flex justify-between items-center rounded-lg shadow-sm dark:border-slate-800 dark:bg-slate-900/90 w-fit gap-3 hover:bg-slate-50 dark:hover:bg-slate-800"
    >
      <div
        class="p-2 w-6 h-6 flex justify-center items-center rounded-full bg-indigo-600/20 font-bold text-indigo-600 text-xs"
      >
        ST
      </div>
      <span class="text-sm font-medium text-slate-700 dark:text-slate-300">
        Student
      </span>
      <span
        :class="['text-xs transition-transform', isOpen ? 'rotate-180' : '']"
      >
        ▼
      </span>
    </button>

    <!-- Dropdown menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-48 rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900 overflow-hidden"
    >
      <div class="py-1">
        <!-- Profile option -->
        <button
          @click="handleProfile"
          class="w-full px-4 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2"
        >
          <span>👤</span>
          <span>My Profile</span>
        </button>

        <!-- Settings option -->
        <button
          @click="handleSettings"
          class="w-full px-4 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2"
        >
          <span>⚙️</span>
          <span>Settings</span>
        </button>

        <!-- Divider -->
        <div class="my-1 border-t border-slate-200 dark:border-slate-700"></div>

        <!-- Logout option -->
        <button
          @click="handleLogout"
          class="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
