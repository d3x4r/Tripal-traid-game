import React from 'react';
import Container from '../Container';
import s from './Header.module.css';
import logo from '../../assets/logo.png';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => (
    <header className={s.root}>
        <div className={s.header}>
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

export default Header;