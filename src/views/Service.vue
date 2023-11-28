<script setup lang="ts">
import TextHeader from '@/components/UI/TextHeader.vue';
import ButtonSecondary from '@/components/UI/ButtonSecondary.vue';
import { servicesData } from '../model/serviceModel.ts'

import {useRoute} from "vue-router";
  const route = useRoute();
  const ser = route.params.service;

  interface ServiceData {
    name: string;
    header: string,
    description: string,
    servicesList: string[],
    imgSrc: string;
  }

  const data = servicesData.find(item => item.name === ser) as ServiceData;

  const {header, description, servicesList, imgSrc} = data

</script>

<template>
  <div class="service main-block">
    <div class="service-text">
      <TextHeader class="service-text__header" :header="header" />
      <p class="service-text__description">{{ description }}</p>
      <ul class="service-list">
        <p class="service-list__header">Что входит в услугу:</p>
        <li v-for="item in servicesList" class="service-list__item">
          {{ item }}
        </li>
      </ul>
      <div class="service-text__button-block">
        <ButtonSecondary class="ervice-text__button" title="Заказать услугу" />
        <RouterLink class="service-text__link" to="/services"> Назад &#x2192</RouterLink>
      </div>
    </div>
    <div class="service-image">
      <img :src="imgSrc" :alt="header">
    </div>
  </div>
</template>

<style scoped lang="scss">
  .service {
    display: grid;
    grid-template-columns: 2fr 1fr;
    min-height: max-content;
    grid-gap: 20px;

    .service-text {
      display: grid;
      padding: 20px 40px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      background-color: #6d67e454;

      &__description {
        margin: 0;
      }
     
      &__button-block {
        display: grid;
        align-content: center;
        grid-template-columns: 1fr 1fr;
        padding: 20px;
      }
      
      &__link {
        justify-self: end;
        font-size: 18px;
        color: var(--secondary-purple);
        text-decoration: underline;
      }

      &__button {
        justify-self: center;
      }
    }

    .service-list {
      li {
        margin-bottom: 15px;
      }
    }

    .service-image {
      display: grid;
      align-content: start;
      padding-top: 40px;
      transform: translateX( -55px);
      
      img {
        width: 100%;
        height: 90%;
        object-fit: contain;
      }
    }
  }
</style>