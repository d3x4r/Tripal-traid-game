import { useState } from 'react';
import Heading from '../Heading';
import Container from '../Container';
import { CHARACTERS } from '../../constants/characters';
import CharacterCard from '../CharacterCard';
import s from './CharacterCards.module.scss';

const CharacterCards = () => {
    const [characters, setCharacters] = useState(CHARACTERS);

    const handleLikeClick = (id) => () => {
        setCharacters((prevCharacters) => (
            prevCharacters.map((character) => {
                if (character.id === id) {
                    return {
                        ...character,
                        isLike: !character.isLike
                    };
                }
                return character;
            })
        ));
    };

    return (
        <section className={s.cardSection}>
            <Container>
                <div className={s.cardTitle}>
                    <Heading level="1" backLine>Marvel Cards</Heading>
                    <Heading level="2">Collect your best five</Heading>
                </div>
                <div className={s.cardWrap}>
                    {characters.map((character) => (
                        <div className={s.card} key={character.id}>
                            <CharacterCard
                                id={character.id}
                                name={character.name}
                                description={character.description}
                                humanName={character.humanName}
                                src={character.thumbnail.path}
                                isLike={character.isLike}
                                onLikeClick={handleLikeClick(character.id)}
                            />
                        </div>))}
                </div>
            </Container>
        </section>
    );
};

export default CharacterCards;