import { TUser } from '../types/user';

export const getUsers = (): Promise<TUser[]> =>
  fetch(`${process.env.VUE_APP_TYPICODE}users`).then((res) => res.json());

export const getCurrentUser = (userId: number): Promise<TUser> =>
  fetch(`${process.env.VUE_APP_TYPICODE}users/${userId}`).then((res) => res.json());
