import * as actionTypes from '../../../constants/action-types';

export const saveEvents = (payload) => {
    return { type: actionTypes.SAVE_EVENTS, payload}
};

export const returnEvents = (payload) => {
    return { type: actionTypes.RETURN_EVENTS, payload}
};

export const controlModal = (payload) => {
    return { type: actionTypes.CONTROL_EVENT_MODAL, payload}
};

export const registerFailure = (payload) => {
    return { type: actionTypes.REGISTER_FAILURE, payload }
};

export const registerSuccess = (payload) => {
    return { type: actionTypes.REGISTER_SUCCESS, payload }
};

// export const changeEdMode = (payload) => {
//     return { type: actionTypes.CHANGE_EDUCATION_MODE, payload }
// };

// export const changeExpMode = (payload) => {
//     return { type: actionTypes.CHANGE_EXPERIENCE_MODE, payload }
// };

// export const enableSave = (payload) => {
//     return { type: actionTypes.ENABLE_SAVE, payload }
// };

// export const saveProfilePic = (payload) => {
//     return { type: actionTypes.SAVE_PROFILE_PIC, payload }
// };