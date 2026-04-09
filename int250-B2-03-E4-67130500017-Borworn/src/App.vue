<script setup>
import BaseButton from "./components/BaseButton.vue";
import BaseCard from "./components/BaseCard.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseAlert from "./components/BaseAlert.vue";
import BaseInput from "./components/BaseInput.vue";
</script>

<template>
  <section class="bg-gray-200/20 min-h-screen py-8">
    <div class="max-w-6xl mx-auto flex-col flex gap-6 px-4">
      <BaseCard
        title="1. Buttons"
        desc="Reusable action styles for primary, secondary, outline, and disabled states."
      >
        <div class="flex flex-row gap-3 mt-4">
          <BaseButton label="Primary Button" variant="primary"></BaseButton>
          <BaseButton label="Secondary Button" variant="secondary"></BaseButton>
          <BaseButton label="Outline Button" variant="outline"></BaseButton>
          <BaseButton
            label="Disabled Button"
            variant="disabled"
            :disabled="true"
          ></BaseButton>
        </div>
      </BaseCard>

      <BaseCard
        title="2. Badges"
        desc="Small reusable labels for category, state, or status indication."
      >
        <div class="flex flex-row gap-2 mt-4">
          <BaseBadge label="Success" variant="success"></BaseBadge>
          <BaseBadge label="Warning" variant="warning"></BaseBadge>
          <BaseBadge label="Error" variant="error"></BaseBadge>
          <BaseBadge label="Neutral" variant="neutral"></BaseBadge>
        </div>
      </BaseCard>

      <BaseCard
        title="3. Alerts"
        desc="Reusable feedback messages for success, warning, and error states"
      >
        <div class="flex flex-col gap-3 mt-4">
          <BaseAlert
            title="Success Alert"
            desc="Your profile has been updated successfully."
            variant="success"
          ></BaseAlert>
          <BaseAlert
            title="Warning Alert"
            desc="Please review the form before submitting."
            variant="warning"
          ></BaseAlert>
          <BaseAlert
            title="Error Alert"
            desc="Something went wrong. Please try again later."
            variant="error"
          ></BaseAlert>
        </div>
      </BaseCard>

      <BaseCard
        title="4. Form Controls"
        desc="Consistent form patterns with labels, helper text, and validation style."
      >
        <div class="flex flex-col gap-5 mt-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BaseInput
              label="Full Name"
              placeholder="Enter your full name"
              helperText="Use a clear and complete student name."
            />
            <BaseInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              helperText="Example: student@mail.kmutt.ac.th"
            />
          </div>
          <BaseInput
            label="Role"
            type="select"
            placeholder="Select your role"
            :options="['Student', 'Teacher', 'Admin']"
          />
          <BaseInput
            label="Message"
            type="textarea"
            placeholder="Write your message here"
          />
          <p class="text-sm text-red-500 mt-[-8px]">
            This is an example of validation/helper text styling.
          </p>
          <div>
            <BaseButton label="Submit Form" variant="primary"></BaseButton>
          </div>
        </div>
      </BaseCard>

      <BaseCard
        title="5. Cards"
        desc="Responsive card layout for reusable content blocks such as event, profile, or product cards."
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div
            class="border border-gray-200 rounded-xl p-5 bg-white flex flex-col h-full shadow-sm"
          >
            <div class="flex justify-between items-center mb-4">
              <BaseBadge
                label="New"
                variant="neutral"
                class="bg-blue-100 text-blue-600"
              />
              <span class="text-xs text-gray-400 font-medium">Reusable</span>
            </div>
            <h3 class="font-bold text-gray-800 text-lg mb-2">Basic Card</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-6">
              A simple reusable card for general content blocks in a dashboard
              or landing page.
            </p>
            <button
              class="mt-auto w-fit px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              View Details
            </button>
          </div>

          <div
            class="border border-gray-200 rounded-xl p-5 bg-white flex flex-col h-full shadow-sm"
          >
            <div class="flex justify-between items-center mb-4">
              <BaseBadge
                label="Profile"
                variant="neutral"
                class="bg-blue-100 text-blue-600"
              />
              <span class="text-xs text-gray-400 font-medium">Reusable</span>
            </div>
            <h3 class="font-bold text-gray-800 text-lg mb-2">
              Student Profile Card
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-6">
              A profile summary card showing student status, program, and quick
              information.
            </p>
            <button
              class="mt-auto w-fit px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              View Details
            </button>
          </div>

          <div
            class="border border-gray-200 rounded-xl p-5 bg-white flex flex-col h-full shadow-sm"
          >
            <div class="flex justify-between items-center mb-4">
              <BaseBadge
                label="Event"
                variant="neutral"
                class="bg-blue-100 text-blue-600"
              />
              <span class="text-xs text-gray-400 font-medium">Reusable</span>
            </div>
            <h3 class="font-bold text-gray-800 text-lg mb-2">Event Card</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-6">
              A reusable event component for workshops, seminars, or hackathon
              activities.
            </p>
            <button
              class="mt-auto w-fit px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              View Details
            </button>
          </div>
        </div>
      </BaseCard>

      <BaseCard
        title="6. Responsive Layout Example"
        desc="A reusable section layout with content on the left and summary panel on the right."
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div class="md:col-span-2 bg-gray-50 rounded-xl p-8">
            <h3 class="font-bold text-gray-800 text-xl mb-4">
              Main Content Area
            </h3>
            <p class="text-gray-600 leading-relaxed">
              This area can be used for dashboard content, a feature section,
              course details, or product descriptions. It demonstrates a simple
              reusable container pattern with consistent padding, rounded
              corners, and spacing.
            </p>
          </div>

          <div
            class="bg-blue-600 rounded-xl p-8 text-white flex flex-col justify-between"
          >
            <div>
              <h3 class="font-bold text-xl mb-4">Summary Panel</h3>
              <p class="text-blue-50 opacity-90 leading-relaxed">
                This panel can be reused for quick stats, announcements, or
                call-to-action content.
              </p>
            </div>
            <div class="mt-8">
              <BaseButton label="Learn More" variant="white" class="w-fit" />
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
  </section>
</template>
