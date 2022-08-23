<template>
  <div class="users-list">
    <UserItem :key="user.id" v-for="user in allUsers" :username="user.name" :userId="user.id" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import UserItem from '../components/UserItem.vue';

export default Vue.extend({
  name: 'Users',
  components: {
    UserItem,
  },
  computed: mapGetters(['allUsers']),
  methods: mapActions(['fetchUsers']),
  async mounted() {
    this.fetchUsers();
  },
});
</script>

<style lang="scss">
.users-list {
  max-width: 500px;
  margin: 0 auto;
}
</style>
