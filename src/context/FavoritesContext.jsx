// src/context/FavoritesContext.jsx

import React, {useReducer, useEffect, useContext} from 'react';
import { favoritesReducer, initialState } from '../reducers/favoritesReducer';
import { FavoritesContext } from './FavoritesContext';


// 2. We create a 'Provider Component'
//    This component will wrap parts of our application and provide the 'favorites state'.
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
    const [state, dispatch] = useReducer(favoritesReducer, initialState, init);

    // 3. Use 'useEffect' to save favorites to localStorage whenever they change.
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

    // The value provided by this context/
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

// 4. We create a custom hook for easier consumption
// This simplifies accessing the context in Components.
export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};