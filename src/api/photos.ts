import { TPhoto } from '../types/photo';

export const getPhotos = (albumId: number): Promise<TPhoto> =>
  fetch(`${process.env.VUE_APP_TYPICODE}photos?albumId=${albumId}`).then((res) => res.json());
