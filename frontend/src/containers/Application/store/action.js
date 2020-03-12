import * as actionTypes from '../../../constants/action-types';

export const getJobs = (payload) => {
    return { type: actionTypes.GET_JOBS, payload }
};

export const saveJobs = (payload) => {
    return { type: actionTypes.GET_ALL_JOBS, payload }
};

export const returnAppliedJobs = (payload) => {
    return { type: actionTypes.RETURN_APPLIED_JOBS, payload }
};