import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import Heading from '../Heading';
import Text from '../Text';
import { ReactComponent as Like } from './assets/heart.svg';
import s from './CharacterCard.module.scss';

const CharacterCard = ({
    id,
    name,
    description,
    humanName,
    src,
    isLike,
    onLikeClick,
}) => {
    return (
        <div className={s.root}>
            <img className={s.cardImage} src={src} alt={name} />
            <div className={s.cardDetails}>
                <Heading className={s.cardName} level="2">
                    {name}
                </Heading>
                <Heading className={s.cardHumanName} level="4">
                    {humanName}
                </Heading>
                <Text className={s.cardDescription}>
                    {description}
                </Text>
                <div className={s.cardMeta}>
                    <div
                        className={cn(s.like, { [s.active]: isLike })}
                        onClick={onLikeClick}
                    >
                        <Like />
                    </div>
                    <div className={s.readBio}>
                        <Link to={`/characters/${id}`}>Read bio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

CharacterCard.defaultProps = {
    isLike: false,
};

CharacterCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    humanName: PropTypes.string,
    src: PropTypes.string,
    isLike: PropTypes.bool,
    onLikeClick: PropTypes.func,
};

export default CharacterCard;