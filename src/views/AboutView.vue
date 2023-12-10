<script setup lang="ts">
  import { ref } from 'vue'
  import TextHeader from "../components/UI/TextHeader.vue"
  import ImageTextCard from "../components/UI/ImageTextCard.vue"
  import SvgListItem from "@/components/UI/SvgListItem.vue";
  import ButtonGradient from "@/components/UI/ButtonGradient.vue";
  import BaseModal from "@/components/BaseModal.vue";
  import OrderForm from "@/components/OrderForm.vue";
  import { requestFunction } from '@/api/api';

  const advantages = ref([]);
  const howTo = ref([]);

  const requestedData = () =>  requestFunction("get", "/").then((resp) => {
    advantages.value = resp.ourAdvantages;
    howTo.value = resp.howWeWorkList;
  } );

  requestedData();

  const showModal = ref(false);
</script>

<template>
  <div class="about-banner main-block">
    <div class="about-banner__text">
      <TextHeader class="about-banner__header" header="Передержка, выгул, ситтинг для ваших питомцев" />
      <p>Заботимся о ваших любимцах, как о своих 💜 </p>
      <ButtonGradient id="show-modal" @click="showModal = true" class="about-banner__button" title="Оставить заявку" />
      <Teleport to="body">
        <BaseModal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
        <template #body>
          <OrderForm />
        </template>
        </BaseModal>
      </Teleport>
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
      <SvgListItem v-for="(item, index) in advantages" svg="src\assets\svg\paw-3-svgrepo-com.svg" :index="index" :description="advantages[index]" :key="index" />
    </div>
  </div>
  <div class="about-how main-block">
    <TextHeader class="about-how__header block-header" header="Как мы работаем" />
    <div class="about-how__list">
      <SvgListItem v-for="(item, index) in howTo" class="about-how__list-item" :index="index" :description="howTo[index]" :key="howTo[index]" />
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
