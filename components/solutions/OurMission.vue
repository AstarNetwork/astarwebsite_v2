<template>
  <div class="relative -mt-12 lg:-mt-32">
    <div class="-z-10 sm:-ml-12 w-full text-center sm:text-left">
      <span
        class="border border-blue/30 rounded-full p-7 sm:p-12 lg:p-16 xl:p-20 inline-block"
      >
        <span
          class="border border-blue/30 rounded-full p-7 sm:p-12 lg:p-16 xl:p-20 inline-block"
        >
          <span
            class="border border-blue/30 rounded-full p-7 sm:p-12 lg:p-16 xl:p-20 inline-block"
          >
            <span
              class="border border-blue/30 rounded-full p-7 sm:p-12 lg:p-16 xl:p-20 inline-block"
            >
              <img
                src="/images/common/symbol.svg"
                alt=""
                class="mission-image w-24 sm:w-36 lg:w-48 xl:w-60"
              />
            </span>
          </span>
        </span>
      </span>
    </div>
    <div class="sm:absolute h-full w-full top-0">
      <div
        class="container-md h-full flex justify-end items-center -mt-36 sm:mt-0"
      >
        <div
          class="sm:w-3/5 border-2 border-white rounded-xl shadow-lg bg-white/50 px-6 py-12 sm:p-16 lg:p-24 space-y-4 sm:space-y-6 lg:space-y-8"
          data-aos="fade-up"
        >
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0047FF] to-[#00D1FF] leading-tight sm:leading-tight lg:leading-tight"
          >
            {{ $t("solutions.mission.title") }}
          </h2>

          <p
            class="text-slate-950 text-lg sm:text-xl lg:text-2xl leading-loose sm:leading-loose lg:leading-loose"
          >
            {{ $t("solutions.mission.first") }}
          </p>
          <p
            class="text-slate-950 text-lg sm:text-xl lg:text-2xl leading-loose sm:leading-loose lg:leading-loose"
          >
            {{ $t("solutions.mission.second") }}
          </p>
        </div>
      </div>
    </div>

    <div class="absolute -z-10 left-0 top-0">
      <img src="/images/common/gradient-bg.svg" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
.mission-image {
  animation: rotate linear;
  animation-timeline: scroll() !important;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(1000deg);
  }
}
</style>
