import * as actionTypes from '../../../constants/action-types';

export const addEmail = (payload) => {
    return { type: actionTypes.ADD_EMAIL, payload}
};

export const addPassword = (payload) => {
    return { type: actionTypes.ADD_PASSWORD, payload}
};

export const setError = (payload) => {
    return { type: actionTypes.SET_ERROR, payload }
};