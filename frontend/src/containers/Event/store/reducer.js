import * as actionTypes from '../../../constants/action-types';

const initialState = {
    events: [],
    searchResults: [],
    openModal: false,
    success: false,
    failure: null
}
 
const eventReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SAVE_EVENTS:
            return {
                ...state,
                events: action.payload,                
            }
        case actionTypes.RETURN_EVENTS:
            return {
                ...state,
                searchResults: action.payload,                
            }
        case actionTypes.CONTROL_EVENT_MODAL:
            return {
                ...state,
                openModal: action.payload,                
            }
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                success: action.payload,
            }
        case actionTypes.REGISTER_FAILURE:
            return {
                ...state,
                failure: action.payload, 
            }
        default:
            return initialState;
    }
}

export default eventReducer;