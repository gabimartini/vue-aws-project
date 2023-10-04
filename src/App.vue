<script setup>
import TheHeader from './components/TheHeader.vue';
import { Amplify } from "aws-amplify";
import config from './aws-exports';

Amplify.configure({...config, ssr: false})


</script>


<template>
  <header><TheHeader /></header>
  <router-view></router-view>
</template>

<style scoped>
 header {
  margin-bottom: 40px;
 }

</style>
