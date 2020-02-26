import * as actionTypes from '../../../constants/action-types';

const initialState = {
    first_name: "",
    last_name: "",
    email_id: "",
    password: "",
    college_name: "",
    error: null
}

const signupReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_EMAIL:
            return {
                 ...state,
                 email_id: action.payload,
            }
        case actionTypes.ADD_PASSWORD:
            return {
                    ...state,
                    password: action.payload,
            }
        case actionTypes.ADD_FIRST_NAME:
            return {
                 ...state,
                 first_name: action.payload,
            }
        case actionTypes.ADD_LAST_NAME:
            return {
                    ...state,
                    last_name: action.payload,
            }
        case actionTypes.ADD_COLLEGE_NAME:
            return {
                    ...state,
                    college_name: action.payload,
            }
        case actionTypes.SET_SIGNUP_ERROR:
            return {
                    ...state,
                    error: action.payload,
            }
        default:
            return initialState;
    }
}

export default signupReducer;