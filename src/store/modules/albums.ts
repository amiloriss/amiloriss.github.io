import { getAlbums } from '@/api/albums';
import { getPhotos } from '@/api/photos';
import { TAlbum } from '@/types/album';

export default {
  state: {
    albums: [],
  },
  mutations: {
    resetState(state: { albums: TAlbum[] }) {
      Object.assign(state, { albums: [] });
    },
    updateAlbums(state: { albums: TAlbum[] }, albums: TAlbum[]) {
      state.albums = albums;
    },
  },
  actions: {
    async fetchAlbums(ctx: any, userId: number) {
      ctx.commit('resetState');

      const albums = await getAlbums(userId);

      new Promise((resolve) => {
        albums.map((element: any) => {
          getPhotos(element.id).then((res) => (element.photos = res));
        });

        resolve(albums);
      }).then((res) => {
        ctx.commit('updateAlbums', res);
      });
    },
  },
  getters: {
    allAlbums(state: { albums: TAlbum[] }) {
      return state.albums;
    },
  },
};
