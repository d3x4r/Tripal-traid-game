import { useState } from 'react';
import cn from 'classnames';
import { ReactComponent as Pen } from './icon-pen.svg'
import logo from './logo.png';
import s from './Login.module.scss';

const Login = () => {
    const [isToggleActive, setToggleActive] = useState(false);

    const handleToggleClick = () => setToggleActive((prev) => !prev);
    const handleCloseClick = () => setToggleActive(false);

    return (
        <>
            <div className={s.headerLogo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={cn(s.container, { [s.active]: isToggleActive})}>
                <div className={s.card}></div>
                <div className={s.card}>
                    <h1 className={s.title}>Login</h1>
                    <form>
                        <div className={s.inputContainer}>
                            <input type="email" id="#email" required="required" />
                            <label htmlFor="#email">Email</label>
                            <div className={s.bar}></div>
                        </div>
                        <div className={s.inputContainer}>
                            <input type="password" id="#password" required="required" />
                            <label htmlFor="#password">Password</label>
                            <div className={s.bar}></div>
                        </div>
                        <div className={s.buttonContainer}>
                            <button><span>Go</span></button>
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
                    <form>
                        <div className={s.inputContainer}>
                            <input type="email" id="#signup-email" required="required" />
                            <label htmlFor="#signup-email">Email</label>
                            <div className={s.bar}></div>
                        </div>
                        <div className={s.inputContainer}>
                            <input type="password" id="#signup-password" required="required" />
                            <label htmlFor="#signup-password">Password</label>
                            <div className={s.bar}></div>
                        </div>
                        <div className={s.inputContainer}>
                            <input type="password" id="#signup-repeat-password" required="required" />
                            <label htmlFor="#signup-repeat-password">Repeat Password</label>
                            <div className={s.bar}></div>
                        </div>
                        <div className={s.buttonContainer}>
                            <button><span>Register</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;