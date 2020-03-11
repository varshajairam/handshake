import * as actionTypes from '../../../constants/action-types';

const initialState = {
    jobs: [],
    searchResults: [],
    openModal: false,
    resume: "",
    success: false
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
        case actionTypes.SAVE_RESUME:
            return {
                ...state,
                resume: action.payload,                
            }
        case actionTypes.APPLY_TO_JOB:
            return {
                ...state,
                success: action.payload,                
            }
        default:
            return initialState;
    }
}

export default jobReducer;