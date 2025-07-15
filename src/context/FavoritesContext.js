// src/context/FavoritesContext.js
import { createContext } from "react";

/**
 * 1. We create the 'Context'.
 * 'createContext' creates a 'hole' in our 'Component Tree' that can
 * be filled with data.
 * This is what Components will 'consume' to get the 'favorites state'.
 * It's exported alone to satisfy 'Fast Refresh rules'.
 */
export const FavoritesContext = createContext();