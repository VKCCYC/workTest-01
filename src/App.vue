<template>
  <navbarView />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbarView from './components/navberView.vue'

</script>
<style lang="scss">
body{
  margin: 0;
  background-image: url(@/assets/img/background01.jpg);
}
</style>
