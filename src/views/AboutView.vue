<script setup lang="ts">
  import TextHeader from "../components/UI/TextHeader.vue"
</script>

<template>
  <div class="about-banner">
    <div class="about-banner__text">
      <TextHeader class="about-header" header="Передержка, выгул, ситтинг для вас и ваших питомцев" />
      <p>Заботимся о ваших любимцах, как о своих 💜 </p>
    </div>
    <div class="about-banner__image">
      <img src="undraw_passing_by_0un9.svg" alt="dog walking">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .about-banner {
    margin: 2rem 4rem;

    &__text {
      position: absolute;

      p {
        font-size: 20px;
      }
    }

    .about-header {
      width: 90%;
    }

    &__image {
      position: relative;
      display: flex;
      justify-content: flex-end;
      height: 70vh;
    }
  }
</style>
