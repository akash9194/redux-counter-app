import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './../utility';
const initialState = {
    counter: 0,
    results: []
}

const storeResult = (state, action) => {
    return updateObject(state, {
        results: state.results.concat({
            val: action.result,
            id: new Date()
        })
    });
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter((result, index) => result.id !== action.resultElId);
    return updateObject(state, { results: updatedArray });
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:  return storeResult(state, action);
        case actionTypes.DELETE_RESULT: return deleteResult(state, action)
    }
    return state;
};

export default reducer;