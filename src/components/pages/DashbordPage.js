import React from 'react';
import ExpenseList from '../ExpenseList';
import ExpenseListFilters from '../ExpenseListFilters';

export default function DashbordPage() {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
}
