import axios from 'axios';
import * as actionType from './actionTypes';

export const requestCountries = () => (dispatch) => {
    const url = "https://restcountries.eu/rest/v2/all?fields=name;flag;alpha3Code;capital;region;timezones;population";
    dispatch({ type: actionType.REQUEST_COUNTRIES_PENDING });
    axios.get(url)
        .then(countries => dispatch({ type: actionType.REQUEST_COUNTRIES_SUCCESS, payload: countries.data }))
        .catch(error => dispatch({ type: actionType.REQUEST_COUNTRIES_FAILED, payload: error }));
};

export const nextPage = (num) => ({
    type: actionType.NEXT_PAGE,
    payload: num + 1
});

export const prevPage = (num) => ({
    type: actionType.PREV_PAGE,
    payload: num - 1
});

export const setSearchField = (text) => ({
    type: actionType.CHANGE_SEARCH_FIELD,
    payload: text
});