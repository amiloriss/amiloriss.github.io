<template>
  <b-card class="user-item-card-wrapper">
    <div class="user-item-card">
      {{ username }}
      <router-link :to="{ name: 'currentUser', params: { id: userId } }">
        <BIconArrowRightCircleFill class="arrow-icon" />
      </router-link>
    </div>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { BIconArrowRightCircleFill } from 'bootstrap-vue';

export default Vue.extend({
  name: 'App',
  props: {
    username: String,
    userId: Number,
  },
  components: {
    BIconArrowRightCircleFill,
  },
});
</script>

<style lang="scss">
.user-item-card-wrapper {
  margin-top: 10px;
}
.user-item-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.arrow-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
