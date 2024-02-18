<template>
  <!-- <DropdownBanner /> -->
  <div>
    <Header />
    <slot />
    <Footer />
  </div>

  <div class="fixed left-0 bottom-0 z-50 px-2 lg:px-6 pb-2 lg:pb-6">
    <Gdpr />
  </div>
</template>

<style lang="postcss">
body {
  @apply text-slate-500 text-base;
}
</style>
