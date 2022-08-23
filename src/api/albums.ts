import { TAlbum } from '../types/album';

export const getAlbums = (userId: number): Promise<TAlbum[]> =>
  fetch(`${process.env.VUE_APP_TYPICODE}albums?userId=${userId}`).then((res) => res.json());
