<script setup lang="ts">
  defineProps<{
    header: string
  }>()
</script>

<template>
  <div class="text-h1">
    <h1>{{ header }}</h1>
  </div>
</template>

<style scoped lang="scss">
.text-h1 {
  color: var(--secondary-purple);

  h1 {
    margin-top: 0;
  }
}
</style>