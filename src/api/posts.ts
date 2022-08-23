import { TPost } from '../types/post';

export const getPosts = (userId: number): Promise<TPost> =>
  fetch(`${process.env.VUE_APP_TYPICODE}posts?userId=${userId}`).then((res) => res.json());
