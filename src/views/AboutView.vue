<script setup lang="ts">
  import TextHeader from "../components/UI/TextHeader.vue"
  import ImageTextCard from "../components/UI/ImageTextCard.vue"
  import SvgListItem from "@/components/UI/SvgListItem.vue";
  import ButtonGradient from "@/components/UI/ButtonGradient.vue";

  const listArr = [
    "Наши ситтеры проверены, обучены и обожают животных",
    "Ваши любимцы не останутся без присмотра",
    "Заключаем с вами договор, где прописаны все обязанности ситтера",
    "Гуляем только на поводке, учитываем особенности каждого животного",
    "Фото и видеоотчеты при каждом визите ситтера и с каждой прогулки",
    "Мы предоставляем возможность круглосуточного видеонаблюдения за вашими питомцами"
  ]

  const howWeWorkList = [
    "Вы оставляете заявку на сайте",
    "Выбираете ситтера из списка откликнувшихся ситтеров или выгульщиков",
    "Заключаем договор, вы производите оплату за весь пакет услуг",
    "В удобное для вас время ситтер приезжает к вам бесплатно, знакомится с вашим питомцем или питомцами",
    "Передержка/ Выгул / Уход няни за питомцем",
    "Заключительная встреча для возврата питомца, ключей и др."
  ]
</script>

<template>
  <div class="about-banner main-block">
    <div class="about-banner__text">
      <TextHeader class="about-banner__header" header="Передержка, выгул, ситтинг для ваших питомцев" />
      <p>Заботимся о ваших любимцах, как о своих 💜 </p>
      <ButtonGradient class="about-banner__button" title="Оставить заявку" />
    </div>
    <div class="about-banner__image">
      <img src="src\assets\svg\undraw_passing_by_0un9.svg" alt="dog walking">
    </div>
  </div>
  <div class="about-services main-block">
    <TextHeader class="about-services__header block-header" header="Наши сервисы" />
    <div class="about-services__cardblock">
      <ImageTextCard image-src="src\assets\svg\undraw_dog_walking_re_l61p.svg" header="Выгул собак" description="Выгуляем вашего питомца, если у вас не хватает времени" />
      <ImageTextCard image-src="src\assets\svg\undraw_everyday_life_re_1lfb.svg" header="Передержка" description="Позаботимся о вашем питомце на нашей территории, пока вы в отъезде" />
      <ImageTextCard image-src="src\assets\svg\undraw_friends_r511.svg" header="Няня для вашего питомца" description="Приходящая няня позаботится о ваших питомцах у вас дома, пока вы в отъезде" />
    </div>
  </div>
  <div class="about-advantages main-block">
    <TextHeader class="about-advantages__header block-header" header="Почему именно мы?" />
    <div class="about-advantages__list">
      <SvgListItem v-for="(item, index) in listArr" svg="src\assets\svg\paw-3-svgrepo-com.svg" :index="index" :description="listArr[index]" :key="index" />
    </div>
  </div>
  <div class="about-how main-block">
    <TextHeader class="about-how__header block-header" header="Как мы работаем" />
    <div class="about-how__list">
      <SvgListItem v-for="(item, index) in howWeWorkList" class="about-how__list-item" :index="index" :description="howWeWorkList[index]" :key="howWeWorkList[index]" />
    </div>
  </div>
</template>

<style lang="scss">
  .main-block {
    display: grid;
    margin: 2rem 4rem;
    margin-bottom: 6rem;
    height: max-content;
  }

  .block-header {
    margin: auto;
  }
</style>

<style lang="scss" scoped>
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
    &__cardblock {
      margin: 2rem 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      height: max-content;
    }
  }

  .about-how {
    &__list-item {
      background-color: #6d67e448;
    }

  }
</style>
