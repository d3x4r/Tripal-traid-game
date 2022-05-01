import { ABOUT } from '../../constants/about';
import Text from '../../components/Text';
import s from './About.module.scss';

const About = () => ABOUT.split('\n\n\n').map((text, i) => <Text key={i} className={s.text}>{text}</Text>);

export default About;