<template>
  <!--BackgroundElements — decorative blobs and grid (fixed, non-interactive)-->
  <div class="pointer-events-none fixed inset-0 overflow-hidden">
    <!--Gradient blob — top left-->
    <div
      class="absolute left-0 top-0 h-96 w-96 animate-float-slow rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 blur-3xl opacity-60 mix-blend-multiply dark:from-blue-500/20 dark:to-purple-500/20 dark:opacity-40 dark:mix-blend-screen"
    />
    <!--Gradient blob — top right-->
    <div
      class="absolute right-0 top-1/4 h-96 w-96 animate-float rounded-full bg-gradient-to-bl from-indigo-500/15 to-blue-500/15 blur-3xl opacity-50 mix-blend-multiply dark:from-indigo-500/20 dark:to-blue-500/20 dark:opacity-30 dark:mix-blend-screen"
      style="animation-delay: 2s"
    />
    <!--Gradient blob — bottom-->
    <div
      class="absolute bottom-0 left-1/4 h-96 w-96 animate-float-slow rounded-full bg-gradient-to-tr from-purple-500/10 to-pink-500/10 blur-3xl opacity-50 mix-blend-multiply dark:from-purple-500/20 dark:to-pink-500/20 dark:opacity-30 dark:mix-blend-screen"
      style="animation-delay: 4s"
    />
    <!--Subtle grid overlay-->
    <div
      class="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
      style="
        background-image:
          linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.08) 25%, rgba(59, 130, 246, 0.08) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.08) 75%, rgba(59, 130, 246, 0.08) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.08) 25%, rgba(59, 130, 246, 0.08) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.08) 75%, rgba(59, 130, 246, 0.08) 76%, transparent 77%, transparent);
        background-size: 50px 50px;
      "
    />
    <!--Top center glow-->
    <div
      class="absolute left-1/2 top-0 h-64 w-full -translate-x-1/2 bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl dark:from-blue-500/5"
    />
  </div>
</template>
