<script setup lang="ts">
  defineProps<{
    svg?: string,
    title?: string,
    disabled?: boolean
  }>()

  defineEmits(['close'])
</script>

<template>
  <button :disabled="disabled" :class="`secondary-button ${disabled ? 'button-disabled' : null}`">{{ title }}</button>
</template>

<style lang="scss" scoped>
  .secondary-button {
    border: none;
    padding: 10px 10px;
    font-size: 18px;
    color: var(--color-white);
    border-radius: 5px;
    background-color: var(--secondary-purple);

    &:hover {
      background-color: var(--primary-purple);
      cursor: pointer;
    }
  }

  .secondary-button.button-disabled {
    opacity: 0.8;
    pointer-events: none;
  }
</style>
