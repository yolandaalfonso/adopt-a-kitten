// src/context/FavoritesContext.js
import { createContext } from "react";

/**
 * Part 1 of 3 of 'Context API' (createContext, Provider, useContext)
 * This is a cornerstone of modern React applications for managing
 * global state.
 * 
 * 1. We create the 'Context' (createContext)
 * 'createContext' creates a 'hole' in our 'Component Tree' that can
 * be filled with data.
 * This is what Components will 'consume' to get the 'favorites state'.
 * It's exported alone to satisfy 'Fast Refresh rules'.
 */
export const FavoritesContext = createContext();