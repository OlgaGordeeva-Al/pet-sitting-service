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
    servicesList: string[]
  }

  const data = servicesData.find(item => item.name === ser) as ServiceData;

  const {header, description, servicesList} = data

</script>

<template>
  <div>
    <TextHeader class="service-header" :header="header" />
    <p class="service-description">{{ description }}</p>
    <ul class="service-list">
      <p>Что входит в услугу</p>
      <li v-for="item in servicesList" class="service-list__item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>