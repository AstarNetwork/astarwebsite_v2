<script setup lang="ts">
const localePath = useLocalePath()

navigateTo({
  path: localePath('/ecosystem'),
}, { redirectCode: 301 })
</script>
