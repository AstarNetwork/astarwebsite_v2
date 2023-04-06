<script setup lang="ts">
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';

definePageMeta({
  layout: false,
  title: 'Spacelabs',
  slug: 'spacelabs',
  description: 'A star is born together with our awesome community.',
});
const router = useRouter();
watchEffect(() => {
  router.push('/community');
});
</script>

<style lang="postcss" scoped>
.dummy {
  margin: auto;
}
</style>
