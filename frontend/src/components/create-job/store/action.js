import * as actionTypes from '../../../constants/action-types';

export const addTitle = (payload) => {
    return { type: actionTypes.ADD_TITLE, payload}
};

export const addLocation = (payload) => {
    return { type: actionTypes.ADD_LOCATION, payload}
};

export const addPostingDate = (payload) => {
    return { type: actionTypes.ADD_POSTING, payload}
};

export const addAppDeadline = (payload) => {
    return { type: actionTypes.ADD_DEADLINE, payload}
};

export const addJobType = (payload) => {
    return { type: actionTypes.ADD_JOB_TYPE, payload}
};

export const addDesc = (payload) => {
    return { type: actionTypes.ADD_DESCRIPTION, payload }
};

export const createSuccess = (payload) => {
    return { type: actionTypes.CREATE_SUCCESS, payload }
};

export const addSalary = (payload) => {
    return { type: actionTypes.ADD_SALARY, payload }
};