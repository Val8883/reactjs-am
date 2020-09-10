import React from 'react';
import Option from './Option';

export default function Options({
  handleDeleteOptions,
  handleDeleteOption,
  options,
}) {
  return (
    <section className='widget'>
      <div className='widget-header'>
        <h3>Your Options:</h3>
        <button className='btn--link ' onClick={handleDeleteOptions}>
          Remove All
        </button>
      </div>

      {options.length === 0 && <p>Please add an option to get started!</p>}
      <ul className='widget-list'>
        {options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={handleDeleteOption}
          />
        ))}
      </ul>
    </section>
  );
}
