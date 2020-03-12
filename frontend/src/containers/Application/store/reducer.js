import * as actionTypes from '../../../constants/action-types';

const initialState = {
    applications: [],
    jobs: [],
    searchResults: [],
}
 
const applicationReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_JOBS:
            return {
                ...state,
                applications: action.payload,                
            }
        case actionTypes.GET_ALL_JOBS:
            return {
                ...state,
                jobs: action.payload,                
            }
        case actionTypes.RETURN_APPLIED_JOBS:
            return {
                ...state,
                searchResults: action.payload,                
            }
        default:
            return initialState;
    }
}

export default applicationReducer;