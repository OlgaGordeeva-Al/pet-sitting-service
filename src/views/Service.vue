<script setup lang="ts">
import TextHeader from '@/components/UI/TextHeader.vue';
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
  <div class="service">
    <div class="service-text">
      <TextHeader class="service-text__header" :header="header" />
      <p class="service-text__description">{{ description }}</p>
      <ul class="service-list">
        <p>Что входит в услугу</p>
        <li v-for="item in servicesList" class="service-list__item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="service-image">
      <img :src="imgSrc" :alt="header">
    </div>
  </div>
</template>

<style scoped lang="scss">
  .service {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    grid-gap: 20px;

    .service-image {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>