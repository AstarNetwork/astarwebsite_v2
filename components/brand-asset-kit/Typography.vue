<template>
  <section class="text-center">
    <h2 class="text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8 tracking-tight">
      {{ $t("brandAssetKit.typography.title") }}
    </h2>
    <p class="container-xs mb-20 text-sm sm:text-base">
      {{ $t("brandAssetKit.typography.description") }}
    </p>

    <div class="container-xs space-y-10 text-left mb-12">
      <div>
        <div class="font-bold text-slate-950 text-6xl sm:text-9xl tracking-tight sm:tracking-tighter">
          Heading 1
        </div>
        <div class="font-bold text-slate-950">
          Poppins Bold (700)
        </div>
      </div>
      <div>
        <div class="font-semibold text-slate-950 text-4xl sm:text-6xl tracking-tight">
          Heading 2
        </div>
        <div class="font-bold text-slate-950">
          Poppins SemiBold (600)
        </div>
      </div>
      <div>
        Body typography is set in Poppins Regular (400), and
        <span class="font-bold">Poppins Bold (700)</span>.
      </div>
    </div>

    <Button href="https://fonts.google.com/specimen/Poppins?query=poppins">
      {{ $t("brandAssetKit.typography.getFont") }}
    </Button>
  </section>
</template>

<script setup lang="ts">
const colors = [
  { name: 'Black', code: '#020617', bg: 'bg-slate-950' },
  { name: 'Pink', code: '#E6007A', bg: 'bg-pink' },
  { name: 'Blue', code: '#0075FF', bg: 'bg-blue' },
  { name: 'Purple', code: '#E6007A', bg: 'bg-purple' },
  { name: 'Gray', code: '#64748B', bg: 'bg-slate-500' },
]
</script>
