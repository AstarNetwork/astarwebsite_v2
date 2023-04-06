<template>
  <div
    class="text-center landscape:min-h-screen landscape:flex landscape:items-center landscape:justify-center z-10 relative mb-24"
  >
    <div class="pt-16 sm:pt-24">
      <h1 class="sr-only">April 6th = Wasm Launch Day</h1>
      <img
        class="landscape:block portrait:hidden w-full max-w-[1500px] mx-auto"
        src="~/assets/images/home/wasm-landscape.svg"
        alt=""
      />
      <img
        class="landscape:hidden portrait:block w-full max-w-[800px] mx-auto"
        src="~/assets/images/home/wasm-portrait.svg"
        alt=""
      />
      <div class="mt-4 lg:mt-8">
        <Button
          variant="outlined"
          size="lg"
          href="https://www.crowdcast.io/c/wasm-launch-day"
          target="_blank"
          class="w-[280px] sm:w-auto"
        >
          Sign up now!
          <IconArrowTopRightOnSquare class="w-6 h-6 ml-1 stroke-2" />
        </Button>
      </div>
    </div>
  </div>
</template>
