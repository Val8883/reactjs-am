import React from 'react';

export default function Option({ optionText, handleDeleteOption }) {
  return (
    <li className='widget-list-item'>
      {optionText}
      <button
        className='btn--link'
        onClick={(e) => {
          handleDeleteOption(optionText);
        }}
      >
        remove
      </button>
    </li>
  );
}
