import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Expensify</h1>
      <nav>
        <NavLink to='/' exact activeClassName='active-link'>
          {' '}
          Dashboard
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
