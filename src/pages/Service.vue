<script setup lang="ts">
  import TextHeader from '../components/UI/TextHeader.vue';
  import ButtonSecondary from '../components/UI/ButtonSecondary.vue';
  import BaseModal from "@/components/BaseModal.vue";
  import OrderForm from "@/components/OrderForm.vue";
  import { requestFunction } from '@/api/api';
  import type { QueryParams } from '@/api/api';

  import { useRoute } from "vue-router";
  import { ref } from 'vue'

  const route = useRoute();
  const serviceName = { routeName: route.params.service };

  interface ServiceData {
    name: string;
    header: string,
    description: string,
    servicesList: string[],
    imgSrc: string;
  }
  
  const showModal = ref(false);
  
  const service = ref();
  
  const servicesData = () =>  requestFunction("get", "/services/", "", serviceName as QueryParams).then((resp) => {
    service.value = resp;
  });
  
  servicesData();
  

</script>

<template>
  <div class="service main-block">
    <div class="service-text">
      <TextHeader class="service-text__header" :header="service.header" />
      <p class="service-text__description">{{ service.description }}</p>
      <ul class="service-list">
        <p class="service-list__header">Что входит в услугу:</p>
        <li v-for="item in service.servicesList" class="service-list__item" :key="item">
          {{ item }}
        </li>
      </ul>
      <div class="service-text__button-block">
        <ButtonSecondary @click="showModal = true" class="ervice-text__button" title="Заказать услугу" />
        <Teleport to="body">
        <BaseModal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Заявка на услугу</h3>
        </template>
        <template #body>
          <OrderForm @close="showModal = false" />
        </template>
        </BaseModal>
      </Teleport>
        <RouterLink class="service-text__link" to="/services"> Назад &#x2192</RouterLink>
      </div>
    </div>
    <div class="service-image">
      <img :src="service.imgSrc" :alt="service.header">
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
      background-image: linear-gradient(
        to bottom,
        #ffffffe9,
        #fffffff6),
        url(../assets/Images/pets-cats-dogs-seamless-pattern-doodle-style-with-cute-animals-toys_341076-451.avif);


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