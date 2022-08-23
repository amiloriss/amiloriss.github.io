<template>
  <div>
    <div class="user-wrapper">
      <router-link to="/">
        <BIconArrowLeftCircleFill />
      </router-link>
      <b-spinner variant="primary" v-if="!currentUser"></b-spinner>
      <div class="user" v-else>User: {{ currentUser.name }}</div>
    </div>

    <div class="content">
      <div v-if="!page || page === 'albums'" class="album-wrapper">
        <h2>Albums</h2>
        <div class="album" :key="album.id" v-for="album in allAlbums">
          <b-carousel
            class="img-carousel"
            :id="album.id.toString()"
            v-model="slide"
            :interval="3000"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-spinner v-if="!Object.hasOwn(album, 'photos')"></b-spinner>
            <div v-else :key="photo.id" v-for="photo in album.photos.slice(0, 5)">
              <b-carousel-slide :img-src="photo.url" />
            </div>
          </b-carousel>
        </div>
      </div>
      <div v-if="!page || page === 'posts'" class="post-wrapper">
        <h2>Posts</h2>
        <b-spinner v-if="!allPosts" />
        <div v-else :key="post.id" v-for="post in allPosts">
          {{ post.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { BIconArrowLeftCircleFill } from 'bootstrap-vue';

export default Vue.extend({
  name: 'CurrentUser',
  data() {
    return {
      slide: 0,
      sliding: false,
      page: '',
    };
  },
  components: {
    BIconArrowLeftCircleFill,
  },
  computed: mapGetters(['currentUser', 'allPosts', 'allAlbums']),
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  async mounted() {
    const userId = this.$route.params.id;
    const { page } = this.$route.query;

    this.page = page as string;

    await this.$store.dispatch('fetchAlbums', userId);
    await this.$store.dispatch('fetchCurrentUser', userId);
    await this.$store.dispatch('fetchPosts', userId);
  },
});
</script>

<style lang="scss">
.user-wrapper {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin: 20px 0;

  .user {
    margin-left: 10px;
    text-decoration: underline;
  }
}

.content {
  display: flex;

  @media screen and(max-width: 776px) {
    flex-direction: column;
    align-items: center;
  }

  .post-wrapper {
    width: 30%;
  }
  .album-wrapper {
    width: 70%;

    .album {
      margin: 5px;
      display: inline-block;

      .img-carousel {
        width: 200px;
      }
    }
  }
}
</style>
