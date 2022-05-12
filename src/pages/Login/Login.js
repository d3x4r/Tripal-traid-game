import { useState, useReducer } from 'react';
import cn from 'classnames';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { reducer } from './reducer';
import { ReactComponent as Pen } from './icon-pen.svg'
import logo from './logo.png';
import s from './Login.module.scss';
import {
    INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD, INPUT_SIGNUP_EMAIL,
    INPUT_SIGNUP_PASSWORD, INPUT_SIGNUP_REPEAT_PASSWORD, RESET_LOGIN_FORM,
    RESET_SIGNUP_FORM
} from './actions';

const initialState = {
    loginEmail: '',
    loginPassword: '',
    signupEmail: '',
    signupPassword: '',
    signupRepeatPassword: '',
};

const Login = () => {
    const [isToggleActive, setToggleActive] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleToggleClick = () => setToggleActive((prev) => !prev);
    const handleCloseClick = () => setToggleActive(false);
    const onHandleSubmitLoginForm = (evt) => {
        evt.preventDefault();
        console.log('Sending login request ...')
        dispatch({ type: RESET_LOGIN_FORM });
    };

    const onHandleSubmitSignupForm = (evt) => {
        evt.preventDefault();
        console.log('Sending signup request ...')
        dispatch({ type: RESET_SIGNUP_FORM });
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
                            value={state.loginEmail}
                            isRequired
                        />
                        <Input
                            className={s.inputContainer}
                            type="password"
                            id="#password"
                            label="Password"
                            onChange={({ target: { value } }) => dispatch({ type: INPUT_LOGIN_PASSWORD, payload: value })}
                            value={state.loginPassword}
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
                    <form onSubmit={onHandleSubmitSignupForm}>
                        <Input
                            className={s.inputContainer}
                            type="email"
                            id="#signup-email"
                            label="Email"
                            onChange={({ target: { value } }) => dispatch({ type: INPUT_SIGNUP_EMAIL, payload: value })}
                            value={state.signupEmail}
                            isRequired
                        />
                        <Input
                            className={s.inputContainer}
                            type="password"
                            id="#signup-password"
                            label="Password"
                            onChange={({ target: { value } }) => dispatch({ type: INPUT_SIGNUP_PASSWORD, payload: value })}
                            value={state.signupPassword}
                            isRequired
                        />
                        <Input
                            className={s.inputContainer}
                            type="password"
                            id="#signup-repeat-password"
                            label="Repeat Password"
                            onChange={({ target: { value } }) => dispatch({ type: INPUT_SIGNUP_REPEAT_PASSWORD, payload: value })}
                            value={state.signupRepeatPassword}
                            isRequired
                        />
                        <div className={s.buttonContainer}>
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