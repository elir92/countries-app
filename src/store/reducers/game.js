import * as actionType from '../actions/actionTypes';
import { updateObject, randBetween } from '../../utility';

const initialState = {
    isPending: false,
    countries: [],
    error: null,
    gameStatus: false,
    game: []
}

const buildGame = (arr) => {
    const game = [];
    for (let i = 0; i < 10; i++) {
        let stage = randBetween(arr, 4);
        game.push(stage);
    }
    return game;
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

const startGame = (state) => {
    const countriesForGame = [...state.countries];
    const initiateGame = buildGame(countriesForGame);
    return updateObject(state, { gameStatus: true, game: initiateGame });
}

const restartGame = (state) => {
    return updateObject(state, { gameStatus: false, game: [] });
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REQUEST_COUNTRIES_PENDING: return requestCountriesPending(state);
        case actionType.REQUEST_COUNTRIES_SUCCESS: return requestCountriesSuccess(state, action);
        case actionType.REQUEST_COUNTRIES_FAILED: return requestCountriesFail(state, action);
        case actionType.START_GAME: return startGame(state);
        case actionType.RESTART_GAME: return restartGame(state);
        default: return state;
    }
};

