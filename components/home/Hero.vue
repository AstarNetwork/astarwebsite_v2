<template>
  <section class="container-lg pt-20 pb-12">
    <h1 class="text-center mb-12 space-y-6">
      <span>Connecting</span>
      <span>Web3 to You</span>
    </h1>
    <p class="text-center max-w-2xl mx-auto text-lg">
      Creating opportunities for individuals to use web3 technology. We connect
      people to web3—through entertainment, blockchain development, business
      development, and community events.
    </p>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";
</script>

<style lang="postcss" scoped>
section {
  view-timeline-name: --section;
  overflow-x: hidden;
}

h1 span {
  display: block;
}

h1 span:first-of-type {
  font-weight: 700;
  font-size: 6.7rem;
  letter-spacing: -0.3rem;
  line-height: 1.25;
  animation: scale-up1 both, fade-away both linear;
  animation-timeline: --section;
  animation-range: entry-crossing 50% exit 60%, exit 0% exit 70%;
}

h1 span:last-of-type {
  font-size: 3.5rem;
  letter-spacing: -0.2rem;
  line-height: 1.25;
  animation: scale-up2 both, fade-away both linear;
  animation-timeline: --section;
  animation-range: entry-crossing 70% exit 100%, exit 30% exit 100%;
}

@keyframes scale-up1 {
  to {
    scale: 1.5;
  }
}

@keyframes scale-up2 {
  to {
    scale: 2;
  }
}

@keyframes fade-away {
  100% {
    opacity: 0;
  }
}
</style>
