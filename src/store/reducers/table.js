import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    isPending: false,
    countries: [],
    error: null,
    searchField: '',
    modal: false,
    currentCountry: {}
}

const requestCountriesPending = (state) => {
    return updateObject(state, { isPending: true });
};

const requestCountriesSuccess = (state, action) => {
    return updateObject(state, { countries: action.payload, isPending: false});
};

const requestCountriesFail = (state, action) => {
    return updateObject(state, { error: action.payload, isPending: false });
};

const setSearchField = (state, action) => {
    return updateObject(state, { searchField: action.payload });
};

const setModalState = (state, action) => {
    let current_country = {...action.payload, population: action.payload.population.toLocaleString() }
    return updateObject(state, { modal: true, currentCountry: current_country });
};

const modalToggle = (state) => {
    return updateObject(state, { modal: !state.modal, currentCountry: {} });
};


export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REQUEST_COUNTRIES_PENDING: return requestCountriesPending(state);
        case actionType.REQUEST_COUNTRIES_SUCCESS: return requestCountriesSuccess(state, action);
        case actionType.REQUEST_COUNTRIES_FAILED: return requestCountriesFail(state, action);
        case actionType.CHANGE_SEARCH_FIELD: return setSearchField(state, action);
        case actionType.SET_MODAL_STATE: return setModalState(state, action);
        case actionType.MODAL_TOGGLE: return modalToggle(state);
        default: return state;
    }
};