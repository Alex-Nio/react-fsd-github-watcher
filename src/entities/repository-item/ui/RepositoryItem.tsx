import React from 'react';
import { Link } from 'react-router-dom';

interface RepositoryItemProps {
  repo: {
    id: string;
    name: string;
  };
}

export const RepositoryItem: React.FC<RepositoryItemProps> = ({ repo }) => {
  return (
    <div className="repository-item">
      <Link to={`/${repo.id}`} className="repository-item__name">
        {repo.name}
      </Link>
    </div>
  );
};
