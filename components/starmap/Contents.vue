<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/html-end-tags -->
<template>
  <TransitionRoot
    as="template"
    :show="open"
  >
    <Dialog
      as="div"
      class="relative z-20"
      @close="open = false"
    >
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-slate-900 bg-opacity-90 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-2 sm:p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-3xl bg-space-gray-dark px-4 py-8 text-left shadow-xl transition-all sm:w-full lg:p-12 lg:pr-4"
              :class="
                discoveries[discoveryId]['description'] === ''
                  ? 'sm:max-w-xl'
                  : 'sm:max-w-7xl'
              "
            >
              <div>
                <div class="mt-3 sm:mt-5">
                  <DialogTitle
                    as="h3"
                    class="text-xl sm:text-2xl font-bold text-white text-center leading-tight sm:px-16"
                  >
                    {{ discoveries[discoveryId]["title"] }}
                  </DialogTitle>
                  <div
                    :class="
                      discoveries[discoveryId]['image'] &&
                        'flex items-center flex-col-reverse lg:flex-row'
                    "
                  >
                    <div class="my-6">
                      <p
                        class="text-slate-200 whitespace-pre-wrap"
                        :class="discoveries[discoveryId]['image'] === '' && 'text-center'"
                      >
                      <div v-html="discoveries[discoveryId]['description']" />
                      </p>
                      <NuxtLink
                        v-if="discoveries[discoveryId]['href']"
                        :to="discoveries[discoveryId]['href']"
                        :target="
                          discoveries[discoveryId]['href'].includes('https')
                            ? '_blank'
                            : '_self'
                        "
                        class="flex items-center transition text-space-cyan hover:underline hover:text-space-cyan-lighter mt-5 outline-none"
                      >
                        {{ $t("starmap.learn_more") }}
                        <span class="sr-only">
                          about {{ discoveries[discoveryId]["title"] }}
                        </span>
                        <ArrowTopRightOnSquareIcon
                          v-if="
                            discoveries[discoveryId]['href'].includes('https')
                          "
                          class="w-5 h-5 stroke-2 ml-1"
                        />
                        <span
                          v-else
                          class="ml-1"
                        >-></span>
                      </NuxtLink>
                    </div>
                    <div
                      v-if="discoveries[discoveryId]['image']"
                      class="shrink-0 ml-2"
                    >
                      <img
                        class=""
                        :src="
                          '/images/starmap/' + discoveries[discoveryId]['image']
                        "
                        :alt="discoveries[discoveryId]['title']"
                        width="580"
                        height="480"
                      >
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="text-slate-500 transition cursor-pointer p-3 hover:bg-space-gray hover:text-slate-400 rounded-full outline-none absolute right-0 top-0 sm:right-3 sm:top-3"
                @click="open = false"
              >
                <XMarkIcon class="w-8 h-8 sm:w-12 sm:h-12" />
              </button>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <div
    class="relative z-10 bg-cover text-slate-300 bg-space-gray-dark"
    style="
      background-image: url(/images/starmap/nebula.webp);
      background-position: center top;
      background-repeat: no-repeat;
    "
  >
    <div class="md:absolute w-full">
      <div
        class="max-w-screen-2xl mx-auto px-4 sm:px-6 space-y-24 sm:space-y-0"
      >
        <div class="sm:flex items-center min-h-[600px] lg:min-h-[800px]">
          <div
            class="whitespace-nowrap text-center text-7xl sm:text-[9rem] lg:text-[10rem] xl:text-[13rem] mb-4 sm:mb-0 leading-none"
          >
            <span class="text-white font-semibold tracking-tight sm:block mr-1 sm:mr-0">
              Q1
            </span>
            <span
              class="font-jp kanji leading-tight tracking-wide sm:[writing-mode:vertical-lr]"
            >
              創世
            </span>
          </div>
          <div class="md:max-w-[400px] xl:max-w-[540px] sm:ml-10 relative z-10">
            <h2 class="text-white font-semibold leading-tight mb-4">
              <span class="text-3xl lg:text-4xl">
                {{ $t("starmap.reborn.title") }}
              </span>
            </h2>
            <div class="xl:text-lg">
              <p class="mb-8">
                {{ $t("starmap.reborn.description") }}
              </p>
              <h3 class="font-semibold text-xl text-white">
                Q1
              </h3>
              <p>
                {{ $t("starmap.reborn.plan") }}
              </p>
              <ul class="list-disc pl-4">
                <li>
                  <span
                    class="popup-link"
                    @click="clickAction('xvm')"
                  >
                    {{ $t("starmap.reborn.xvm.title") }}
                  </span>
                </li>
                <li>
                  {{
                    locale === "ja"
                      ? "Astar UIライブラリ &"
                      : "Astar UI Library &"
                  }}
                  <span
                    class="popup-link"
                    @click="clickAction('astarjs')"
                  >
                    Astar.js
                  </span>
                </li>
                <li>
                  <span
                    class="popup-link"
                    @click="clickAction('meshNetworks')"
                  >
                    {{ $t("starmap.reborn.mesh.title") }}
                  </span>
                </li>
                <li>
                  <span
                    class="popup-link"
                    @click="clickAction('ink')"
                  >
                    {{ $t("starmap.reborn.ink.title") }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="sm:flex items-center justify-end min-h-[600px] lg:min-h-[800px]"
        >
          <div
            class="whitespace-nowrap text-center order-2 text-7xl sm:text-[9rem] lg:text-[10rem] xl:text-[13rem] mb-4 sm:mb-0 leading-none"
          >
            <span class="text-white font-semibold tracking-tight sm:block mr-1 sm:mr-0">
              Q2
            </span>
            <span
              class="font-jp kanji leading-tight tracking-wide sm:[writing-mode:vertical-lr]"
            >
              発展
            </span>
          </div>
          <div class="md:max-w-[400px] xl:max-w-[540px] order-1 relative z-10">
            <h2 class="text-white font-semibold leading-tight mb-4">
              <span class="text-3xl lg:text-4xl">
                {{ $t("starmap.growth.title") }}
              </span>
            </h2>
            <div class="xl:text-lg">
              <p class="mb-8">
                {{ $t("starmap.growth.description") }}
              </p>
              <h3 class="font-semibold text-xl text-white">
                Q2
              </h3>
              <p>
                {{ $t("starmap.growth.plan") }}
              </p>
              <ul class="list-disc pl-4">
                <li>
                  <span
                    class="popup-link"
                    @click="clickAction('wasm')"
                  >
                    {{ $t("starmap.growth.wasm.title") }}
                  </span>
                </li>
                <li>
                  <span
                    class="popup-link"
                    @click="clickAction('vision')"
                  >
                    Astar 2.0
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="sm:flex items-center min-h-[600px] lg:min-h-[800px]">
          <div
            class="whitespace-nowrap text-center text-7xl sm:text-[9rem] lg:text-[10rem] xl:text-[13rem] mb-4 sm:mb-0 leading-none"
          >
            <span class="text-white font-semibold tracking-tight sm:block mr-1 sm:mr-0">
              Q3
            </span>
            <span
              class="font-jp kanji leading-tight tracking-wide sm:[writing-mode:vertical-lr]"
            >
              拡大
            </span>
          </div>
          <div class="md:max-w-[400px] xl:max-w-[540px] sm:ml-10 relative z-10">
            <h2 class="text-white font-semibold leading-tight mb-4">
              <span class="text-3xl lg:text-4xl">{{
                $t("starmap.expansion.title")
              }}</span>
            </h2>
            <div class="xl:text-lg">
              <p class="mb-8">
                {{ $t("starmap.expansion.description") }}
              </p>
              <h3 class="font-semibold text-xl text-white">
                Q3
              </h3>
              <p>
                {{ $t("starmap.expansion.plan") }}
              </p>
              <ul class="list-disc pl-4">
                <li>
                  <span
                    class="popup-link"
                    @click="clickAction('swanky')"
                  >
                    {{ $t("starmap.expansion.swanky.title") }}
                  </span>
                </li>
                <li>
                  <span
                    class="popup-link"
                    @click="clickAction('startale')"
                  >
                    {{ $t("starmap.expansion.startale.title") }}
                  </span>
                </li>
                <li>
                  <span
                    class="popup-link"
                    @click="clickAction('techStack')"
                  >
                    {{ $t("starmap.expansion.tech_stack.title") }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="sm:flex items-center justify-end min-h-[600px] lg:min-h-[800px]"
        >
          <div
            class="whitespace-nowrap text-center order-2 text-7xl sm:text-[9rem] lg:text-[10rem] xl:text-[13rem] mb-4 sm:mb-0 leading-none"
          >
            <span class="text-white font-semibold tracking-tight sm:block mr-1 sm:mr-0">
              Q4
            </span>
            <span
              class="font-jp kanji leading-tight tracking-wide sm:[writing-mode:vertical-lr]"
            >
              煌閃
            </span>
          </div>
          <div class="md:max-w-[400px] xl:max-w-[540px] order-1 relative z-10">
            <h2 class="text-white font-semibold leading-tight mb-4">
              <span class="text-3xl lg:text-4xl">
                {{ $t("starmap.shine.title") }}
              </span>
            </h2>
            <div class="xl:text-lg">
              <p class="mb-8">
                {{ $t("starmap.shine.description") }}
              </p>
              <h3 class="font-semibold text-xl text-white">
                Q4
              </h3>
              <ul class="list-disc pl-4">
                <li>
                  <span
                    class="popup-link"
                    @click="clickAction('zkEvmTestnet')"
                  >
                    {{ $t("starmap.shine.zkevm_testnet.title") }}
                  </span>
                </li>
                <li>
                  <span
                    class="popup-link"
                    @click="clickAction('feeAlignment')"
                  >
                    {{ $t("starmap.shine.fee_alignment.title") }}
                  </span>
                </li>
                <li>
                  <span
                    class="popup-link"
                    @click="clickAction('hybridInflationModel')"
                  >
                    {{ $t("starmap.shine.hybrid_inflation_model.title") }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <StarmapLine
      class="relative hidden md:block w-full h-auto max-w-[1280px] mx-auto"
      @show-details="clickAction"
    />
  </div>
</template>

<script setup lang="ts">
import {
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/vue/24/outline'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
const open = ref(false)
const discoveryId = ref('xvm')

interface Discovery {
  title: string
  description: string
  href: string
  image: string
}

const { t, locale } = useI18n()
const i18n = locale.value === 'ja' ? '/ja' : ''

const discoveries: { [index: string]: Discovery } = {
  xvm: {
    title: t('starmap.reborn.xvm.title'),
    description: t('starmap.reborn.xvm.description'),
    href: 'https://medium.com/astar-network/cross-virtual-machine-creating-a-portal-to-the-future-of-smart-contracts-a96c6d2f79b8',
    image: 'xvm.svg',
  },
  astarjs: {
    title: t('starmap.reborn.astarjs.title'),
    description: t('starmap.reborn.astarjs.description'),
    href: 'https://medium.com/astar-network/overview-23e6eaa321c2',
    image: 'astarjs.svg',
  },
  meshNetworks: {
    title: t('starmap.reborn.mesh.title'),
    description: t('starmap.reborn.mesh.description'),
    href: 'https://medium.com/astar-network/decentracademy-1-building-reliable-infrastructure-with-a-mesh-network-96737992a048',
    image: 'mesh-networks.svg',
  },
  ink: {
    title: t('starmap.reborn.ink.title'),
    description: t('starmap.reborn.ink.description'),
    href: 'https://medium.com/astar-network/from-zero-to-ink-hero-9a0c11c58758',
    image: 'zero-to-ink-hero.webp',
  },
  wasm: {
    title: t('starmap.growth.wasm.title'),
    description: t('starmap.growth.wasm.description'),
    href: 'https://medium.com/astar-network/wasm-launch-day-april-6-1efa94dba798',
    image: 'wasm.webp',
  },
  vision: {
    title: 'Astar 2.0',
    description: t('vision.intro'),
    href: i18n + '/astar2',
    image: 'vision.webp',
  },
  swanky: {
    title: t('starmap.expansion.swanky.title'),
    description: `${t('starmap.expansion.swanky.description')}<ul class="list-disc pl-6 my-6"><li>Swanky node</li><li>Swanky CLI</li><li>Swanky dApps</li><li>ink! examples</li></ul>${t('starmap.expansion.swanky.more')}<br><br><strong>${t('starmap.expansion.swanky.welcome')}</strong>`,
    href: 'https://github.com/inkdevhub',
    image: 'swanky.svg',
  },
  startale: {
    title: t('starmap.expansion.startale.title'),
    description: t('starmap.expansion.startale.description'),
    href: 'https://startale.org/',
    image: 'startale.webp',
  },
  techStack: {
    title: t('starmap.expansion.tech_stack.title'),
    description: t('starmap.expansion.tech_stack.description'),
    href: '/developers/',
    image: 'tech-stack.webp',
  },
  zkEvmTestnet: {
    title: t('starmap.shine.zkevm_testnet.title'),
    description: t('starmap.shine.zkevm_testnet.description'),
    href: 'https://astar.network/blog/astar-zkevm-testnet-is-now-live-39560',
    image: 'zkevm-testnet.webp',
  },
  feeAlignment: {
    title: t('starmap.shine.fee_alignment.title'),
    description: t('starmap.shine.fee_alignment.description'),
    href: 'https://forum.astar.network/t/astar-tokenomics-2-0-a-dynamically-adjusted-inflation/4924#native-ethereum-fee-alignment-11',
    image: 'fee-alignment.webp',
  },
  hybridInflationModel: {
    title: t('starmap.shine.hybrid_inflation_model.title'),
    description: t('starmap.shine.hybrid_inflation_model.description'),
    href: 'https://forum.astar.network/t/astar-tokenomics-2-0-a-dynamically-adjusted-inflation/4924',
    image: 'hybrid-inflation-model.webp',
  },
}

const clickAction = (discovery: string) => {
  discoveryId.value = discovery
  open.value = true
}
</script>

<style lang="postcss" scoped>
.kanji {
  background: linear-gradient(
    180deg,
    #e6007a -5.88%,
    #703ac2 15.42%,
    #0070eb 40.77%,
    #0297fb 72.21%,
    #0ae2ff 95.53%
  );
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;
  @apply text-space-gray-dark font-black;
}
.popup-link {
  @apply text-space-cyan hover:underline cursor-pointer transition hover:text-space-cyan-lighter;
}
</style>
