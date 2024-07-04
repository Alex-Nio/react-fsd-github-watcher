import { fetchAllRepositories, fetchUserRepositories } from 'app/api/api';
import React, { useState, useEffect } from 'react';

import './search.scss';

interface IRepository {
  id: string;
  url: string;
  name: string;
  description: string;
  pushedAt: string;
  stargazerCount: number;
}

export const Search = () => {
  const [query, setQuery] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    async function loadRepositories() {
      try {
        const fetchedRepositories = await fetchUserRepositories('Alex-Nio');

        setRepositories(fetchedRepositories);
      } catch (error) {
        console.error('Ошибка при загрузке репозиториев:', error);
      }
    }

    loadRepositories();
  }, []);

  async function searchRepositories(query: string) {
    try {
      const fetchedRepositories = await fetchAllRepositories(query);
      setRepositories(fetchedRepositories);
    } catch (error) {
      console.error('Ошибка при поиске репозиториев:', error);
    }
  }

  return (
    <div>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          searchRepositories(query);
        }}
      >
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск репозиториев"
        />
        <button type="submit" className="search-btn">
          Искать
        </button>
      </form>

      <ul className="repository-list">
        {repositories.map((repo) => (
          <li key={repo.id} className="repository-list__item repository-item">
            <span className="repository-item__name">{repo.name}</span>
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
              URL: {repo.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
