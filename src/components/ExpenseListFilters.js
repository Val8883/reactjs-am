import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../redux/actions/filters';
import { sortByAmount, sortByDate } from '../redux/actions/filters';

const ExpenseListFilters = ({
  filters: { text, sortBy },
  onTextChange,
  onSelectChange,
}) => (
  <div>
    <input
      type='text'
      value={text}
      onChange={({ target: { value } }) => {
        onTextChange(value);
      }}
    />
    <select
      value={sortBy}
      onChange={({ target: { value } }) => {
        onSelectChange(value);
      }}
    >
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
  </div>
);

const mapStateToProps = ({ filters }) => ({ filters });

const mapDispatchToProps = (dispatch) => ({
  onTextChange: (text) => dispatch(setTextFilter(text)),
  onSelectChange: (value) =>
    dispatch(value === 'date' ? sortByDate() : sortByAmount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
