<template>
  <div class="space-gradient rounded-3xl px-6 pt-1 pb-16 lg:w-1/2">
    <img
      src="/images/developers/university.svg"
      class="mx-auto max-w-[440px] mb-6 sm:mb-6 -mt-6 sm:-mt-16 w-full"
    />
    <h3 class="leading-tight mb-4 text-center">
      <span class="text-3xl sm:text-4xl lg:text-5xl font-bold block">
        Astar University
      </span>
      <small class="block text-lg sm:text-2xl">
        Online training to gain Web3 programming skills
      </small>
    </h3>
    <p class="mx-auto max-w-2xl mb-8 sm:text-lg lg:text-center">
      {{ $t("developers.learn.university") }}
    </p>
    <div class="text-center">
      <Button
        variant="outlined"
        size="lg"
        href="/developers/university"
        class="w-72"
      >
        Astar University ->
      </Button>
    </div>
  </div>
</template>
