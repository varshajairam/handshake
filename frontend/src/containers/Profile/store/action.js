import * as actionTypes from '../../../constants/action-types';

export const saveBasicDetails = (payload) => {
    return { type: actionTypes.SAVE_BASIC_DETAILS, payload}
};

export const saveEducationInfo = (payload) => {
    return { type: actionTypes.SAVE_EDUCATION_INFO, payload}
};

export const saveExperienceInfo = (payload) => {
    return { type: actionTypes.SAVE_EXPERIENCE_INFO, payload}
};

export const saveSkillset = (payload) => {
    return { type: actionTypes.SAVE_SKILLSET, payload }
};

export const changeMode = (payload) => {
    return { type: actionTypes.CHANGE_MODE, payload }
};

export const changeEdMode = (payload) => {
    return { type: actionTypes.CHANGE_EDUCATION_MODE, payload }
};

export const changeExpMode = (payload) => {
    return { type: actionTypes.CHANGE_EXPERIENCE_MODE, payload }
};

export const enableSave = (payload) => {
    return { type: actionTypes.ENABLE_SAVE, payload }
};

export const saveProfilePic = (payload) => {
    return { type: actionTypes.SAVE_PROFILE_PIC, payload }
};