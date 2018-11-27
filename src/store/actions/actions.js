import axios from 'axios';
import * as actionType from './actionTypes';

export const requestCountries = () => (dispatch) => {
    const url = "https://restcountries.eu/rest/v2/all?fields=name;flag;alpha3Code;capital;region;population";
    dispatch({ type: actionType.REQUEST_COUNTRIES_PENDING });
    axios.get(url)
        .then(countries => dispatch({ type: actionType.REQUEST_COUNTRIES_SUCCESS, payload: countries.data }))
        .catch(error => dispatch({ type: actionType.REQUEST_COUNTRIES_FAILED, payload: error }));
};

//---------------------------------------------------------

// Country Table Actions.

export const setSearchField = (text) => ({
    type: actionType.CHANGE_SEARCH_FIELD,
    payload: text
});

export const setModalState = (obj) => ({
    type: actionType.SET_MODAL_STATE,
    payload: obj
});

export const modalToggle = () => ({
    type: actionType.MODAL_TOGGLE
});

//---------------------------------------------------------

// Flag Game Actions.

export const startGame = () => ({
    type: actionType.START_GAME
});

export const restartGame = () => ({
    type: actionType.RESTART_GAME
});

export const answerHandler = (num) => ({
    type: actionType.ANSWER_HANDLER,
    payload: num + 1
});

//---------------------------------------------------------

// Charts Actions

export const requestCountriesForCharts = () => (dispatch) => {
    const url = "https://restcountries.eu/rest/v2/all?fields=name;region;population";
    dispatch({ type: actionType.REQUEST_COUNTRIES_FOR_CHARTS_PENDING });
    axios.get(url)
        .then(countries => dispatch({ type: actionType.REQUEST_COUNTRIES_FOR_CHARTS_SUCCESS, payload: countries.data }))
        .catch(error => dispatch({ type: actionType.REQUEST_COUNTRIES_FOR_CHARTS_FAILED, payload: error }));
};