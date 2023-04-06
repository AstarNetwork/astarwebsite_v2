import { defineNuxtPlugin } from '#app'
import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((NuxtApp) => {
  if (typeof window !== 'undefined') {
    NuxtApp.AOS = AOS.init({
      duration: 500,
      easing: 'ease-in-out-cubic',
      once: false,
    });
  }
});
