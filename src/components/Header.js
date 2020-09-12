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
        <NavLink activeClassName='active-link' to='/edit'>
          {' '}
          Edit
        </NavLink>
        <NavLink activeClassName='active-link' to='/create'>
          {' '}
          Create
        </NavLink>
        <NavLink activeClassName='active-link' to='/help'>
          {' '}
          Help
        </NavLink>
      </nav>
    </header>
  );
}
