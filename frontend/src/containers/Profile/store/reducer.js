import * as actionTypes from '../../../constants/action-types';
import user from '../../../assets/user.png';

const initialState = {
    basicDetails: null,
    education: [],
    experience: null,
    skillset: [],
    mode: false,
    save: false,
    profile_pic: user,
    edMode: false,
    expMode: false
}
 
const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SAVE_BASIC_DETAILS:
            return {
                ...state,
                basicDetails: action.payload,                
            }
        case actionTypes.SAVE_EDUCATION_INFO:
            return {
                ...state,
                education: action.payload,
            }
        case actionTypes.SAVE_EXPERIENCE_INFO:
            return {
                ...state,
                experience: action.payload,
            }
        case actionTypes.SAVE_SKILLSET:
            return {
                ...state,
                skillset: action.payload
            }
        case actionTypes.CHANGE_MODE:
            return {
                ...state,
                mode: action.payload
            }
        case actionTypes.CHANGE_EDUCATION_MODE:
            return {
                ...state,
                edMode: action.payload
            }
        case actionTypes.CHANGE_EXPERIENCE_MODE:
            return {
                ...state,
                expMode: action.payload
            }
        case actionTypes.ENABLE_SAVE:
            return {
                ...state,
                save: action.payload
            }
        case actionTypes.SAVE_PROFILE_PIC:
            return {
                ...state,
                profile_pic: action.payload
            }
        default:
            return initialState;
    }
}

export default profileReducer;