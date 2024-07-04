import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRepository, RootState, Language } from 'shared/types';

import './details.scss';

export const Details: React.FC = () => {
  const { repoId } = useParams<{ repoId: string }>();
  const repoDetails = useSelector((state: RootState) =>
    state.repositories.find((repo: IRepository) => repo.id === repoId)
  );

  if (!repoDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details">
      <h4>{repoDetails.name}</h4>
      <p>Stars: {repoDetails.stargazerCount}</p>
      <p>Last Commit: {new Date(repoDetails.pushedAt).toLocaleDateString()}</p>
      <div className="owner">
        {repoDetails.owner.avatarUrl && (
          <img
            src={repoDetails.owner.avatarUrl}
            alt={`${repoDetails.owner.login} avatar`}
          />
        )}
        <a
          href={repoDetails.owner.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repoDetails.owner.login}
        </a>
      </div>
      <div className="languages">
        <h5>Languages</h5>
        <ul>
          {repoDetails.languages.nodes.map((language: Language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
      </div>
      <p>{repoDetails.description}</p>
    </div>
  );
};
