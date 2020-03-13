import * as actionTypes from '../../../constants/action-types';

const initialState = {
    title: null,
    posting_date: null,
    app_deadline: null,
    location: null,
    salary: null,
    description: null,
    job_type: null,
    success: false
}

const createJobReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TITLE:
            return {
                 ...state,
                 title: action.payload,
            }
        case actionTypes.ADD_POSTING:
            return {
                    ...state,
                    posting_date: action.payload,
            }
        case actionTypes.ADD_DEADLINE:
            return {
                 ...state,
                 app_deadline: action.payload,
            }
        case actionTypes.ADD_LOCATION:
            return {
                ...state,
                location: action.payload,
            }
        case actionTypes.ADD_SALARY:
            return {
                ...state,
                salary: action.payload,
            }
        case actionTypes.ADD_DESCRIPTION:
            return {
                ...state,
                description: action.payload,
            }
        case actionTypes.ADD_JOB_TYPE:
            return {
                ...state,
                job_type: action.payload,
            }
        case actionTypes.CREATE_SUCCESS:
            return {
                ...state,
                success: action.payload,
            }
        default:
            return initialState;
    }
}

export default createJobReducer;