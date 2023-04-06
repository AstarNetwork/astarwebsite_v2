<template>
  <section class="bg-black py-8 sm:py-12">
    <div class="max-w-4xl mx-auto px-4">
      <div
        class="border-l-2 border-gray-300 relative py-16 sm:py-24 after:block after:absolute after:w-3 after:h-3 after:rounded-full after:left-[-0.4rem] after:top-0 after:bg-white"
      >
        <ChevronDownIcon
          class="w-8 h-8 text-white absolute left-[-1.05rem] -bottom-3"
        />
        <div class="ml-6 sm:ml-8 lg:ml-24">
          <p class="font-bold text-2xl sm:text-3xl title">
            <span>{{ $t("program.timeline.subheading") }}</span>
          </p>
          <h2
            class="text-white text-2xl sm:text-3xl font-medium mt-2 mb-8 sm:mb-16 leading-snug"
          >
            {{ $t("program.timeline.heading") }}
          </h2>
        </div>
        <ol class="timeline space-y-12">
          <li class="after:bg-space-pink before:bg-space-pink">
            <div class="border-space-pink">
              <h3 class="text-space-pink">
                {{ $t("program.timeline.application.title") }}
                <small class="block sm:inline">
                  ({{ $t("program.timeline.application.dates") }})
                </small>
              </h3>
              <p class="text-gray-300">
                {{ $t("program.timeline.application.description") }}
              </p>
            </div>
          </li>
          <li class="after:bg-space-sky before:bg-space-sky">
            <div class="border-space-sky">
              <h3 class="text-space-sky">
                {{ $t("program.timeline.incubation.title") }}
                <small class="block sm:inline">
                  ({{ $t("program.timeline.incubation.dates") }})
                </small>
              </h3>
              <p class="text-gray-300">
                {{ $t("program.timeline.incubation.description") }}
              </p>
            </div>
          </li>
          <li class="after:bg-space-cyan before:bg-space-cyan">
            <div class="border-space-cyan">
              <h3 class="text-space-cyan">
                {{ $t("program.timeline.demo.title") }}
                <small class="block sm:inline">
                  ({{ $t("program.timeline.demo.dates") }})
                </small>
              </h3>
              <p class="text-gray-300">
                {{ $t("program.timeline.demo.description") }}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
</script>

<style lang="postcss" scoped>
.timeline li {
  @apply pl-6 sm:pl-8 lg:pl-24 relative;
}
.timeline li div {
  @apply border px-4 py-8 sm:p-8 bg-black relative;
}
.timeline li::before {
  @apply block absolute top-[50%] h-[1px] left-0 w-full;
  content: "";
}
.timeline li::after {
  @apply block absolute w-4 h-4 rounded-full mr-2 left-[-0.575rem] top-[50%] -mt-2;
}
.timeline li h3 {
  @apply inline-block text-2xl sm:text-3xl font-medium mb-2 leading-tight;
}
.timeline li h3 small {
  @apply font-normal text-base sm:text-lg;
}
.timeline li p {
  @apply sm:text-lg;
}
</style>
