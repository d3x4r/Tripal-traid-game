import PropTypes from 'prop-types';
import CharacterCards from "../../components/CharacterCards";


const Characters = ({ isPage }) => <CharacterCards isPage={isPage} />;

Characters.defaultProps = {
    isPage: false,
};

Characters.propTypes = {
    isPage: PropTypes.bool,
};

export default Characters;