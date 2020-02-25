import * as actionTypes from '../constants/action-types';

const initialState = {
    email_id: "",
    password: "",
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOGIN_USER:
            return {
                 ...state,
                 email_id: action.email_id,
                 password: action.password
            }
        default:
            return initialState;
    }
}

export default rootReducer;