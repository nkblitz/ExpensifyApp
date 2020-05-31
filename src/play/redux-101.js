import { createStore } from 'redux';

const increment = ({ incrementBy } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrement = ({ decrementBy } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const set = ({ setValue }) => ({
    type: 'SET',
    setValue
});

const reset = () => ({
    type: 'RESET'
});

const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.setValue
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            state;
    }

};

const store = createStore(countReducer);


console.log(store.getState());

store.dispatch(increment({ incrementBy: 10 }));

store.dispatch(reset());

store.dispatch(set({ setValue: 100 }));

store.dispatch(decrement({ decrementBy: 10 }));

console.log(store.getState());




