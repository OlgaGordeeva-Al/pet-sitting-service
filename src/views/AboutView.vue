<script setup lang="ts">
  import TextHeader from "../components/UI/TextHeader.vue"
  import ImageTextCard from "../components/UI/ImageTextCard.vue"
</script>

<template>
  <div class="about-banner main-block">
    <div class="about-banner__text">
      <TextHeader class="about-banner__header" header="Передержка, выгул, ситтинг для ваших питомцев" />
      <p>Заботимся о ваших любимцах, как о своих 💜 </p>
    </div>
    <div class="about-banner__image">
      <img src="undraw_passing_by_0un9.svg" alt="dog walking">
    </div>
  </div>
  <div class="about-services main-block">
    <TextHeader class="about-services__header block-header" header="Наши сервисы" />
    <div class="about-services__cardblock">
      <ImageTextCard image-src="undraw_dog_walking_re_l61p.svg" header="Выгул собак" description="Выгуляем вашего питомца, если у вас не хватает времени" />
      <ImageTextCard image-src="undraw_everyday_life_re_1lfb.svg" header="Передержка" description="Позаботимся о вашем питомце на нашей территории, пока вы в отъезде" />
      <ImageTextCard image-src="undraw_friends_r511.svg" header="Няня для вашего питомца" description="Приходящая няня позаботится о ваших питомцах у вас дома, пока вы в отъезде" />
    </div>
  </div>
  <div class="about-advantages main-block">
    <TextHeader class="about-advantages__header block-header" header="Почему именно мы?" />
  </div>
  <div class="about-how"></div>
</template>

<style lang="scss" scoped>
  .main-block {
    margin: 2rem 4rem;
    margin-bottom: 6rem;
  }

  .block-header {
    margin: auto;
  }

  .about-banner {
    &__text {
      position: absolute;

      p {
        font-size: 20px;
      }
    }

    &__header {
      width: 90%;
    }

    &__image {
      position: relative;
      display: flex;
      justify-content: flex-end;
      height: 60vh;
    }
  }

  .about-services {
    display: grid;
    grid-template-rows: max-content;

    &__cardblock {
      margin: 2rem 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      height: max-content;
    }
  }

  .about-advantages {
    display: grid;
  }
</style>
