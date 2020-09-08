import React from 'react';
import Option from './Option';

export default function({ handleDeleteOptions, handleDeleteOption, options }) {
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove All</button>

      {options.length === 0 && <p>Please add an option to get started!</p>}
      {options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={handleDeleteOption}
        />
      ))}
    </div>
  );
}
