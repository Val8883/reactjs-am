import React from 'react';

export default function Header({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision',
};
