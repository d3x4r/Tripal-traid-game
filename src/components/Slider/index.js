import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import logo from '../../assets/logo.png'
import s from './Slider.module.css';

const Slider = () => (
    <section className={s.section}>
        <div className={s.slider}>
            <Container className={s.sliderContent}>
                <Heading level="1">Это заголовок</Heading>
                <Heading className={s.subheader} level="2" black>Wow.Wow.Wow</Heading>
                <div>
                    <img className={s.image} src={logo} alt="Logo" />
                </div>
                <div className={s.call}>
                    <button className={s.button}>Wow</button>
                </div>
            </Container>
        </div>
    </section>
);

export default Slider;