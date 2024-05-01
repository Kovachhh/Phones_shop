// eslint-disable-next-line import/no-extraneous-dependencies
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import './index.scss';
import { useState } from 'react';

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu isOpen={isOpen} onStateChange={state => setIsOpen(state.isOpen)}>
      <li className="menu-item">
        <NavLink to="/" className="bm-item" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
      </li>

      <li className="menu-item">
        <NavLink
          to="/phones"
          className="bm-item"
          onClick={() => setIsOpen(false)}
        >
          Phones
        </NavLink>
      </li>

      <li className="menu-item">
        <NavLink
          to="/tablets"
          className="bm-item"
          onClick={() => setIsOpen(false)}
        >
          Tables
        </NavLink>
      </li>

      <li className="menu-item">
        <NavLink
          to="/accessories"
          className="bm-item"
          onClick={() => setIsOpen(false)}
        >
          Accessories
        </NavLink>
      </li>

      <li className="menu-item">
        <NavLink
          to="/favorites"
          className="bm-item"
          onClick={() => setIsOpen(false)}
        >
          Favourites
        </NavLink>
      </li>

      <li className="menu-item">
        <NavLink
          to="/cart"
          className="bm-item"
          onClick={() => setIsOpen(false)}
        >
          Cart
        </NavLink>
      </li>
    </Menu>
  );
};
