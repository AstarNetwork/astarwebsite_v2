<script setup lang="ts">
import { watchEffect } from "vue";
import { useRouter } from "vue-router";

definePageMeta({
  layout: false,
});
const router = useRouter();
watchEffect(() => {
  router.push("/community");
});
</script>

<style lang="postcss" scoped>
.dummy {
  margin: auto;
}
</style>
