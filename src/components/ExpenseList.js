import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h2>Expense List!</h2>
        {
            props.expenses.map((expense) => {
                return <ExpenseItem key={expense.id} {...expense} />
            })
        }

    </div>
);

const mappedToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,
            state.filters)
    };
};

export default connect(mappedToProps)(ExpenseList);