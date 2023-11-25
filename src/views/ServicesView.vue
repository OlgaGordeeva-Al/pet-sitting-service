<script setup lang="ts">
  import GradientCard from '@/components/UI/GradientCard.vue';
  import TextHeader from '@/components/UI/TextHeader.vue';
</script>

<template>
  <div class="services main-block">
    <TextHeader class="about-services__header block-header" header="Наши сервисы" />
    <div class="services__card-block">
      <GradientCard
          header="Выгул собак" 
          image="https://images.unsplash.com/photo-1494947665470-20322015e3a8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Наши выгульщики позаботятся о ваших питомцах во время прогулки. Поиграют и обязательно уберут за вашими хвостиками"
          card-link="/services/:walking"
      ></GradientCard>
      <GradientCard 
          header="Передержка" 
          image="https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?q=80&w=2484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Позаботимся о вашем питомце на нашей территории. Будем кормить, играть, гладить и гулять, если необходимо, сделаем необходимые медицинские процедуры"
          card-link="/services/:keeping"
      ></GradientCard>
      <GradientCard 
          header="Няня для питомца" 
          image="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Наша няня приедет к вам домой, покормит, выгуляет, поиграет с вашим любимцем. Покормить рыбок или хомячка? Поменять лоток или вычесать шерстку? Дать таблетки, прописанные доктором - наши няни к вашим услугам!"
          card-link="/services/:sitting"
      >
      </GradientCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .services {
    margin-top: 0;

    &__card-block {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      justify-items: center;
      min-height: fit-content;
    }
  }


</style>
