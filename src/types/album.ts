import { TPhoto } from './photo';

export type TAlbum = {
  id: number;
  userId: number;
  title: string;
  photos: TPhoto[];
};
