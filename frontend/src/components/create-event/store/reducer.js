import * as actionTypes from '../../../constants/action-types';

const initialState = {
    name: null,
    date: null,
    location: null,
    time: null,
    description: null,
    eligibility: null
}

const createEventReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_NAME:
            return {
                ...state,
                name: action.payload,
            }
        case actionTypes.ADD_EVENT_DATE:
            return {
                ...state,
                date: action.payload,
            }
        case actionTypes.ADD_EVENT_LOCATION:
            return {
                ...state,
                location: action.payload,
            }
        case actionTypes.ADD_EVENT_TIME:
            return {
                ...state,
                time: action.payload,
            }
        case actionTypes.ADD_EVENT_DESC:
            return {
                ...state,
                description: action.payload,
            }
        case actionTypes.ADD_ELIGIBILITY:
            return {
                ...state,
                eligibility: action.payload,
            }
        default:
            return initialState;
    }
}

export default createEventReducer;