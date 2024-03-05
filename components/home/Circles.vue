<template>
  <div class="w-screen overflow-hidden absolute min-h-screen top-0 -z-10">
    <div class="circle-wrapper">
      <div class="circle" style="animation-delay: 0s"></div>
      <div class="circle" style="animation-delay: 1s"></div>
      <div class="circle" style="animation-delay: 2s"></div>
      <div class="circle" style="animation-delay: 3s"></div>
      <div class="circle-center"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
.circle-wrapper {
  position: absolute;
  overflow: hidden;
  width: 800px;
  height: 800px;
  right: -350px;
  top: -350px;
  @media (min-width: 640px) {
    width: 1200px;
    height: 1200px;
    right: -500px;
    top: -550px;
  }
  @media (min-width: 1024px) {
    width: 1600px;
    height: 1600px;
    right: -660px;
    top: -700px;
  }
  @media (min-width: 1280px) {
    width: 2000px;
    height: 2000px;
    right: -800px;
    top: -900px;
  }
  @media (min-width: 1536px) {
    width: 2600px;
    height: 2600px;
    right: -1100px;
    top: -1200px;
  }
}
.circle-center {
  position: absolute;
  width: 800px;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 640px) {
    width: 1200px;
    height: 1200px;
  }
  @media (min-width: 1024px) {
    width: 1600px;
    height: 1600px;
  }
  @media (min-width: 1280px) {
    width: 2000px;
    height: 2000px;
  }
  @media (min-width: 1536px) {
    width: 2600px;
    height: 2600px;
  }
  &::before {
    animation: pulse 0.8s ease-in alternate infinite;
    content: "";
    position: absolute;
    background: linear-gradient(135deg, #0047ff 17.4%, #00d4ff 82.03%);
    border-radius: 50%;
    width: 300px;
    height: 300px;
    @media (min-width: 640px) {
      width: 500px;
      height: 500px;
    }
    @media (min-width: 1024px) {
      width: 600px;
      height: 600px;
    }
    @media (min-width: 1280px) {
      width: 700px;
      height: 700px;
    }
    @media (min-width: 1536px) {
      width: 900px;
      height: 900px;
    }
  }
}
.circle {
  border-radius: 50%;
  border: solid 1px #0075ff;
  position: absolute;
  opacity: 0;
  animation: scaleIn 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);
  width: 800px;
  height: 800px;
  @media (min-width: 640px) {
    width: 1200px;
    height: 1200px;
  }
  @media (min-width: 1024px) {
    width: 1600px;
    height: 1600px;
  }
  @media (min-width: 1280px) {
    width: 2000px;
    height: 2000px;
  }
  @media (min-width: 1536px) {
    width: 2600px;
    height: 2600px;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.3, 0.3);
    opacity: 0.8;
  }
  to {
    transform: scale(1, 1);
    opacity: 0;
  }
}

@keyframes pulse {
  from {
    transform: scale(0.97, 0.97);
  }
  to {
    transform: scale(1, 1);
  }
}
</style>
