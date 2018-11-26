import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    isPending: false,
    topThreeCountries: [],
    regions: [],
    countedCountries: [],
    error: null
}

const requestCountriesPending = (state) => {
    return updateObject(state, { isPending: true });
};

const requestCountriesSuccess = (state, action) => {
    // Move to outer functions...
    const topThree = action.payload.sort((a, b) => b.population - a.population).slice(0, 3);

    const sortedRegion = action.payload.sort((a, b) => (a.region > b.region) - (a.region < b.region));

    const countedCountries = sortedRegion.reduce((regionResult, country) => {
        if (!country.region) return regionResult;

        let regionIndex = regionResult.findIndex((region) => country.region === region.name);

        if (~regionIndex) {
            regionResult[regionIndex].count += 1;
        } else {

            regionResult.push(Object.assign({}, { name: country.region, count: 1 }));
        }
        return regionResult;
    }, []);

    const regionList = action.payload.map(country => country.region).filter(region => region !== "");
    const uniqueRegions = Array.from(new Set(regionList)).sort();

    return updateObject(state, { topThreeCountries: topThree, regions: uniqueRegions, countedCountries: countedCountries, isPending: false });
};

const requestCountriesFail = (state, action) => {
    return updateObject(state, { error: action.payload, isPending: false });
};

const chartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REQUEST_COUNTRIES_PENDING: return requestCountriesPending(state);
        case actionType.REQUEST_COUNTRIES_SUCCESS: return requestCountriesSuccess(state, action);
        case actionType.REQUEST_COUNTRIES_FAILED: return requestCountriesFail(state, action);
        default: return state;
    }
};

export default chartsReducer;