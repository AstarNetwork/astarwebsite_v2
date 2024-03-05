<template>
  <div class="pointer-events-none inset-x-0 mt-3" v-if="!gdpr_accept">
    <div
      class="pointer-events-auto max-w-xl rounded-xl bg-white/95 p-6 shadow-lg ring-1 ring-gray-900/5"
    >
      <p class="text-sm leading-6 text-gray-900">
        Our website uses cookies to enhance site navigation and analyze site
        usage. Please let us know you agree to all of our cookies. You can find
        out more on our
        <NuxtLink
          :to="localePath('/privacy-policy')"
          class="text-space-blue hover:underline hover:text-space-blue-lighter transition whitespace-nowrap"
        >
          Privacy Policy
        </NuxtLink>
        page.
      </p>
      <div class="mt-4 flex items-center gap-x-5">
        <button
          @click="acceptCookies"
          type="button"
          class="rounded-md bg-space-gray px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-space-gray"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const gdpr_accept = ref(true);

if (typeof window !== "undefined") {
  if (localStorage.getItem("gdpr") === null) {
    gdpr_accept.value = false;
  }
}

const acceptCookies = () => {
  localStorage.setItem("gdpr", "true");
  gdpr_accept.value = true;
};
</script>
