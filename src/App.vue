<template>
  <div class="app">
    <h1 class="title">Users Social <BIconPersonFill /></h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { BIconPersonFill } from 'bootstrap-vue';

export default Vue.extend({
  name: 'App',
  components: {
    BIconPersonFill,
  },
});
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  max-width: 1440px;
  margin: 20px auto;
  padding: 0 20px;
}

.title {
  text-align: center;
}
</style>
