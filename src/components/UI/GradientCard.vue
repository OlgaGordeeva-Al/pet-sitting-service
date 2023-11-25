<script setup lang="ts">
import { RouterLink } from 'vue-router'
  
defineProps<{
    image: string,
    header: string,
    description?: string
    cardLink: string
}>()
</script>

<template>
  <div class="card">
    <RouterLink :to="cardLink" >
      <img :src="image" alt=''>
      <p class="card-header">{{header}}</p>
      <p class="card-description">{{ description }}</p>
      <slot></slot>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
  .card {
  --card-gradient: rgba(0, 0, 0, 0.8);
  --card-gradient: var(--yellow), var(--secondary-purple);
  --card-blend-mode: overlay;

  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  padding-bottom: 1rem;
  background-image: linear-gradient(
    var(--card-gradient),
    white max(9.5rem, 27vh)
  );
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    transition-duration: .5s;
    cursor: pointer;

    .card-header {
      color: var(--blue);
    }
  }

  img {
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    object-fit: cover;
    height: max(10rem, 25vh);
    aspect-ratio: 4/3;
    mix-blend-mode: var(--card-blend-mode);

    ~ * {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  > :last-child {
    margin-bottom: 0;
  }

  &:hover,
  &:focus-within {
    --card-gradient: var(--blue) max(8.5rem, 20vh);
  }
}

.card-header {
  font-size: 22px;
  font-weight: 600;
  color: var(--secondary-purple);
}

.card-description {
  margin: 20px;
  height: 100%;
}
</style>