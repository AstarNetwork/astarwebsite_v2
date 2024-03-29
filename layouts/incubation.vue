<template>
  <div class="bg-white text-gray-600 font-roboto antialiased">
    <slot name="hero" />
    <slot name="main" />
    <IncubationFooter />
  </div>

  <div class="fixed left-0 bottom-0 z-50 px-2 lg:px-6 pb-2 lg:pb-6">
    <Gdpr />
  </div>
</template>
