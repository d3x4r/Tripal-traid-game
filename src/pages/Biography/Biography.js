import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { BIO } from '../../constants/biography';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Container from '../../components/Container';
import Button from '../../components/Button';
import s from './Biography.module.scss';

const BioContent = ({ field }) => {
    switch (field.type) {
        case 'paragraph':
            return <Text className={s.paragraph}>{field.text}</Text>;
        case 'img':
            return <div className={s.imgContainer}><img src={field.src} alt="person" /></div>;
        case 'h1':
        case 'h2':
            return <Heading level={field.type[1]}>{field.text}</Heading>;
        default:
            throw new Error('Отсутствует компонент для тега:', field.type);
    }
};

const Biography = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleGoBackClick = () => navigate(-1);

    if (!BIO[id]) {
        return <Navigate to="/characters/" />;
    }

    return (
        <section className={s.root}>
            <Container>
                <div>
                    <Button black onClick={handleGoBackClick}>
                        Go Back
                    </Button>
                </div>
                {BIO[id].map((field, i) => <BioContent key={i} field={field} />)}
            </Container>
        </section>
    );
};

export default Biography;