<template>
  <section class="container-lg pt-20 pb-12">
    <h1 class="text-center mb-12">
      <span
        class="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight md:tracking-tighter"
      >
        {{ $t("home.hero.title.connecting") }}
      </span>
      <span
        class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
      >
        {{ $t("home.hero.title.youToWeb3") }}
      </span>
    </h1>
    <p class="trigger text-center max-w-2xl mx-auto sm:text-lg">
      {{ $t("home.hero.description") }}
    </p>
  </section>
</template>

<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()

onMounted(() => {
  $gsap.to('h1 span:first-of-type', {
    scale: 1.2,
    opacity: 0.5,
    scrollTrigger: {
      toggleActions: 'play none none reverse',
      trigger: 'section',
      start: 'bottom center',
      // markers: true,
      scrub: true,
    },
  })

  $gsap.to('h1 span:last-of-type', {
    scale: 1.6,
    opacity: 0.5,
    scrollTrigger: {
      toggleActions: 'play none none reverse',
      trigger: 'section',
      start: 'bottom center',
      // markers: true,
      scrub: true,
    },
  })
})
</script>

<style lang="postcss" scoped></style>
