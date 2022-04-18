import Container from '../Container';
import s from './Footer.module.scss';

const Footer = () => (
    <footer className={s.root}>
        <Container>
            <div className={s.footerWrap}>
                Coded with
                <span className={s.heart}></span>
                by You
            </div>
        </Container>
    </footer>
);

export default Footer;