import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    isPending: false,
    countries: [],
    error: null
}

const requestCountriesPending = (state) => {
    return updateObject(state, { isPending: true });
};

const requestCountriesSuccess = (state, action) => {
    return updateObject(state, { books: action.payload, isPending: false });
};

const requestCountriesFail = (state, action) => {
    return updateObject(state, { error: action.payload, isPending: false });
};


export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REQUEST_COUNTRIES_PENDING: return requestCountriesPending(state);
        case actionType.REQUEST_COUNTRIES_SUCCESS: return requestCountriesSuccess(state, action);
        case actionType.REQUEST_COUNTRIES_FAILED: return requestCountriesFail(state, action);
        default: return state;
    }
};