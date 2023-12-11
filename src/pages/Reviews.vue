<script lang="ts" setup>
import ReviewCard from "../components/UI/ReviewCard.vue";
import TextHeader from "@/components/UI/TextHeader.vue";

import { requestFunction } from '@/api/api';
import { ref } from "vue";

const clientReviews = ref();

const requestedData = () =>  requestFunction("get", "/reviews/").then((resp) => {
  clientReviews.value = resp;
} );

requestedData();
</script>

<template>
  <div class="reviews main-block">
    <TextHeader class="reviews-header" header="Ваши отзывы" />
    <div class="reviews-block">
      <ReviewCard 
        v-for="item in clientReviews" 
        :name="item.name"
        :image="item.image"
        :reviewText="item.reviewText"
        :stars="item.stars"
        :key="item.name"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .reviews-header {
    margin: auto;
    margin-top: 0;
  }
  .reviews-block {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    grid-gap: 30px;
  }
</style>