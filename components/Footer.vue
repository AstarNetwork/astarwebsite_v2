<template>
  <footer>
    <div
      class="flex flex-col sm:flex-row border-t border-slate-300 sm:divide-x divide-y sm:divide-y-0 divide-slate-300"
    >
      <NuxtLink :to="localePath('/contact/')" class="cta group">
        <div class="cta-inner">
          <div class="flex-1">
            <h3>{{ $t("footer.contactUs.title") }}</h3>
            <p class="leading-relaxed">
              {{ $t("footer.contactUs.description") }}
            </p>
          </div>
          <span
            class="flex items-center justify-center border border-blue rounded-full w-12 h-12 relative mx-auto"
          >
            <span
              class="w-0 h-0 group-hover:bg-blue group-hover:w-12 group-hover:h-12 absolute duration-300 ease-out rounded-full"
            />
            <ArrowRightIcon
              class="w-5 h-5 group-hover:text-white transition relative z-10 text-blue"
            />
          </span>
        </div>
      </NuxtLink>
      <div @click="newsletterOpen = true" class="cta group">
        <div class="cta-inner">
          <div class="flex-1">
            <h3>{{ $t("footer.newsletter.title") }}</h3>
            <p class="leading-relaxed">
              {{ $t("footer.newsletter.description") }}
            </p>
          </div>
          <span
            class="flex items-center justify-center border border-blue rounded-full w-12 h-12 relative mx-auto"
          >
            <span
              class="w-0 h-0 group-hover:bg-blue group-hover:w-12 group-hover:h-12 absolute duration-300 ease-out rounded-full"
            />
            <ArrowRightIcon
              class="w-5 h-5 group-hover:text-white transition relative z-10 text-blue"
            />
          </span>
        </div>
      </div>
    </div>

    <div class="bg-blue">
      <div class="container-lg py-12 space-y-12">
        <div>
          <img
            src="/images/common/logo-white.svg"
            :alt="meta.siteName"
            class="mx-auto w-full max-w-[100px] sm:max-w-[144px]"
          />
        </div>

        <div class="flex justify-center items-center gap-2">
          <NuxtLink
            v-for="item in social"
            target="_blank"
            :key="item.name"
            :to="item.href"
            class="flex items-center justify-center rounded-full w-12 sm:w-16 h-12 sm:h-16 relative group"
          >
            <span
              class="w-0 h-0 group-hover:bg-white/20 group-hover:w-16 group-hover:h-16 absolute duration-200 ease-out rounded-full"
            />
            <span class="sr-only">{{ item.name }}</span>
            <component
              :is="item.icon"
              class="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>

        <div class="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
          <LangSwitcher />
          <div v-for="category in nav">
            <h3 class="font-medium uppercase text-white">
              {{ category.name }}
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li
                v-for="item in category.nav"
                :key="item.name"
                class="leading-snug"
              >
                <NuxtLink
                  :to="item.href"
                  :target="item.href.includes('https') ? '_blank' : '_self'"
                  class="hover:underline transition text-slate-200 hover:text-slate-50"
                >
                  {{ item.name }}
                  <ArrowTopRightOnSquareIcon
                    v-if="item.href.includes('https')"
                    class="w-4 h-4 inline-block stroke-2"
                  />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <p class="text-center text-white text-sm">
          &copy; {{ new Date().getFullYear() }} Astar Network. All Rights
          Reserved.
        </p>
      </div>
    </div>
  </footer>

  <TransitionRoot as="template" :show="newsletterOpen">
    <Dialog as="div" class="relative z-50" @close="newsletterOpen = false">
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
          class="fixed inset-0 bg-slate-950 bg-opacity-90 transition-opacity"
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
              class="relative transform overflow-hidden rounded-xl bg-white shadow-xl transition-all w-full sm:max-w-2xl"
            >
              <iframe class="w-full h-[600px]" :src="newsletterUrl.global" />
              <button
                type="button"
                class="text-slate-500 transition cursor-pointer p-3 hover:bg-gray-100 hover:text-slate-950 rounded-full outline-none absolute right-0 top-0 sm:right-3 sm:top-3"
                @click="newsletterOpen = false"
              >
                <XMarkIcon class="w-8 h-8 sm:w-12 sm:h-12" />
              </button>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { meta } from "@/data/meta";
import {
  newsletterUrl,
  socialUrl,
  ambassadorProgramUrl,
  bugBountyProgramUrl,
  forumUrl,
  brandAssetsUrl,
  docsUrl,
} from "@/data/links";
import {
  ArrowTopRightOnSquareIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";

const newsletterOpen = ref(false);

const localePath = useLocalePath();

const Discord = resolveComponent("IconDiscord");
const Telegram = resolveComponent("IconTelegram");
const Medium = resolveComponent("IconMedium");
const Github = resolveComponent("IconGithub");
const Youtube = resolveComponent("IconYoutube");
const X = resolveComponent("IconX");

interface Props {
  color?: string;
}
const props = defineProps<Props>();

const { t } = useI18n();

const nav = [
  {
    name: t("footer.nav.build"),
    nav: [
      { name: t("footer.nav.docs"), href: docsUrl.index },
      { name: "GitHub", href: socialUrl.github },
      { name: "Discord", href: socialUrl.discord },
    ],
  },
  {
    name: t("footer.nav.apply"),
    nav: [
      {
        name: t("footer.nav.careers"),
        href: socialUrl.wellfound,
      },
      {
        name: t("footer.nav.ambassadorProgram"),
        href: ambassadorProgramUrl,
      },
      {
        name: t("footer.nav.bugBountyProgram"),
        href: bugBountyProgramUrl,
      },
    ],
  },
  {
    name: t("footer.nav.learn"),
    nav: [
      { name: t("footer.nav.blog"), href: localePath("/blog") },
      {
        name: t("footer.nav.videos"),
        href: socialUrl.youtube,
      },
      { name: t("footer.nav.forum"), href: forumUrl },
    ],
  },
  {
    name: t("footer.nav.other"),
    nav: [
      {
        name: t("footer.nav.brandAssets"),
        href: brandAssetsUrl,
      },
      {
        name: t("footer.nav.privacyPolicy"),
        href: localePath("/privacy-policy"),
      },
      {
        name: t("footer.nav.termsOfUse"),
        href: localePath("/term-of-use"),
      },
      {
        name: t("footer.nav.contactUs"),
        href: localePath("/contact"),
      },
    ],
  },
];

const { locale } = useI18n();

let twitterUrl = socialUrl.twitter.global.url;
if (locale.value === "ja") {
  twitterUrl = socialUrl.twitter.japan.url;
} else if (locale.value === "ko") {
  twitterUrl = socialUrl.twitter.korea.url;
}

const social = [
  {
    name: "X(Twitter)",
    href: twitterUrl,
    icon: X,
  },
  {
    name: "Discord",
    href: socialUrl.discord,
    icon: Discord,
  },
  {
    name: "Telegram",
    href: socialUrl.telegram,
    icon: Telegram,
  },
  {
    name: "Medium",
    href: socialUrl.medium,
    icon: Medium,
  },
  {
    name: "GitHub",
    href: socialUrl.github,
    icon: Github,
  },
  {
    name: "YouTube",
    href: socialUrl.youtube,
    icon: Youtube,
  },
];
</script>

<style lang="postcss" scoped>
.cta {
  @apply flex-1 p-6 sm:py-12 lg:py-24 lg:px-12 bg-white cursor-pointer overflow-hidden before:absolute before:h-0 before:w-0 before:rounded-full before:duration-300 before:ease-out hover:before:h-[60vw] hover:before:w-[60vw] before:bg-blue/10 flex items-center justify-center relative;
  .cta-inner {
    @apply sm:text-center max-w-md mx-auto flex items-center flex-row sm:flex-col gap-4 sm:gap-6;
  }
  h3 {
    @apply text-xl sm:text-3xl lg:text-4xl mb-1 sm:mb-6;
  }
  p {
    @apply text-slate-500 text-sm lg:text-base;
  }
}
</style>
