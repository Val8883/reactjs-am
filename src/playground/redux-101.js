import { createStore } from 'redux';

// Action generators - function that return action objects

const incrementCount = (payload = 1) => ({ type: 'INCREMENT', payload });

const decrementCount = (payload = 1) => ({ type: 'DECREMENT', payload });

const setCount = (payload = 1) => ({ type: 'SET', payload });

const resetCount = (payload = 1) => ({ type: 'RESET' });

// Reducer

const initialState = { count: 0 };

function countReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'INCREMENT':
      return { count: state.count + payload };
    case 'DECREMENT':
      return { count: state.count - payload };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: payload };
    default:
      return state;
  }
}

// Create store

const store = createStore(countReducer);

// Execute function after every "action"
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch action to the reducer

store.dispatch(incrementCount(22));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount(42));

unsubscribe();
