import React from 'react';
import style from './Header.module.css';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => (
    <header class={style.root}>
        <div class={style.header}>
            <div class={style.container}>
                <div class={style.logo}></div>
                <ul class={style.nav}>
                    {MENU.map((name) => <li><a href="#">{name}</a></li>)}
                </ul>
            </div>
        </div>
    </header>
);

export default Header;