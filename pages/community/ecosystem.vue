<script setup lang="ts">
const localePath = useLocalePath()

definePageMeta({
  middleware: [
    function ({ query }) {
      return navigateTo({
        path: localePath('/ecosystem'),
        query,
      }, { redirectCode: 301 })
    },
  ],
})
</script>
