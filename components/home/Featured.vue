<template>
  <div class="flex gap-6 container">
    <div class="box">
      <div>img</div>
      <h2 class="title">Bridge & Ecosystem</h2>
      <p>
        Astar zkEVM is an Ethereum Layer-2 scaling solution that leverages
        Polygon's CDK and AggLayer technology. Astar zkEVM inherits Ethereum's
        security while maintaining EVM equivalence.
      </p>
      <div class="buttons">
        <Button>Bridge to Astar</Button>
        <Button>Explore ecosystem</Button>
      </div>
    </div>
    <div class="box">
      <div>img</div>
      <h2 class="title">Yoki Origin</h2>
      <p>
        Yoki Origins is a journey to discover original Yoki characters inspired
        by supernatural creatures from Japan. Collect and upgrade your Yoki in
        this exciting and friendly web3 experience for everyone.
      </p>
      <div class="buttons">
        <Button>Yoki Origin website</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
const { locale } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";
</script>

<style lang="postcss" scoped>
.box {
  @apply flex-1 border-2 border-white rounded-2xl shadow-lg bg-white/50;
}
.title {
  @apply text-center text-5xl;
}

.buttons {
  @apply flex justify-center;
}
</style>
