import * as actionTypes from '../constants/action-types';

export const loginUser = (payload) => {
    return { type: actionTypes.LOGIN_USER, payload}
};