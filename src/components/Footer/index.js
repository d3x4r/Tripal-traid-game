import React from 'react';
import style from './Footer.module.css';

const Footer = () => (
    <footer class={style.root}>
        <div class={style.container}>
            <div class={style.footerWrap}>
                Coded with
                <span class={style.heart}></span>
                by You
            </div>
        </div>
    </footer>
);

export default Footer;