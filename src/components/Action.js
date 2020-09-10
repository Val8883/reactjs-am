import React from 'react';

export default function Action({ handlePick, hasOptions }) {
  return (
    <div>
      <button onClick={handlePick} disabled={!hasOptions} className='big-btn'>
        What should I do?
      </button>
    </div>
  );
}
