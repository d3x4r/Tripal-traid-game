import { useEffect } from 'react';
import { Outlet, useMatch, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Container from '../Container';
import s from './Layout.module.scss';

const Layout = () => {
    const match = useMatch({ path: '/' });
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const anchor = document.getElementById(`${hash.replace('#', '')}`);
            window.addEventListener('load', () => {
                if (anchor) {
                    anchor.scrollIntoView({
                        block: 'center',
                        behavior: 'smooth'
                    });
                }
            }, { once: true })

        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return (
        <>
            <Header />
            {match ? <Outlet /> :
                <div className={s.root}>
                    <Container>
                        <Outlet />
                    </Container>
                </div>
            }
            <Footer />
        </>
    );
};

export default Layout;