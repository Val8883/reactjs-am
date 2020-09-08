import React from 'react';

export default function Option({ optionText, handleDeleteOption }) {
  return (
    <div>
      {optionText}
      <button
        onClick={(e) => {
          handleDeleteOption(optionText);
        }}
      >
        remove
      </button>
    </div>
  );
}
