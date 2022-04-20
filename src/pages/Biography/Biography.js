import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BIO } from './data';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Container from '../../components/Container';
import s from './Biography.module.scss';

const BioComponents = {
    'h1': text => <Heading level="1">{text}</Heading>,
    'h2': text => <Heading level="2">{text}</Heading>,
    'paragraph': text => <Text className={s.paragraph}>{text}</Text>,
    'img': src => <div className={s.imgContainer}><img src={src} alt="person" /></div>
};

const Biography = ({ id, onBackClick }) => {
    console.log(BIO[id]);
    return (
        <section className={s.root}>
            <Container>
                <div className={s.buttonContainer}>
                    <Button onClick={onBackClick} black>Go Back</Button>
                </div>
                {BIO[id].map((field, i) => <Fragment key={i}>{BioComponents[field.type](field.text ?? field.src)}</Fragment>)}
            </Container>
        </section>
    );
};

Biography.propTypes = {
    id: PropTypes.number.isRequired,
    onBackClick: PropTypes.func.isRequired
};

export default Biography;