import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to='/' exact activeClassName='active-link'>
          {' '}
          Home
        </NavLink>
        <NavLink activeClassName='active-link' exact to='/portfolio'>
          {' '}
          Portfolio
        </NavLink>
        <NavLink activeClassName='active-link' to='/contact'>
          {' '}
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
