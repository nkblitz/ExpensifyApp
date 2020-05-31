
const filtersReducerDefaultState =
{
    text: '',
    sortBy: 'amount', //amount or date
    startDate: undefined,
    endDate: undefined
};

export default ((state = filtersReducerDefaultState, action) => {
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