import { getCurrentUser, getUsers } from '@/api/users';
import { TUser } from '@/types/user';

export default {
  state: {
    users: [],
    user: null,
  },

  mutations: {
    resetState(state: { user: TUser }) {
      Object.assign(state, { user: null });
    },

    updateUsers(state: { users: TUser[] }, users: TUser[]) {
      state.users = users;
    },

    updateUser(state: { user: TUser }, user: TUser) {
      state.user = user;
    },
  },

  actions: {
    async fetchUsers(ctx: any) {
      const users = await getUsers();

      ctx.commit('updateUsers', users);
    },

    async fetchCurrentUser(ctx: any, userId: number) {
      const user = await getCurrentUser(userId);

      ctx.commit('updateUser', user);
    },
  },

  getters: {
    allUsers(state: { users: TUser[] }) {
      return state.users;
    },

    currentUser(state: { user: TUser }) {
      return state.user;
    },
  },
};
