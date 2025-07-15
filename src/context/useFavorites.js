// src/context/useFavorites.js
import { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";

/**
 * * Part 3 of 3 of 'Context API' (createContext, Provider, useContext)
 * This is a cornerstone of modern React applications for managing
 * global state.
 * 
 * This is a 'Custom Hook' that allows a 'Functional Component'
 * to read the 'context value', to consume the 'FavoritesContext'.
 * This simplifies accessing the 'context' in Components.
 * It improves 'code readability' and 'reusability'.
 * This is a common pattern for making 'Context Consumption' cleaner.
 * This Hook is exported alone to satisfy Fast Refresh rules.
 */
export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};