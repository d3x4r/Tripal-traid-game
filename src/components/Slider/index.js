import React from 'react';
import style from './Slider.module.css';

const Slider = () => (
    <section class={style.section}>
        <div class={style.slider}>
            <div class={`${style.container} ${style.sliderContent}`}>
                <h1 class={style.header}>Wow</h1>
                <h2 class={style.subheader}>Wow.Wow.Wow</h2>
                <div class={style.call}>
                    <button class={style.button}>Wow</button>
                </div>
            </div>
        </div>
    </section>
);

export default Slider;