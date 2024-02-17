<template>
  <div class="pointer-events-none inset-x-0 mt-3" v-if="!gdpr_accept">
    <div
      class="pointer-events-auto max-w-xl rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
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
        <Button @click="acceptCookies" type="button" size="sm">
          Accept Cookies
        </Button>
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
