<script setup lang="ts">
  defineProps<{
    imageSrc: string,
    header: string,
    description: string
  }>()
</script>

<template>
  <div class="image-card">
    <img class="image-card__svg" :src="imageSrc" alt="card image">
    <p class="image-card__header">{{ header }}</p>
    <p class="image-card__description">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.image-card {
  display: grid;
  grid-template-columns: fit-content min-content max-content;
  width: 300px;
  height: 300px;

  &__svg {
    height: 200px;
    width: 200px;
    margin: auto;
  }

  p {
    margin: auto;
  }

  &__header {
    font-size: 22px;
    font-weight: 600;
    line-height: 3;
    color: var(--blue);
  }

  &__descriprion {
    font-size: 20px;
    text-align: center;
  }
}
</style>