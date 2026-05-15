<script setup>
import { ref } from "vue";
import CourseCard from "./components/CourseCard.vue";
import CourseModal from "./components/CourseModal.vue";
import StarCard from "./components/StarCard.vue";
import ToastNotification from "./components/ToastNotification.vue";
import UserDropdown from "./components/UserDropdown.vue";
import AppNavbar from "./components/AppNavbar.vue";

const isModalOpen = ref(false);
const modalData = ref(null);
const showToast = ref(false);
const toastMessage = ref("");
const toastType = ref("success");

const openModal = (course) => {
  modalData.value = {
    title: course.title,
    description: course.desc,
    instructor: "Prof. John Smith",
    students: 45,
    rating: 4.8,
  };
  isModalOpen.value = true;
};

const handleEnroll = () => {
  toastMessage.value = `Enrolled successfully in ${modalData.value.title}!`;
  toastType.value = "success";
  showToast.value = true;
  isModalOpen.value = false;
};

const stats = ref([
  { id: 1, label: "Active Courses", val: "3" },
  { id: 2, label: "Pending Assignments", val: "2" },
  { id: 3, label: "Completed Tasks", val: "8" },
  { id: 4, label: "Overall Progress", val: "72%" },
]);

const courses = [
  {
    courseCode: "INT250",
    title: "CSS Framework",
    desc: "Learn how to build responsive and interactive web applications using Vue.js and Tailwind CSS.",
    progress: 72,
    status: "In Progress",
  },
  {
    courseCode: "INT161",
    title: "Object-Oriented Programming",
    desc: "Practice Java programming, object-oriented design, and software development principles.",
    progress: 58,
    status: "In Progress",
  },
];
</script>

<template>
  <AppNavbar />
  <div class="bg-slate-900/5 dark:bg-slate-900/50 min-h-screen py-8">
    <section>
      <div
        class="bg-indigo-600/90 max-w-7xl mx-auto px-6 py-8 shadow-md rounded-2xl flex flex-col gap-4"
      >
        <p class="text-white">Welcome back, Student!</p>
        <h1 class="font-bold text-3xl text-white">
          Continue your learning journey today.
        </h1>
        <p class="text-white">
          Track your courses, review assignments, and monitor your learning
          progress in one place.
        </p>
        <button
          @click="isModalOpen = true"
          class="bg-white text-indigo-600 hover:bg-indigo-100 px-4 py-2 rounded-xl font-semibold md:w-fit w-full"
        >
          View My Courses
        </button>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-4 gap-4 max-w-7xl mx-auto mt-8">
        <StarCard
          v-for="item in stats"
          :key="item.id"
          :title="item.label"
          :value="item.val"
        />
      </div>
    </section>
    <section>
      <div class="max-w-7xl mx-auto mt-8">
        <h1 class="font-bold text-2xl">My Courses</h1>
        <p class="text-slate-400 text-sm">
          Review your course progress and assignments status.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 mt-4">
          <CourseCard
            v-for="course in courses"
            :key="course.courseCode"
            :courseCode="course.courseCode"
            :title="course.title"
            :desc="course.desc"
            :progress="course.progress"
            :status="course.status"
            @viewDetails="openModal(course)"
            @submitAssignment="handleEnroll"
          />
        </div>
      </div>
    </section>

    <CourseModal
      :isOpen="isModalOpen"
      :courseData="modalData"
      @close="isModalOpen = false"
      @enroll="handleEnroll"
    />

    <ToastNotification
      v-if="showToast"
      :message="toastMessage"
      :type="toastType"
      @close="showToast = false"
    />
  </div>
</template>
