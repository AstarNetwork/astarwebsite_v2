<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="handleClick">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center lg:p-0"
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
              class="relative transform overflow-hidden rounded bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl sm:p-6"
            >
              <div class="flex flex-col sm:flex-row">
                <div class="shrink-0 max-w-[280px] lg:max-w-[320px] mx-auto">
                  <img
                    class="w-full object-cover rounded-sm mb-8"
                    :src="useAsset('incubation/mentors/' + mentor.image)"
                    :alt="mentor.name"
                  />
                  <IncubationMentorsModalDetail
                    :mentor="mentor"
                    class="hidden sm:block"
                  />
                </div>
                <div class="sm:pl-6 lg:px-12 flex-1">
                  <h2
                    class="text-3xl font-medium sm:mt-4 text-black leading-snug"
                  >
                    {{ mentor.name }}
                  </h2>
                  <p class="leading-tight text-gray-500 mb-3">
                    {{ mentor.title }}
                  </p>
                  <p class="pt-4 sm:text-lg text-gray-600 whitespace-pre-line">
                    {{ mentor.profile }}
                  </p>
                </div>
                <IncubationMentorsModalDetail
                  :mentor="mentor"
                  class="sm:hidden"
                />
              </div>

              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="absolute right-1 sm:right-2 top-1 sm:top-2 text-gray-600 hover:bg-gray-100 p-2 sm:p-4 rounded-full transition bg-gray-200 bg-opacity-80 sm:bg-transparent outline-0"
                  @click="handleClick"
                >
                  <XMarkIcon class="w-8 h-8" />
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { XMarkIcon, GlobeAltIcon } from "@heroicons/vue/24/outline";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

defineProps({
  mentor: {},
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const handleClick = () => {
  emit("close");
};

const { locale } = useI18n();
</script>
