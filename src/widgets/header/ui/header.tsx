import React from 'react';
import { NavLink } from 'react-router-dom';
// import { MENU_ITEMS } from 'shared/consts';

import './header.scss';

export const Header = () => {
  // const navigationContent = MENU_ITEMS.map((item) => (
  //   <li key={item.title} className="navigation-menu-item">
  //     <NavLink
  //       to={item.link}
  //       end
  //       className={({ isActive }) => (isActive ? 'active' : '')}
  //     >
  //       {item.title}
  //     </NavLink>
  //   </li>
  // ));

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
              <li className="navbar-list__item">
                <NavLink
                  to="/:repoId"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Details
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
