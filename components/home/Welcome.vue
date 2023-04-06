<template>
  <div class="lg:flex lg:items-end relative z-10">
    <div class="shrink-0 mb-8 sm:mb-0" data-aos="zoom-out-right">
      <img
        class="mx-auto max-w-[280px] sm:max-w-[350px] lg:max-w-full float-animation"
        src="~/assets/images/home/welcome-astronaut.svg"
        alt="Welcome to the leading multichain smart contracts platform"
        width="450"
        height="750"
      />
    </div>
    <div class="2xl:flex px-4 sm:px-6 lg:mr-6">
      <div class="lg:mr-4 xl:mx-8 mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold leading-tight mb-6">
          Welcome to Astar Network!
        </h2>
        <p class="sm:text-xl sm:leading-loose">
          Astar Network provides the infrastructure for building dApps with EVM
          and WASM smart contracts offering developers true interoperability
          with cross-consensus messaging (XCM) and a cross-virtual machine
          (XVM). Astar’s unique Build2Earn model empowers developers to get paid
          through a dApp staking mechanism for the code they write and dApps
          they build.
        </p>
      </div>
      <dl class="shrink-0">
        <div
          class="flex flex-col mb-12 xl:mb-16 leading-[0.9]"
          data-aos="zoom-out-left"
          data-aos-delay="200"
        >
          <dt
            class="order-2 mt-2 sm:mt-0 text-3xl lg:text-4xl font-bold sm:pl-12"
          >
            <span>dApps</span>
          </dt>
          <dd class="order-1 font-black text-9xl sm:text-15xl">
            <span class="tracking-tighter">+50</span>
          </dd>
        </div>
        <div
          class="flex flex-col leading-none"
          data-aos="zoom-out-left"
          data-aos-delay="300"
        >
          <dt
            class="order-2 mt-2 sm:mt-0 text-2xl lg:text-3xl font-bold sm:pl-12"
          >
            <span>Community Members</span>
          </dt>
          <dd class="order-1 font-black text-7xl sm:text-10xl">
            <span class="tracking-tighter">+500k</span>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
dt span,
dd span {
  background: linear-gradient(
    90deg,
    #e6007a -5.88%,
    #703ac2 15.42%,
    #0070eb 40.77%,
    #0297fb 72.21%,
    #0ae2ff 95.53%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
