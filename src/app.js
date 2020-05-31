
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore';
import { addExpense } from '../src/actions/expenses';
import { setTextFilter } from '../src/actions/filters';
import getVisibleExpenses from '../src/selectors/expenses';
import './styles/styles.scss';
import 'normalize-css/normalize.css'

const store = configureStore();




const exp1 = store.dispatch(addExpense({ description: 'Water bill', amount: 4540, createdAt: 10050 }));
const exp3 = store.dispatch(addExpense({ description: 'Gas bill', amount: 123, createdAt: 565 }));
const exp2 = store.dispatch(addExpense({ description: 'rent ma yeh', amount: 5656, createdAt: -10600 }));
// store.dispatch(setTextFilter('BILL'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));