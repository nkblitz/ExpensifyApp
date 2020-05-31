import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({
    id
} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = ({ id, updates }) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT',
});

const sortByDate = () => ({
    type: 'SORTBY_DATE',
});

const setStartDate = (startDate) => ({
    type: 'SET_STARTDATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_ENDDATE',
    endDate
});

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = !expense.description.toLowerCase().includes(text);

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date')
            return a.createdAt < b.createdAt ? 1 : -1;
        else if (sortBy === 'amount')
            return a.amount < b.amount ? 1 : -1;
    });
};

const expensesReducerDefaultState = [];

const expensesReducer = ((state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id == action.id) {
                    return { ...expense, ...action.updates }
                }
            });
        default:
            return state;
    }
});

const filtersReducerDefaultState =
{
    text: '',
    sortBy: 'amount', //amount or date
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = ((state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, text: action.text }
        case 'SORTBY_AMOUNT':
            return { ...state, sortBy: 'amount' }
        case 'SORTBY_DATE':
            return { ...state, sortBy: 'date' }
        case 'SET_STARTDATE':
            return { ...state, startDate: action.startDate }
        case 'SET_ENDDATE':
            return { ...state, endDate: action.endDate }
        default:
            return state;
    }
});

const store = createStore(
    combineReducers(
        {
            expenses: expensesReducer,
            filters: filtersReducer
        }
    )
);

store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters))
});

const exp1 = store.dispatch(addExpense({ description: 'movie  rent', amount: 4540, createdAt: 1000 }));
const exp3 = store.dispatch(addExpense({ description: 'movie  rent ding', amount: 123, createdAt: 1000 }));
const exp2 = store.dispatch(addExpense({ description: 'rent ma yeh', amount: 5656, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: exp1.expense.id }));
// store.dispatch(editExpense({ id: exp2.expense.id, updates: { description: 'coffee', note: 'CCD', amount: 200 } }));

store.dispatch(setTextFilter({ text: 'rent' }));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

store.dispatch(setEndDate(1000));
// store.dispatch(setEndDate());


const demoState = {
    expenses: [{
        id: 'fjsdjkk',
        description: 'Jan Rent',
        note: 'final payent',
        amount: 5500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //amount or date
        startDate: undefined,
        endDate: undefined
    }
};
