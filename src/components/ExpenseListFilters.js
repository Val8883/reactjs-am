import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import {
  sortByAmount,
  sortByDate,
  setTextFilter,
  setStartDate,
  setEndDate,
} from '../redux/actions/filters';

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  };

  handleDateChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  handleFocusChange = (calendarFocused) => {
    this.setState({ calendarFocused });
  };

  render() {
    const {
      filters: { text, sortBy, startDate, endDate },
      dispatch,
    } = this.props;

    return (
      <div>
        <input
          type='text'
          value={text}
          onChange={({ target: { value } }) => {
            dispatch(setTextFilter(value));
          }}
        />
        <select
          value={sortBy}
          onChange={({ target: { value } }) => {
            dispatch(value === 'date' ? sortByDate() : sortByAmount());
          }}
        >
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={startDate}
          startDateId='startDateId'
          endDate={endDate}
          endDateId='endDateId'
          onDatesChange={this.handleDateChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.handleFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => ({ filters });

export default connect(mapStateToProps)(ExpenseListFilters);
