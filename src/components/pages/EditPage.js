import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm';
import { editExpense, removeExpense } from '../../redux/actions/expenses';

const EditPage = ({ expense, dispatch, history }) => {
  const id = expense.id;
  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(expense) => {
          dispatch(editExpense(id, expense));
          history.push('/');
        }}
      />
      <button
        onClick={() => {
          dispatch(removeExpense(id));
          history.push('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = ({ expenses }, { match }) => ({
  expense: expenses.find(({ id }) => id === match.params.id),
});

export default connect(mapStateToProps)(EditPage);
