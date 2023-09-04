<template>
  <div
    class="text-center h-screen flex items-center justify-center z-10 relative"
  >
    <div class="max-w-4xl px-4 sm:px-6 pt-12">
      <p class="font-medium text-xl mb-2">Astar 2.0 is here.</p>
      <h1
        class="text-3xl sm:text-6xl lg:text-9xl font-extrabold leading-none drop-shadow tracking-tight"
      >
        The Frontier of Innovation.
      </h1>
      <p class="sm:text-xl mt-6 sm:mt-10 mb-8 sm:mb-14">
        {{ $t("home.hero.description") }}
      </p>
      <div class="sm:flex justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          color="secondary"
          size="lg"
          href="#"
          target="_blank"
          class="w-[260px] !border-[#C09CFF] bg-gradient-to-r from-[#8A46FF] to-[#6E38CC] !text-white hover:brightness-125"
          style="box-shadow: 0px 2px 10px 0px rgba(255, 255, 255, 0.3)"
        >
          Astar zkEVM
          <ArrowTopRightOnSquareIcon class="w-6 h-6 ml-1 stroke-2" />
        </Button>
        <!-- <Button
          color="secondary"
          variant="outlined"
          size="lg"
          href="https://docs.astar.network/"
          target="_blank"
          class="w-[260px]"
        >
          {{ $t("home.hero.doc") }}
          <ArrowTopRightOnSquareIcon class="w-6 h-6 ml-1 stroke-2" />
        </Button> -->
        <!-- <Button
          variant="outlined"
          size="lg"
          href="https://portal.astar.network/"
          target="_blank"
          class="w-[280px] sm:w-auto"
        >
          {{ $t("home.hero.app") }}
          <ArrowTopRightOnSquareIcon class="w-6 h-6 ml-1 stroke-2" />
        </Button> -->
        <Button
          variant="outlined"
          size="lg"
          :href="i18n + '/astar2'"
          class="w-[260px]"
        >
          Astar 2.0 ->
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const { locale } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";
</script>
