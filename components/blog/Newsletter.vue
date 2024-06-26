<template>
  <div class="max-w-4xl w-full mx-auto px-4 sm:px-6">
    <div class="bg-gradient-to-r from-[#0047FF] to-[#00D1FF] rounded-lg">
      <div
        class="py-8 px-4 sm:p-12 sm:flex items-center space-y-6 sm:space-y-0 sm:space-x-8"
      >
        <div class="flex-1">
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3 text-center sm:text-left text-white"
          >
            {{ newsletter.title }}
          </h2>
          <p class="text-white">
            {{ newsletter.description }}
          </p>
        </div>
        <div class="shrink-0 text-center">
          <Button
            color="whiteBlue"
            @click="newsletterOpen = true"
          >
            {{ newsletter.button }}
          </Button>
        </div>
      </div>
    </div>
  </div>

  <TransitionRoot
    as="template"
    :show="newsletterOpen"
  >
    <Dialog
      as="div"
      class="relative z-50"
      @close="newsletterOpen = false"
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
              class="relative transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all w-full sm:max-w-2xl"
            >
              <iframe
                class="w-full h-[600px]"
                :src="newsletter.iframe"
              />
              <button
                type="button"
                class="text-slate-500 transition cursor-pointer p-3 hover:bg-slate-100 hover:text-slate-700 rounded-full outline-none absolute right-0 top-0 sm:right-3 sm:top-3"
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
import { ref } from 'vue'
import { newsletterUrl } from '@/data/links'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
const newsletterOpen = ref(false)
const { t } = useI18n()

const props = defineProps({
  type: {
    type: String,
    default: 'global',
  },
})

const newsletters = {
  global: {
    iframe: newsletterUrl.global,
    title: t('blog.newsletter.global.title'),
    description: t('blog.newsletter.global.description'),
    button: t('blog.newsletter.global.signup'),
  },
  japan: {
    iframe: newsletterUrl.japan,
    title: t('blog.newsletter.japan.title'),
    description: t('blog.newsletter.japan.description'),
    button: t('blog.newsletter.japan.signup'),
  },
}

const newsletter
  = props.type === 'japan' ? newsletters.japan : newsletters.global
</script>
