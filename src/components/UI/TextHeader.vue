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

<style scoped>
.text-h1 {
  color: var(--secondary-purple)
}
</style>