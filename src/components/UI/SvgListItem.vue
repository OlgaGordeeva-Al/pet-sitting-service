<script setup lang="ts">
  defineProps<{
    svg?: string,
    header?: string,
    description?: string
    index: number
  }>()
</script>

<template>
  <div class="list-item">
    <div class="list-item__svg-container">
      <img v-if="svg" :src="svg" :class="['list-item__svg', `list-item__svg-${index}`]" alt="card image">
      <p v-else class="list-item__number">{{ index + 1 }}</p>
    </div>
    <div class="list-item__text">
      <p :v-if="header" class="list-item__text-header">{{ header }}</p>
      <p :v-if="description" class="list-item__text-description">{{ description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  display: grid;
  background-color: #46c2cb29;
  border-radius: 30px;
  grid-template-columns: min-content max-content;
  padding: 10px 20px;
  margin: 2rem 0;

  &__svg-container {
    margin: auto;
    padding-right: 15px;
  }

  &__svg {
    height: 40px;
  }

  &__number {
    margin: auto;
    font-size: 38px;
  }

  &__text-description {
    max-width: 70vw;
    margin-top: 5px;
  }

  &__text-header {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 0;
    max-width: 70vw;
    color: var(--primary-purple)
  }

  &__svg-0 {
    transform: rotate(20deg);
  }

  &__svg-1 {
    transform: rotate(-50deg);
  }

  &__svg-2 {
    transform: rotate(-20deg);
  }

  &__svg-3 {
    transform: rotate(-80deg);
  }

  &__svg-4 {
    transform: rotate(50deg);
  }

  &__svg-5 {
    transform: rotate(-40deg);
  }

  &__svg-6 {
    transform: rotate(30deg);
  }

}
</style>