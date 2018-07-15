import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    isPending: false,
    countries: [],
    error: null,
    currentPage: 1,
    countriesPerPage: 10,
    prevDisable: true,
    nextDisable: false,
    amountOfPages: 0,
    searchField: ''
}

const requestCountriesPending = (state) => {
    return updateObject(state, { isPending: true });
};

const requestCountriesSuccess = (state, action) => {
    const amount = Math.ceil(action.payload.length / state.countriesPerPage);
    return updateObject(state, { countries: action.payload, isPending: false, amountOfPages: amount });
};

const requestCountriesFail = (state, action) => {
    return updateObject(state, { error: action.payload, isPending: false });
};

const nextPage = (state, action) => {
    if (action.payload < state.amountOfPages) {
        return updateObject(state, { currentPage: action.payload, prevDisable: false });
    }

    if (action.payload === state.amountOfPages) {
        return updateObject(state, { currentPage: action.payload, prevDisable: false, nextDisable: true });
    }

};

const prevPage = (state, action) => {
    if (action.payload > 1) {
        return updateObject(state, { currentPage: action.payload, nextDisable: false });
    }

    if (action.payload <= 1) {
        return updateObject(state, { currentPage: action.payload, prevDisable: true });
    }
};

const setSearchField = (state, action) => {
    return updateObject(state, { searchField: action.payload });
};


export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REQUEST_COUNTRIES_PENDING: return requestCountriesPending(state);
        case actionType.REQUEST_COUNTRIES_SUCCESS: return requestCountriesSuccess(state, action);
        case actionType.REQUEST_COUNTRIES_FAILED: return requestCountriesFail(state, action);
        case actionType.NEXT_PAGE: return nextPage(state, action);
        case actionType.PREV_PAGE: return prevPage(state, action);
        case actionType.CHANGE_SEARCH_FIELD: return setSearchField(state, action);
        default: return state;
    }
};