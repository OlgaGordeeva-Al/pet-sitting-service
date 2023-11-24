<script setup lang="ts">
  defineProps<{
    svg?: string,
    title?: string,
  }>()
</script>

<template>
  <button class="gradient-button">{{ title }}</button>
</template>

<style lang="scss" scoped>
  .gradient-button {
    border: none;
    padding: 20px 40px;
    font-size: 20px;
    color: var(--color-white);
    border-radius: 5px;
    background: radial-gradient(circle, var(--secondary-purple) 0%, var(--blue) 100%);
    margin-top: 40px;

    &:hover {
      transform: scale(1.1);
    }
  }
</style>
