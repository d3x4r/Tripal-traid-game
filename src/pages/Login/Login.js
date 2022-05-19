import { useState, useReducer } from 'react';
import cn from 'classnames';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { reducer } from './reducer';
import { ReactComponent as Pen } from './icon-pen.svg'
import logo from '../../assets/logo.png';
import s from './Login.module.scss';
import {
    INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD, INPUT_SIGNUP_EMAIL,
    INPUT_SIGNUP_PASSWORD, INPUT_SIGNUP_REPEAT_PASSWORD, RESET_LOGIN_FORM,
    RESET_SIGNUP_FORM, SET_SIGNUP_VALIDATION_MESSAGE
} from './actions';

const initialState = {
    loginEmail: '',
    loginPassword: '',
    signupEmail: '',
    signupPassword: '',
    signupRepeatPassword: '',
    validationMessages: {
        signup: null,
    },
};

const signupPasswordsError = 'Passwords do not match!';

const Login = () => {
    const [isToggleActive, setToggleActive] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
        signupPassword, signupRepeatPassword,
        loginEmail, loginPassword, signupEmail,
        validationMessages: { signup },
    } = state;

    const handleToggleClick = () => setToggleActive((prev) => !prev);
    const handleCloseClick = () => setToggleActive(false);
    const onHandleSubmitLoginForm = (evt) => {
        evt.preventDefault();
        console.log('Sending login request ...');
        dispatch({ type: RESET_LOGIN_FORM });
    };

    const onHandleSubmitSignupForm = (evt) => {
        evt.preventDefault();

        if (signupPassword !== signupRepeatPassword) {
            dispatch({ type: SET_SIGNUP_VALIDATION_MESSAGE, payload: signupPasswordsError });
        } else {
            console.log('Sending signup request ...');
            dispatch({ type: RESET_SIGNUP_FORM });
        }
    };

    const onSignupFormChange = ({ target: { type } }) => {
        if (type === 'password' && signup) {
            dispatch({ type: SET_SIGNUP_VALIDATION_MESSAGE, payload: null });
        }
    };

    return (
        <div className={s.root}>
            <div className={s.headerLogo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={cn(s.container, { [s.active]: isToggleActive })}>
                <div className={s.card}></div>
                <div className={s.card}>
                    <h1 className={s.title}>Login</h1>
                    <form onSubmit={onHandleSubmitLoginForm}>
                        <Input
                            className={s.inputContainer}
                            type="email"
                            id="#email"
                            label="Email"
                            onChange={({ target: { value } }) => dispatch({ type: INPUT_LOGIN_EMAIL, payload: value })}
                            value={loginEmail}
                            isRequired
                        />
                        <Input
                            className={s.inputContainer}
                            type="password"
                            id="#password"
                            label="Password"
                            onChange={({ target: { value } }) => dispatch({ type: INPUT_LOGIN_PASSWORD, payload: value })}
                            value={loginPassword}
                            isRequired
                        />
                        <div className={s.buttonContainer}>
                            <Button type="submit">
                                <span>Go</span>
                            </Button>
                        </div>

                    </form>
                </div>
                <div className={cn(s.card, s.alt)}>
                    <div className={cn(s.toggle, { [s.active]: isToggleActive })} onClick={handleToggleClick}>
                        <Pen />
                    </div>
                    <h1 className={s.title}>Register
                        <div className={s.close} onClick={handleCloseClick}></div>
                    </h1>
                    <form onSubmit={onHandleSubmitSignupForm} onChange={onSignupFormChange}>
                        <Input
                            className={s.inputContainer}
                            type="email"
                            id="#signup-email"
                            label="Email"
                            onChange={({ target: { value } }) => dispatch({ type: INPUT_SIGNUP_EMAIL, payload: value })}
                            value={signupEmail}
                            isRequired
                        />
                        <Input
                            className={s.inputContainer}
                            type="password"
                            id="#signup-password"
                            label="Password"
                            onChange={({ target: { value } }) => dispatch({ type: INPUT_SIGNUP_PASSWORD, payload: value })}
                            value={signupPassword}
                            isRequired
                        />
                        <Input
                            className={s.inputContainer}
                            type="password"
                            id="#signup-repeat-password"
                            label="Repeat Password"
                            onChange={({ target: { value } }) => dispatch({ type: INPUT_SIGNUP_REPEAT_PASSWORD, payload: value })}
                            value={signupRepeatPassword}
                            isRequired
                        />
                        <div className={s.buttonContainer}>
                            {signup && <span className={s.signupValidationMessage}>{signupPasswordsError}</span>}
                            <Button type="submit">
                                <span>Register</span>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;