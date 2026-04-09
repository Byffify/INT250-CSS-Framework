<script setup>
import { computed, reactive, ref } from "vue";

import BaseInput from "./components/BaseInput.vue";
import BaseSelect from "./components/BaseSelect.vue";
import BaseTextarea from "./components/BaseTextarea.vue";
import BaseRadioGroup from "./components/BaseRadioGroup.vue";
import BaseCheckbox from "./components/BaseCheckbox.vue";

const form = reactive({
  fullName: "",
  studentId: "",
  email: "",
  password: "",
  program: "",
  yearLevel: "",
  bio: "",
  track: "",
  agree: false,
});

const submitted = ref(false);

const programOptions = [
  { label: "Computer Science", value: "CS" },
  { label: "Digital Service Innovation", value: "DSI" },
  { label: "Information Technology", value: "IT" },
  { label: "Software Engineering", value: "SE" },
];

const trackOptions = [
  { label: "Frontend UI Development", value: "frontend" },
  { label: "Backend API Design", value: "backend" },
  { label: "UX/UI Design", value: "ux" },
  { label: "AI for Productivity", value: "ai" },
];

const yearOptions = [
  { label: "Year 1", value: "1" },
  { label: "Year 2", value: "2" },
  { label: "Year 3", value: "3" },
  { label: "Year 4", value: "4" },
];

const errors = computed(() => {
  const e = {};

  if (!form.fullName.trim()) e.fullName = "Full name is required.";

  if (!form.studentId.trim()) {
    e.studentId = "Student ID is required.";
  } else if (!/^\d{11}$/.test(form.studentId)) {
    e.studentId = "Student ID must be 10 digits."; // คงไว้ตามโค้ดเริ่มต้นของคุณ
  }

  if (!form.email.trim()) {
    e.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    e.email = "Please enter a valid email address.";
  }

  if (!form.password.trim()) {
    e.password = "Password is required.";
  } else if (form.password.length < 8) {
    e.password = "Password must be at least 8 characters.";
  }

  if (!form.program) e.program = "Please select your program.";
  if (!form.yearLevel) e.yearLevel = "Please select your year level.";
  if (!form.track) e.track = "Please choose a workshop track.";
  if (!form.agree) e.agree = "You must accept the terms before submitting.";

  return e;
});

const isFormValid = computed(() => Object.keys(errors.value).length === 0);

function handleSubmit() {
  submitted.value = true;

  if (!isFormValid.value) return;

  alert("Registration submitted successfully!"); // คงไว้ตามโค้ดเริ่มต้นของคุณ

  form.fullName = "";
  form.studentId = "";
  form.email = "";
  form.password = "";
  form.program = "";
  form.yearLevel = "";
  form.bio = "";
  form.track = "";
  form.agree = false;
  submitted.value = false;
}

// ----------------------------------------------------
// ส่วนที่เขียน "เพิ่มเติม" ลงไปโดยไม่แก้ของเดิม
// ----------------------------------------------------
const yearDescriptions = {
  "1": "Beginner student level",
  "2": "Intermediate foundation",
  "3": "Project-focused stage",
  "4": "Internship or capstone stage"
};

function handleReset() {
  form.fullName = "";
  form.studentId = "";
  form.email = "";
  form.password = "";
  form.program = "";
  form.yearLevel = "";
  form.bio = "";
  form.track = "";
  form.agree = false;
  submitted.value = false;
}
</script>

<template>
  <div class="min-h-screen bg-slate-100 py-10 px-4">
    <div class="mx-auto max-w-4xl">
      <div class="bg-white shadow-md rounded-2xl overflow-hidden ring-1 ring-slate-200">
        <div class="bg-slate-50 px-5 py-6 border-b border-slate-200">
          <p class="text-sm font-medium text-blue-600">Hands-on Lab</p>
          <h1 class="mt-1 text-2xl font-bold text-slate-900">
            Student Workshop Registration Form
          </h1>
          <p class="mt-2 text-sm text-slate-600">
            Practice styling form controls, focus states, and validation
            feedback with Vue.js and Tailwind CSS
          </p>
        </div>
        
        <form class="p-6 md:p-8 space-y-6" @submit.prevent="handleSubmit">
          
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <BaseInput 
              v-model="form.fullName" 
              label="Full Name *" 
              placeholder="Enter your full name" 
              :error="submitted ? errors.fullName : ''" 
            />
            <BaseInput 
              v-model="form.studentId" 
              label="Student ID *" 
              placeholder="e.g. 66012345671" 
              :error="submitted ? errors.studentId : ''" 
            />
            <BaseInput 
              v-model="form.email" 
              label="Email *" 
              placeholder="yourname@example.com" 
              :error="submitted ? errors.email : ''" 
            />
            <BaseInput 
              v-model="form.password" 
              label="Password *" 
              type="password" 
              placeholder="At least 8 characters" 
              :error="submitted ? errors.password : ''" 
            />
            <BaseSelect 
              v-model="form.program" 
              label="Program / Major *" 
              placeholder="Select your program" 
              :options="programOptions" 
              :error="submitted ? errors.program : ''" 
            />
            <BaseSelect 
              v-model="form.track" 
              label="Workshop Track *" 
              placeholder="Select a track" 
              :options="trackOptions" 
              :error="submitted ? errors.track : ''" 
            />
          </div>

          <BaseRadioGroup 
            v-model="form.yearLevel" 
            label="Year Level *" 
            :options="yearOptions" 
            :descriptions="yearDescriptions"
            :error="submitted ? errors.yearLevel : ''" 
          />

          <BaseTextarea 
            v-model="form.bio" 
            label="Short Bio" 
            placeholder="Tell us about your interests..." 
            :maxLength="200"
            description="Optional: briefly describe your interests or previous experience."
          />

          <BaseCheckbox 
            v-model="form.agree" 
            label="I confirm that the information provided is correct and I agree to participate in the workshop activities." 
            :error="submitted ? errors.agree : ''" 
          />
          <div class="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-sm text-slate-500">
              <span class="text-sm text-slate-500 font-bold">Tips:</span>
              Try submitting with empty fields to test validation feedbacks .
            </p>

            <div class="flex w-full gap-3 sm:w-auto">
              <button
                type="button"
                @click="handleReset"
                class="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
              >
                Reset Form
              </button>
              
              <button
                type="submit"
                :disabled="!form.agree"
                class="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Submit Registration
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>