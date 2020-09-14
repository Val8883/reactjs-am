import React from 'react';

export default function PortfolioItemPage({ match }) {
  return (
    <div>
      <h1>Item: {match.params.id}</h1>
    </div>
  );
}
