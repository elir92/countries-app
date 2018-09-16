import * as actionType from '../actions/actionTypes';
import { updateObject, randBetween } from '../../utility';

const initialState = {
    isPending: false,
    countries: [],
    error: null,
    gameStatus: false,
    game: [],
    currentStage: 0,
    randomFlag: ''
}

const buildGame = (arr) => {
    const game = [];
    for (let i = 0; i < 10; i++) {
        let stage = randBetween(arr, 4);
        game.push(stage);
    }
    return game;
}

const randFlag = (arr, stage) => {
    if (stage < 10) {
        return arr[stage][Math.floor(Math.random() * arr[stage].length)];
    }
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
    return updateObject(state, { gameStatus: true, game: initiateGame, randomFlag: randFlag(initiateGame, state.currentStage) });
}

const restartGame = (state) => {
    return updateObject(state, { gameStatus: false, game: [], currentStage: 0 });
}

const rightAnswer = (state, action) => {
    if (action.payload <= 10) {
        return updateObject(state, { currentStage: action.payload, randomFlag: randFlag(state.game, action.payload) });
    }
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REQUEST_COUNTRIES_PENDING: return requestCountriesPending(state);
        case actionType.REQUEST_COUNTRIES_SUCCESS: return requestCountriesSuccess(state, action);
        case actionType.REQUEST_COUNTRIES_FAILED: return requestCountriesFail(state, action);
        case actionType.START_GAME: return startGame(state);
        case actionType.RESTART_GAME: return restartGame(state);
        case actionType.RIGHT_ANSWER: return rightAnswer(state, action);
        default: return state;
    }
};

