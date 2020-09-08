import React from 'react';

export default function Action({ handlePick, hasOptions }) {
  return (
    <div>
      <button onClick={handlePick} disabled={!hasOptions}>
        What should I do?
      </button>
    </div>
  );
}
