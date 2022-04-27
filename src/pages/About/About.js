import Container from '../../components/Container';
import { ABOUT } from '../../constants/about';
import Text from '../../components/Text';
import s from './About.module.scss';

const About = () => (
    <div className={s.root}>
        <Container>
            {ABOUT.split('\n\n\n').map((text, i) => <Text key={i} className={s.text}>{text}</Text>)}
        </Container>
    </div>
);

export default About;