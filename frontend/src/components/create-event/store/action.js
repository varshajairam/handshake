import * as actionTypes from '../../../constants/action-types';

export const addName = (payload) => {
    return { type: actionTypes.ADD_NAME, payload}
};

export const addLocation = (payload) => {
    return { type: actionTypes.ADD_EVENT_LOCATION, payload}
};

export const addDate = (payload) => {
    return { type: actionTypes.ADD_EVENT_DATE, payload}
};

export const addDesc = (payload) => {
    return { type: actionTypes.ADD_EVENT_DESC, payload}
};

export const addTime = (payload) => {
    return { type: actionTypes.ADD_EVENT_TIME, payload}
};

export const addEligibility = (payload) => {
    return { type: actionTypes.ADD_ELIGIBILITY, payload }
};