import { getPosts } from '@/api/posts';
import { TPost } from '@/types/post';

export default {
  state: {
    posts: [],
  },
  mutations: {
    resetState(state: { posts: TPost[] }) {
      Object.assign(state, { posts: null });
    },

    updatePosts(state: { posts: TPost[] }, posts: TPost[]) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchPosts(ctx: any, userId: number) {
      const posts = await getPosts(userId);

      ctx.commit('updatePosts', posts);
    },
  },
  getters: {
    allPosts(state: { posts: TPost[] }) {
      return state.posts;
    },
  },
};
