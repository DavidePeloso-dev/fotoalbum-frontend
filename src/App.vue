<script>
import axios from 'axios';
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    HeaderApp,
    MainApp
  },
}
</script>

<template>
  <HeaderApp></HeaderApp>
  <MainApp></MainApp>
</template>

<style scoped></style>
