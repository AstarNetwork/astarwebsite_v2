<template>
  <header>
    <div class="pointer-events-none inset-0 z-30" aria-hidden="true" />

    <Popover v-slot="{ open }">
      <div
        :class="[
          open ? 'bg-space-gray-dark shadow-lg bg-opacity-95' : '',
          'transition z-40 w-full',
        ]"
      >
        <div
          class="mx-auto flex max-w-7xl items-center justify-between px-4 h-[100px] sm:h-[110px]"
        >
          <NuxtLink
            :to="localePath('/incubation')"
            class="logo text-white flex flex-col leading-tight hover:no-underline"
          >
            <span class="font-bold text-xl sm:text-[1.75rem]">
              Web3 Incubation Program
            </span>
            <span class="text-xs first-letter:sm:text-[1rem]">
              by Sony Network Communications and Astar Network
            </span>
          </NuxtLink>

          <div class="-my-2 -mr-2 lg:hidden">
            <IncubationMobileNav />
          </div>

          <div class="hidden lg:flex lg:items-center">
            <nav class="flex items-center space-x-4 xl:space-x-10">
              <NuxtLink
                :to="localePath('/incubation/program')"
                class="nav-item"
                :class="route.meta.slug === 'program' && 'current'"
              >
                <span>{{ $t("meta.program.title") }}</span>
              </NuxtLink>
              <NuxtLink
                :to="localePath('/incubation/partners')"
                class="nav-item"
                :class="route.meta.slug === 'partners' && 'current'"
              >
                <span>{{ $t("meta.partners.title") }}</span>
              </NuxtLink>
              <NuxtLink
                :to="localePath('/incubation/mentors')"
                class="nav-item"
                :class="route.meta.slug === 'mentors' && 'current'"
              >
                <span>{{ $t("meta.mentors.title") }}</span>
              </NuxtLink>
              <IncubationButton
                href="https://zohb4s71q4n.typeform.com/to/f6qfzciE"
                variant="contained"
                color="secondary"
                target="_blank"
              >
                <span>{{ $t("cta.apply") }}</span>
              </IncubationButton>
            </nav>
            <NuxtLink
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="nav-item border-l border-gray-500 pl-4 ml-6"
            >
              <GlobeAltIcon class="w-6 h-6 inline-block" />
              {{ locale.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </Popover>
  </header>
</template>

<script setup lang="ts">
import { GlobeAltIcon } from "@heroicons/vue/24/outline";
import { Popover, PopoverButton } from "@headlessui/vue";

const route = useRoute();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
const localePath = useLocalePath();
</script>

<style lang="postcss" scoped>
.nav-item {
  @apply text-white text-lg hover:no-underline hover:text-gray-300;
}
.nav-item.current span,
.logo:hover span,
.nav-item:hover span {
  background: linear-gradient(
    90deg,
    #e6007a -5.88%,
    #703ac2 15.42%,
    #0070eb 40.77%,
    #0297fb 72.21%,
    #0ae2ff 95.53%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
