import * as actionTypes from '../../../constants/action-types';

const initialState = {
    email_id: "",
    password: "",
    error: null
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_EMAIL:
            return {
                 ...state,
                 email_id: action.payload,
            }
        case actionTypes.ADD_PASSWORD:
            return {
                    ...state,
                    password: action.payload
            }
        case actionTypes.SET_ERROR:
            return {
                    ...state,
                    error: action.payload
            }
        default:
            return initialState;
    }
}

export default loginReducer;