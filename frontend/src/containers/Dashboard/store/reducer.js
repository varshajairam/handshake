import * as actionTypes from '../../../constants/action-types';

const initialState = {
    jobs: [],
    searchResults: [],
    openModal: false
}
 
const jobReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SAVE_JOBS:
            return {
                ...state,
                jobs: action.payload,                
            }
        case actionTypes.RETURN_JOBS:
            return {
                ...state,
                searchResults: action.payload,                
            }
        case actionTypes.CONTROL_MODAL:
            return {
                ...state,
                openModal: action.payload,                
            }
        default:
            return initialState;
    }
}

export default jobReducer;