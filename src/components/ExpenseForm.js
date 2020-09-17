import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { addExpense } from '../redux/actions/expenses';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

class ExpenseForm extends Component {
  state = {
    description: '',
    amount: '',
    note: '',
    createdAt: moment(),
    calendarFocused: false,
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleAmountChange = ({ target: { value, name } }) => {
    if (value.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState({ [name]: Number(value) });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { description, amount, note, createdAt } = this.state;
    this.props.dispatch(addExpense({ description, amount, note, createdAt }));
    this.cleanFields();
  };

  cleanFields() {
    this.setState({ description: '', amount: 0, note: '' });
  }

  handleDateChange = (createdAt) => {
    this.setState({ createdAt });
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
    } = this.state;
    return (
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
        />
        <textarea
          placeholder='Add a note for your expense (optional)'
          name='note'
          value={note}
          onChange={this.handleChange}
        ></textarea>
        <button type='submit'>Add Expense</button>
      </form>
    );
  }
}

export default connect()(ExpenseForm);
