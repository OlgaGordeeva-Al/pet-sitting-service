<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <Header />
  <div class="main">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
  .main {
    grid-area: main;
    padding: 30px 50px;
  }
</style>
