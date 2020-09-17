const defaultState = [
  {
    id: '0cf4f2cc-1317-4fe0-a44e-5dad7b1f4e3c',
    description: 'Rent bill',
    note: 'NoTe',
    amount: 100,
    createdAt: 4500,
  },
  {
    id: '47a860e9-5d5d-46af-b9c2-c18d12db4455',
    description: 'Coffee bill',
    note: 'NOT',
    amount: 30,
    createdAt: 1000,
  },
  {
    id: '47a860e9-5d5d-46af-bsd2-c18d12db4455',
    description: 'Gass bill',
    note: 'NOT',
    amount: 12,
    createdAt: 109500,
  },
];

const expensesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) =>
        expense.id === action.id ? { ...expense, ...action.updates } : expense
      );
    default:
      return state;
  }
};

export default expensesReducer;
