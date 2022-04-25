import { useState, useEffect } from 'react';
import cn from 'classnames';
import Container from '../Container';
import s from './Header.module.scss';
import logo from '../../assets/logo.png';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
const TRIGGER_SIZE = 60;

const Header = () => {
    const [isHeaderSmall, setHeaderSmall] = useState(false);

    useEffect(() => {
        const onScrollMove = () => setHeaderSmall(window.scrollY > TRIGGER_SIZE);

        window.addEventListener('scroll', onScrollMove);
        return () => window.removeEventListener('scroll', onScrollMove);
    }, []);

    return (
        <header className={s.root}>
            <div className={cn(s.header, { [s.small]: isHeaderSmall })}>
                <Container className={s.content_wrapper}>
                    <div className={s.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className={s.nav}>
                        {MENU.map((name) => <li key={name}><a href="#">{name}</a></li>)}
                    </ul>
                </Container>
            </div>
        </header>
    );
};

export default Header;