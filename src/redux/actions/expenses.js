import { v4 as uuidv4 } from 'uuid';
import * as types from './actionTypes';

export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = Date.now(),
} = {}) => ({
  type: types.ADD_EXPENSE,

  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

export const removeExpense = (id) => ({
  type: types.REMOVE_EXPENSE,
  id,
});

export const editExpense = (id, updates) => ({
  type: types.EDIT_EXPENSE,
  id,
  updates,
});
