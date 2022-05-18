import {
    INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD, INPUT_SIGNUP_EMAIL,
    INPUT_SIGNUP_PASSWORD, INPUT_SIGNUP_REPEAT_PASSWORD, RESET_LOGIN_FORM,
    RESET_SIGNUP_FORM, SET_SIGNUP_VALIDATION_MESSAGE
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case INPUT_LOGIN_EMAIL:
            return { ...state, loginEmail: action.payload };
        case INPUT_LOGIN_PASSWORD:
            return { ...state, loginPassword: action.payload };
        case INPUT_SIGNUP_EMAIL:
            return { ...state, signupEmail: action.payload };
        case INPUT_SIGNUP_PASSWORD:
            return { ...state, signupPassword: action.payload };
        case INPUT_SIGNUP_REPEAT_PASSWORD:
            return { ...state, signupRepeatPassword: action.payload };
        case RESET_LOGIN_FORM:
            return { ...state, loginEmail: '', loginPassword: '' };
        case RESET_SIGNUP_FORM:
            return { ...state, signupEmail: '', signupPassword: '', signupRepeatPassword: '' };
        case SET_SIGNUP_VALIDATION_MESSAGE:
            const { validationMessages } = state;
            return { ...state, validationMessages: { ...validationMessages, signup: action.payload } };
        default:
            return state;
    }
};