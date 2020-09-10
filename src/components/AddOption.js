import React, { Component } from 'react';

export default class AddOption extends Component {
  state = {
    error: undefined,
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div className='controls'>
        {error && <p>{error}</p>}
        <form className='controls-form' onSubmit={this.handleAddOption}>
          <input className='controls-form-input' type='text' name='option' />
          <button className='sm-btn'>Add Option</button>
        </form>
      </div>
    );
  }
}
