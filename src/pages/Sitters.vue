<script setup lang="ts">
import { ref } from 'vue'

import SittersCard from "../components/UI/SitterCard.vue";
import TextHeader from "../components/UI/TextHeader.vue";
import { requestFunction } from '@/api/api';

const sitters = ref();

const requestedData = () =>  requestFunction("get", "/sitters/").then((resp) => {
sitters.value = resp;
});

requestedData();
</script>

<template>
  <div class="sitters main-block">
    <TextHeader class="sitters-header" header="Наши ситтеры" />
    <div class="sitters-block">
      <div class="sitters-item" v-for="item in sitters" :key="item.imageSrc">
        <SittersCard 
          :name="item.name" 
          :about="item.about" 
          :raiting="item.raiting" 
          :image-src="item.imageSrc"
          :spec="item.spec"
          :work-term="item.workTerm"
         />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sitters-block {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto-fit;
}
</style>
