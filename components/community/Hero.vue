<template>
  <div
    class="landscape:min-h-[500px] landscape:lg:min-h-[800px] portrait:min-h-[80vh] flex items-center justify-start"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
      <div class="lg:w-1/2">
        <h1
          class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow"
        >
          {{ $t("community.title") }}
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl">
          {{ $t("community.description") }}
        </p>
      </div>
    </div>
  </div>
</template>
