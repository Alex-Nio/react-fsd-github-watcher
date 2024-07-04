import React from 'react';
import { Search } from 'features/search';

import './home.scss';

export const Home = () => {
  return (
    <div className="page__container">
      <div className="content">
        <div className="content__inner">
          <div className="search">
            <Search />
          </div>
          <section></section>
        </div>
      </div>
    </div>
  );
};
