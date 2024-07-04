import { createAction } from '@reduxjs/toolkit';
import { AppDispatch } from 'app/store';
import {
  fetchAllRepositories as apiFetchAllRepositories,
  fetchUserRepositories as apiFetchUserRepositories,
} from 'app/api/api';
import { IRepository } from 'shared/types';

export const setRepositories = createAction<IRepository[]>('SET_REPOSITORIES');

export const fetchAllRepositories =
  (query: string, count: number = 10) =>
  async (dispatch: AppDispatch): Promise<IRepository[]> => {
    try {
      const repositories = await apiFetchAllRepositories(query, count);
      dispatch(setRepositories(repositories));
      return repositories;
    } catch (error) {
      console.error('Ошибка при загрузке репозиториев:', error);
      throw error;
    }
  };

export const fetchUserRepositories =
  () =>
  async (dispatch: AppDispatch): Promise<IRepository[]> => {
    try {
      const repositories = await apiFetchUserRepositories();
      dispatch(setRepositories(repositories));
      return repositories;
    } catch (error) {
      console.error('Ошибка при загрузке репозиториев пользователя:', error);
      throw error;
    }
  };
