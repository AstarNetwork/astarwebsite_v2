<template>
  <div class="relative h-[200vh]">
    <img
      src="/images/common/gradient-bg.svg"
      alt=""
      class="fixed -z-20 top-0"
    />
    <div class="mission-1 h-screen sticky top-0">
      <div class="h-screen flex items-center justify-center">
        <h2>
          <img
            src="/images/solutions/our-mission-title.svg"
            alt="Our Mission"
            class="mx-auto w-full max-w-[600px]"
          />
        </h2>
      </div>
      <div class="absolute -top-40 w-full -z-10">
        <img
          src="/images/solutions/our-mission-image.svg"
          alt=""
          class="mx-auto mission-image"
        />
      </div>
    </div>
    <div class="z-10 relative">
      <div
        class="backdrop-blur bg-white/70 mx-auto w-screen h-screen flex items-center justify-center"
      >
        <div class="text-center text-4xl leading-[200%] space-y-20 max-w-lg">
          <p class="text-slate-950 font-semibold">
            Create new opportunities for you to use web3.
          </p>
          <p class="text-slate-950">
            Astar Foundation creates the tools and community necessary to build
            a more inclusive and empowered web for you.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
.mission-1 {
  view-timeline-name: --mission1;
}

h2 {
  animation: scale-up both, fade-away both linear;
  animation-timeline: --mission1;
  animation-range: entry-crossing 50% exit 60%, exit 0% exit 70%;
}

.mission-image {
  animation: rotate both linear, fade-away both linear;
  animation-timeline: --mission1;
  animation-range: entry-crossing 50% exit 60%, exit 50% exit 100%;
}

@keyframes scale-up {
  to {
    scale: 1.5;
  }
}

@keyframes fade-away {
  100% {
    opacity: 0;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
