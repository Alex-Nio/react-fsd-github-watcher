import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {
  fetchAllRepositories,
  fetchUserRepositories,
} from 'app/actions/repoActions';
import { AppDispatch, RootState } from 'app/store';
import { RepositoryItem } from 'entities/repository-item';
import { IRepository } from 'shared/types';
import { setRepositories } from 'app/actions/repoActions';
import { setQuery } from 'app/actions/searchActions';

import './search.scss';

export const Search = () => {
  const dispatch: AppDispatch = useDispatch();
  const repositories = useSelector((state: RootState) => state.repositories);
  const searchQuery = useSelector((state: RootState) => state.search.query);

  const [query, setLocalQuery] = useState(searchQuery);

  // Загрузка репозиториев текущего пользователя при монтировании компонента
  useEffect(() => {
    const fetchUserRepos = async () => {
      try {
        const fetchedRepositories = await dispatch(fetchUserRepositories());
        dispatch(setRepositories(fetchedRepositories));
      } catch (error) {
        console.error('Ошибка при загрузке репозиториев пользователя:', error);
      }
    };

    fetchUserRepos();
  }, [dispatch]);

  // Обработчик изменения текста в поле поиска
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(e.target.value);
  };

  // Обработчик отправки формы поиска
  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setQuery(query));

    try {
      let fetchedRepositories: IRepository[];

      if (query.trim() === '') {
        // Если запрос пустой, показываем репозитории текущего пользователя
        fetchedRepositories = await dispatch(fetchUserRepositories());
      } else {
        // Иначе выполняем поиск среди всех репозиториев GitHub
        fetchedRepositories = await dispatch(fetchAllRepositories(query));
      }

      dispatch(setRepositories(fetchedRepositories));
    } catch (error) {
      console.error('Ошибка при выполнении поиска:', error);
    }
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Поиск репозиториев"
        />
        <button type="submit" className="search-btn">
          Искать
        </button>
      </form>

      <ul className="repository-list">
        {repositories.map((repo: IRepository) => (
          <li key={repo.id} className="repository-list__item repository-item">
            <RepositoryItem repo={repo} />
            {repo.description && (
              <span className="repository-item__description">
                {repo.description}
              </span>
            )}

            <span className="repository-item__commit">
              Last commit: {repo.pushedAt}
            </span>
            <span className="repository-item__rated">
              Stars: {repo.stargazerCount}
            </span>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="repository-item__link"
            >
              <span>URL: </span>
              <span>{repo.url}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
