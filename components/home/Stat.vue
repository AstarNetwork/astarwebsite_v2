<template>
  <div
    ref="observationArea"
    class="text-center"
  >
    <div class="text-blue font-semibold text-4xl sm:text-5xl lg:text-6xl mb-1">
      <count-up
        v-if="isVisible"
        :end-val="stat.number"
        class="inline"
      />
      <span>{{ stat.unitModifier }}</span>
    </div>
    <div class="text-sm lg:text-base">
      {{ stat.name }}
    </div>
    <div
      v-if="stat.caption"
      class="text-xs"
    >
      {{ stat.caption }}
    </div>
  </div>
</template>

<script setup lang="ts">
import CountUp from 'vue-countup-v3'

import { onMounted, ref } from 'vue'

const observationArea = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    {
      threshold: 0.5,
    },
  )

  // observe each element
  if (observationArea.value) {
    observer.observe(observationArea.value)
  }
})

defineProps({
  stat: {
    type: Object,
    default: () => ({
      number: 0,
      unitModifier: '',
      name: '',
      caption: '',
    }),
  },
})
</script>

<style lang="postcss" scoped></style>
