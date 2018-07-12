import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    isPending: false,
    countries: [],
    error: null,
    currentPage: 1,
    countriesPerPage: 10
}

const requestCountriesPending = (state) => {
    return updateObject(state, { isPending: true });
};

const requestCountriesSuccess = (state, action) => {
    return updateObject(state, { countries: action.payload, isPending: false });
};

const requestCountriesFail = (state, action) => {
    return updateObject(state, { error: action.payload, isPending: false });
};

const nextPage = (state, action) => {
    return updateObject(state, { currentPage: action.payload });
};

const prevPage = (state, action) => {
    return updateObject(state, { currentPage: action.payload });
};


export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REQUEST_COUNTRIES_PENDING: return requestCountriesPending(state);
        case actionType.REQUEST_COUNTRIES_SUCCESS: return requestCountriesSuccess(state, action);
        case actionType.REQUEST_COUNTRIES_FAILED: return requestCountriesFail(state, action);
        case actionType.NEXT_PAGE: return nextPage(state,action);
        case actionType.PREV_PAGE: return prevPage(state,action);
        default: return state;
    }
};