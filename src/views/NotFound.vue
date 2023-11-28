
<script lang="ts" setup>
  import TextHeader from '@/components/UI/TextHeader.vue';
</script>
<template>
  <div class="not-found main-block">
    <TextHeader header="Not found" class="block-header"></TextHeader>
    <img class="image" src="src\assets\svg\undraw_page_not_found_re_e9o6.svg" alt="not found">
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  place-content: center;
}

.image {
  height: 40vh;
}
</style>