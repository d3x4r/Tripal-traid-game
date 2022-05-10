import Heading from '../../components/Heading';
import Text from '../../components/Text';
import s from './Contacts.module.scss';

const Contacts = () => (
    <>
        <Heading>Albert Einstein</Heading>
        <div className={s.imageContainer}>
            <img className={s.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/1024px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg" alt="about" />
        </div>
        <Text className={s.text}>
            Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[6] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (listen); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist,[7] widely acknowledged to be one of the greatest and most influential physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics. Relativity and quantum mechanics are together the two pillars of modern physics.[3][8] His mass–energy equivalence formula E = mc2, which arises from relativity theory, has been dubbed "the world's most famous equation".[9] His work is also known for its influence on the philosophy of science.[10][11] He received the 1921 Nobel Prize in Physics "for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect",[12] a pivotal step in the development of quantum theory. His intellectual achievements and originality resulted in "Einstein" becoming synonymous with "genius".[13]
        </Text>
        <Text className={s.text}>
            In 1905, a year sometimes described as his annus mirabilis ('miracle year'), Einstein published four groundbreaking papers.[14] These outlined the theory of the photoelectric effect, explained Brownian motion, introduced special relativity, and demonstrated mass-energy equivalence. Einstein thought that the laws of classical mechanics could no longer be reconciled with those of the electromagnetic field, which led him to develop his special theory of relativity. He then extended the theory to gravitational fields; he published a paper on general relativity in 1916, introducing his theory of gravitation. In 1917, he applied the general theory of relativity to model the structure of the universe.[15][16] He continued to deal with problems of statistical mechanics and quantum theory, which led to his explanations of particle theory and the motion of molecules. He also investigated the thermal properties of light and the quantum theory of radiation, which laid the foundation of the photon theory of light.
        </Text>
        <Text className={s.text}>
            However, for much of the later part of his career, he worked on two ultimately unsuccessful endeavors. First, despite his great contributions to quantum mechanics, he opposed what it evolved into, objecting that nature "does not play dice".[17] Second, he attempted to devise a unified field theory by generalizing his geometric theory of gravitation to include electromagnetism. As a result, he became increasingly isolated from the mainstream of modern physics.
        </Text>
    </>
);

export default Contacts;