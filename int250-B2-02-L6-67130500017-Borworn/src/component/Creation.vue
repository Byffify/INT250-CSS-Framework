<script setup></script>

<template>
  <section>
    <!-- 4.1 Section Container -->
    <div class="max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
      <!-- 4.2 Header Row -->
      <div
        class="flex flex-row justify-center md:justify-between items-center mb-12"
      >
        <!-- 4.3 Section Title -->
        <h2 class="text-4xl md:text-5xl text-center uppercase md:text-left">
          Our creations
        </h2>
        <!-- 4.4 Desktop Button -->
        <button
          class="hidden md:block px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black bg-white text-black hover:bg-black hover:text-white"
        >
          See All
        </button>
      </div>

      <!-- 4.5 Item Container -->
      <div
        class="flex flex-col flex-wrap gap-6 w-full font-2xl text-white uppercase md:flex-row md:gap-8"
      >
        <!-- 4.6 Item Card -->
        <div
          class="group relative overflow-hidden w-full md:basis-[calc(25%-1.5rem)]"
        >
          <!-- 4.7.1 Desktop Image -->
          <img
            src="../assets/desktop/image-deep-earth.jpg"
            alt=""
            class="hidden md:block w-full transition decoration-neutral-200 group-hover:scale-110"
          />
          <!-- 4.7.2 Mobile Image -->
          <img
            src="../assets/mobile/image-deep-earth.jpg"
            alt=""
            class="w-full md:hidden"
          />
          <!-- 4.8 Gradient Overlay -->
          <div
            class="absolute inset-0 transition duration-200 bg-gradient-to-b from-transperent to-dark-900 group-hover:from-gray-900/60 group-hover:to-gray-400/20"
          ></div>
          <!-- 4.8 Title -->
          <h5
            class="absolute px-6 md:px-10 w-52 bottom-4 md:bottom-8 transition duration-200 group-hover:scale-110 group-hover:text-black"
          >
            Deep <br />Earth
          </h5>
        </div>
        <div
          class="group relative overflow-hidden w-full md:basis-[calc(25%-1.5rem)]"
        >
          <!-- 4.7.1 Desktop Image -->
          <img
            src="../assets/desktop/image-night-arcade.jpg"
            alt=""
            class="hidden md:block w-full transition decoration-neutral-200 group-hover:scale-110"
          />
          <!-- 4.7.2 Mobile Image -->
          <img
            src="../assets/mobile/image-night-arcade.jpg"
            alt=""
            class="w-full md:hidden"
          />
          <!-- 4.8 Gradient Overlay -->
          <div
            class="absolute inset-0 transition duration-200 bg-gradient-to-b from-transperent to-dark-900 group-hover:from-gray-900/60 group-hover:to-gray-400/20"
          ></div>
          <!-- 4.8 Title -->
          <h5
            class="absolute px-6 md:px-10 w-52 bottom-4 md:bottom-8 transition duration-200 group-hover:scale-110 group-hover:text-black"
          >
            Night <br>Arcade
          </h5>
        </div>
        <div
          class="group relative overflow-hidden w-full md:basis-[calc(25%-1.5rem)]"
        >
          <!-- 4.7.1 Desktop Image -->
          <img
            src="../assets/desktop/image-soccer-team.jpg"
            alt=""
            class="hidden md:block w-full transition decoration-neutral-200 group-hover:scale-110"
          />
          <!-- 4.7.2 Mobile Image -->
          <img
            src="../assets/mobile/image-soccer-team.jpg"
            alt=""
            class="w-full md:hidden"
          />
          <!-- 4.8 Gradient Overlay -->
          <div
            class="absolute inset-0 transition duration-200 bg-gradient-to-b from-transperent to-dark-900 group-hover:from-gray-900/60 group-hover:to-gray-400/20"
          ></div>
          <!-- 4.8 Title -->
          <h5
            class="absolute px-6 md:px-10 w-52 bottom-4 md:bottom-8 transition duration-200 group-hover:scale-110 group-hover:text-black"
          >
            Soccer <br />Team VR
          </h5>
        </div>
        <div
          class="group relative overflow-hidden w-full md:basis-[calc(25%-1.5rem)]"
        >
          <!-- 4.7.1 Desktop Image -->
          <img
            src="../assets/desktop/image-grid.jpg"
            alt=""
            class="hidden md:block w-full transition decoration-neutral-200 group-hover:scale-110"
          />
          <!-- 4.7.2 Mobile Image -->
          <img
            src="../assets/mobile/image-grid.jpg"
            alt=""
            class="w-full md:hidden"
          />
          <!-- 4.8 Gradient Overlay -->
          <div
            class="absolute inset-0 transition duration-200 bg-gradient-to-b from-transperent to-dark-900 group-hover:from-gray-900/60 group-hover:to-gray-400/20"
          ></div>
          <!-- 4.8 Title -->
          <h5
            class="absolute px-6 md:px-10 w-52 bottom-4 md:bottom-8 transition duration-200 group-hover:scale-110 group-hover:text-black"
          >
            The Grid
          </h5>
        </div>
        <div
          class="group relative overflow-hidden w-full md:basis-[calc(25%-1.5rem)]"
        >
          <!-- 4.7.1 Desktop Image -->
          <img
            src="../assets/desktop/image-from-above.jpg"
            alt=""
            class="hidden md:block w-full transition decoration-neutral-200 group-hover:scale-110"
          />
          <!-- 4.7.2 Mobile Image -->
          <img
            src="../assets/mobile/image-from-above.jpg"
            alt=""
            class="w-full md:hidden"
          />
          <!-- 4.8 Gradient Overlay -->
          <div
            class="absolute inset-0 transition duration-200 bg-gradient-to-b from-transperent to-dark-900 group-hover:from-gray-900/60 group-hover:to-gray-400/20"
          ></div>
          <!-- 4.8 Title -->
          <h5
            class="absolute px-6 md:px-10 w-52 bottom-4 md:bottom-8 transition duration-200 group-hover:scale-110 group-hover:text-black"
          >
            From Up <br />Above VR
          </h5>
        </div>
        <div
          class="group relative overflow-hidden w-full md:basis-[calc(25%-1.5rem)]"
        >
          <!-- 4.7.1 Desktop Image -->
          <img
            src="../assets/desktop/image-pocket-borealis.jpg"
            alt=""
            class="hidden md:block w-full transition decoration-neutral-200 group-hover:scale-110"
          />
          <!-- 4.7.2 Mobile Image -->
          <img
            src="../assets/mobile/image-pocket-borealis.jpg"
            alt=""
            class="w-full md:hidden"
          />
          <!-- 4.8 Gradient Overlay -->
          <div
            class="absolute inset-0 transition duration-200 bg-gradient-to-b from-transperent to-dark-900 group-hover:from-gray-900/60 group-hover:to-gray-400/20"
          ></div>
          <!-- 4.8 Title -->
          <h5
            class="absolute px-6 md:px-10 w-52 bottom-4 md:bottom-8 transition duration-200 group-hover:scale-110 group-hover:text-black"
          >
            Pocket <br />Borealis
          </h5>
        </div>
        <div
          class="group relative overflow-hidden w-full md:basis-[calc(25%-1.5rem)]"
        >
          <!-- 4.7.1 Desktop Image -->
          <img
            src="../assets/desktop/image-curiosity.jpg"
            alt=""
            class="hidden md:block w-full transition decoration-neutral-200 group-hover:scale-110"
          />
          <!-- 4.7.2 Mobile Image -->
          <img
            src="../assets/mobile/image-curiosity.jpg"
            alt=""
            class="w-full md:hidden"
          />
          <!-- 4.8 Gradient Overlay -->
          <div
            class="absolute inset-0 transition duration-200 bg-gradient-to-b from-transperent to-dark-900 group-hover:from-gray-900/60 group-hover:to-gray-400/20"
          ></div>
          <!-- 4.8 Title -->
          <h5
            class="absolute px-6 md:px-10 w-52 bottom-4 md:bottom-8 transition duration-200 group-hover:scale-110 group-hover:text-black"
          >
            The<br />Curiosity
          </h5>
        </div>
        <div
          class="group relative overflow-hidden w-full md:basis-[calc(25%-1.5rem)]"
        >
          <!-- 4.7.1 Desktop Image -->
          <img
            src="../assets/desktop/image-fisheye.jpg"
            alt=""
            class="hidden md:block w-full transition decoration-neutral-200 group-hover:scale-110"
          />
          <!-- 4.7.2 Mobile Image -->
          <img
            src="../assets/mobile/image-fisheye.jpg"
            alt=""
            class="w-full md:hidden"
          />
          <!-- 4.8 Gradient Overlay -->
          <div
            class="absolute inset-0 transition duration-200 bg-gradient-to-b from-transperent to-dark-900 group-hover:from-gray-900/60 group-hover:to-gray-400/20"
          ></div>
          <!-- 4.8 Title -->
          <h5
            class="absolute px-6 md:px-10 w-52 bottom-4 md:bottom-8 transition duration-200 group-hover:scale-110 group-hover:text-black"
          >
            Make It<br />
            Fisheye
          </h5>
        </div>
        <!-- 4.9 Mobile Bottom Button -->
        <div class="flex justify-center mt-12 md:hidden">
          <button
            class="w-full px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white text-black bg-white transition duration-200"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
