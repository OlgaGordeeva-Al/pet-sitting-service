<script setup lang="ts">
  defineProps<{
    imageSrc: string,
    name: string,
    about: string,
    workTerm: number | string,
    raiting: number,
    spec: string,
  }>()
</script>

<template>
  <div class="image-card">
    <img class="image-card__img" :src="imageSrc" alt="card image">
    <p class="image-card__name">{{ name }}</p>
    <p class="image-card__spec"><span>Специализация: </span>{{ spec }}</p>
    <p class="image-card__about"><span>Обо мне: </span>{{ about }}</p>
    <p class="image-card__work-term"><span>Стаж: </span>{{ workTerm }} года</p>
    <p class="image-card__raiting"><span>Мой рейтинг: </span>{{ raiting }}</p>
  </div>
</template>

<style lang="scss" scoped>
.image-card {
  display: grid;
  grid-gap: 10px;
  width: 300px;
  min-height: 100%;
  font-size: 16px;
  background-color: #f3f7a169;
  border-radius: 5px;
  padding: 20px;
  border: 0.5px solid var(--yellow);

  &__img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: auto;
    object-fit: cover;
  }

  span {
    font-weight: 700;
  }

  p {
    margin: 0;
  }


  &__name {
    font-size: 22px;
    font-weight: 600;
    line-height: 1;
    color: var(--secondary-purple);
    margin: auto;
    text-align: center;
  }

  &__raiting {
    font-size: 18px;
    color: var(--secondary-purple);
  }
}
</style>