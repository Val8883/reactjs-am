import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleAmountChange = ({ target: { value, name } }) => {
    if (!value || value.match(/^\d{0,}(\.\d{0,2})?$/)) {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.isFieldsValid()) {
      return;
    }

    const { description, amount, note, createdAt } = this.state;
    this.props.onSubmit({
      description,
      amount: parseFloat(amount, 10) * 100,
      note,
      createdAt: createdAt.valueOf(),
    });
    this.cleanFields();
  };

  cleanFields() {
    this.setState({ description: '', amount: '', note: '' });
  }

  isFieldsValid() {
    const { description, amount } = this.state;

    if (!description || !amount) {
      this.setState({ error: 'Please, provide description and amount' });
      return false;
    }
    this.setState({ error: '' });

    return true;
  }

  handleDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };

  handleCalendarFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };

  render() {
    const {
      description,
      amount,
      note,
      createdAt,
      calendarFocused,
      error,
    } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            name='description'
            value={description}
            onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder='Amount'
            name='amount'
            value={amount}
            onChange={this.handleAmountChange}
          />
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.handleDateChange}
            focused={calendarFocused}
            onFocusChange={this.handleCalendarFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder='Add a note for your expense (optional)'
            name='note'
            value={note}
            onChange={this.handleChange}
          ></textarea>
          <button type='submit'>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
