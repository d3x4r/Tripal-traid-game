import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';
import Container from '../Container';
import s from './Header.module.scss';
import logo from '../../assets/logo.png';

const MENU = [{ name: 'Main', path: '/' }, { name: 'Characters', path: '/characters' }, { name: 'About Game', path: '/about' }, { name: 'Contacts', path: '/contacts' }];
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
                    <Link to="/" className={s.logo}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <ul className={s.nav}>
                        {
                            MENU.map(({ name, path }) => (
                                <li key={name}>
                                    <NavLink className={({ isActive }) => isActive ? s.active : null} to={path}>
                                        {name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </Container>
            </div>
        </header>
    );
};

export default Header; 