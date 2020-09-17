import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../redux/selectors/expenses';

const ExpenseList = ({ expenses }) => (
  <ul>
    {expenses.map((expense) => (
      <ExpenseListItem {...expense} key={expense.id} />
    ))}
  </ul>
);

const mapStateToProps = ({ expenses, filters }) => ({
  expenses: selectExpenses(expenses, filters),
});

export default connect(mapStateToProps)(ExpenseList);
