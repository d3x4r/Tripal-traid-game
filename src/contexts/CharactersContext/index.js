import React, { createContext, useReducer } from 'react';
import { CHARACTERS } from '../../constants/characters';
import { reducer } from './reducer';

export const CharactersLikesContext = createContext(null);

export const CharactersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { characters: CHARACTERS });
    return (
        <CharactersLikesContext.Provider value={{ state, dispatch }}>
            {children}
        </CharactersLikesContext.Provider>
    );
};

export * from './actions';
