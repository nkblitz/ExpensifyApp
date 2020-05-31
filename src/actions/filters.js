
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

export const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT',
});

export const sortByDate = () => ({
    type: 'SORTBY_DATE',
});

export const setStartDate = (startDate) => ({
    type: 'SET_STARTDATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_ENDDATE',
    endDate
});
