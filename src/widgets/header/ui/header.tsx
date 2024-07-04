import React from 'react';
import { NavLink } from 'react-router-dom';
// import { MENU_ITEMS } from 'shared/consts';

import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <nav className="navbar">
          <div className="navbar__inner">
            <ul className="navbar-list">
              <li className="navbar-list__item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  <i className="icon-"></i>
                  Home
                </NavLink>
              </li>
              <li className="navbar-list__item">
                <NavLink
                  to="/ui-page"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  UI
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
