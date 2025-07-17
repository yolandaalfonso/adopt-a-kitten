// src/context/FavoritesContext.jsx

import React, {useReducer, useEffect} from 'react';
import { favoritesReducer, initialState } from '../reducers/favoritesReducer';
import { FavoritesContext } from './FavoritesContext';


/**
 * * Part 2 of 3 of 'Context API' (createContext, Provider, useContext)
 * This is a cornerstone of modern React applications for managing
 * global state.
 * 
 * 2. We create a 'PROVIDER COMPONENT'
 * This component will wrap parts of our application and provide the 'favorites state'.
 * It fills that 'hole' (File 1 of 3), making its 'value' prop available to all children
 * Components that consume the Context.
 */
export const FavoritesProvider = ({ children }) => {
    // Try to load favorites from 'localStorage' on initial render.
    // This is a common pattern for 'hydrating state' from 'persistent storage'.
    const init = () => {
        try {
            const storedFavorites = localStorage.getItem('favorites');
            // If there are 'stored favorites', parse them. Otherwise, use the initial 'state's favorites'.
            return storedFavorites ? { favorites: JSON.parse(storedFavorites) } : initialState; 
        } catch (error) {
            console.error("Failed to load favorites from localStorage: ", error);
            return initialState; // Fallback to initial state or error.
        }
    };

    // 'useReducer hook' to manage our 'favorites state'.
    // The 'init' function ensures we load from localStorage at the start.
    // It perform "lazy initialization" of state. This means the expensive 'localStorage'
    // read only happens once, when the Component mounts, preventing unnecesary re-reads on 
    // every re-render.
    const [state, dispatch] = useReducer(favoritesReducer, initialState, init);

    // 2.1. Use 'useEffect' to save favorites to localStorage whenever they change.
    // The dependency array '[state.favorites]' ensures this effect runs
    // only when the 'favorites array' within the state changes.
    useEffect(() => {
        try {
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        } catch (error) {
            console.error("Failed to save favorites to localStorage: ", error);
            // Optionally, we can inform the user or log this error more prominently.
        }
    }, [state.favorites]); // Dependency Array: re-run effect ONLY if 'state.favorites' changes.

    // The value provided by this context
    // We're providing the entire 'state' object (which contains 'favorites') and the 'dispatch' function.
    const contextValue = {
        favorites: state.favorites,
        dispatch,
    };

    return (
        <FavoritesContext.Provider value={contextValue}>
            {children}
        </FavoritesContext.Provider>
    );
};