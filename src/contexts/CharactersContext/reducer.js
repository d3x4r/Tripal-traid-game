import { LIKE_CLICK } from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case (LIKE_CLICK): {
            return {
                ...state,
                characters: state.characters.map((character) => {
                    if (character.id === action.payload) {
                        return {
                            ...character,
                            isLike: !character.isLike
                        };
                    }
                    return character;
                })
            }
        }
        default:
            return state;
    }
};
