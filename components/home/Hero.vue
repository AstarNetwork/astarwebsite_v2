<template>
  <section class="container-lg pt-20 pb-12">
    <h1 class="text-center mb-12 space-y-6">
      <span>{{ $t("home.hero.title.connecting") }}</span>
      <span>{{ $t("home.hero.title.youToWeb3") }}</span>
    </h1>
    <p class="text-center max-w-2xl mx-auto sm:text-lg">
      {{ $t("home.hero.description") }}
    </p>
  </section>
</template>

<script setup lang="ts"></script>

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
  font-size: 2.25rem;
  letter-spacing: -0.075rem;
  line-height: 1.25;
  animation: scale-up1 both, fade-away both linear;
  animation-timeline: --section !important;
  animation-range: entry-crossing 50% exit 60%, exit 0% exit 70%;
  @media (min-width: 640px) {
    font-size: 4.25rem;
    letter-spacing: -0.15rem;
  }
  @media (min-width: 1024px) {
    font-size: 5.5rem;
    letter-spacing: -0.2rem;
  }
  @media (min-width: 1536px) {
    font-size: 6.7rem;
    letter-spacing: -0.3rem;
  }
}

h1 span:last-of-type {
  font-size: 1.375rem;
  letter-spacing: -0.05rem;
  line-height: 1.25;
  animation: scale-up2 both, fade-away both linear;
  animation-timeline: --section !important;
  animation-range: entry-crossing 70% exit 100%, exit 30% exit 100%;
  @media (min-width: 640px) {
    font-size: 2.25rem;
    letter-spacing: -0.1rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.75rem;
    letter-spacing: -0.1rem;
  }
  @media (min-width: 1536px) {
    font-size: 3.5rem;
    letter-spacing: -0.2rem;
  }
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

/* only firefox */
@-moz-document url-prefix() {
  h1 span:first-of-type,
  h1 span:last-of-type {
    animation: none;
    line-height: 1;
  }
  h1 span:first-of-type {
    font-size: 3rem;
    @media (min-width: 640px) {
      font-size: 5.5rem;
      letter-spacing: -0.15rem;
    }
    @media (min-width: 1024px) {
      font-size: 7rem;
      letter-spacing: -0.2rem;
    }
    @media (min-width: 1536px) {
      font-size: 9rem;
      letter-spacing: -0.3rem;
    }
  }
  h1 span:last-of-type {
    font-size: 2.125rem;
    @media (min-width: 640px) {
      font-size: 3.5rem;
      letter-spacing: -0.1rem;
    }
    @media (min-width: 1024px) {
      font-size: 4.5rem;
      letter-spacing: -0.1rem;
    }
    @media (min-width: 1536px) {
      font-size: 6rem;
      letter-spacing: -0.2rem;
    }
  }
}

/* only safari */
@supports (hanging-punctuation: first) and (-webkit-appearance: none) {
  h1 span:first-of-type,
  h1 span:last-of-type {
    animation: none;
  }
  h1 span:first-of-type {
    font-size: 3rem;
    @media (min-width: 640px) {
      font-size: 5.5rem;
      letter-spacing: -0.15rem;
    }
    @media (min-width: 1024px) {
      font-size: 7rem;
      letter-spacing: -0.2rem;
    }
    @media (min-width: 1536px) {
      font-size: 9rem;
      letter-spacing: -0.3rem;
    }
  }
  h1 span:last-of-type {
    font-size: 2.125rem;
    @media (min-width: 640px) {
      font-size: 3.5rem;
      letter-spacing: -0.1rem;
    }
    @media (min-width: 1024px) {
      font-size: 4.5rem;
      letter-spacing: -0.1rem;
    }
    @media (min-width: 1536px) {
      font-size: 6rem;
      letter-spacing: -0.2rem;
    }
  }
}
</style>
