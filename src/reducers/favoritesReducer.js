// src/reducers/favoritesReducer.js

// 1. We define the 'initial state' for 'our favorites'.
//    It will be an 'empty array' when the app first load (before localStorage loads).
export const initialState = {
    favorites: [],
};

/**
 * The 'Reducer function'
 * It takes the current state and an action, and returns the new state
 * @param {Object} state - The current state
 * @param {Object} action - The current action
 * @returns {Object} - The new state
 */
export function favoritesReducer(state, action) {
    switch(action.type) {
        case 'ADD_FAVORITE': {
            // The 'payload' (action.payload) will be the 'cat object' to add.
            // We need to ensure we don't add duplicates.
            const catToAdd = action.payload;

            // (!) We check if the cat is already in favorites using  its unique ID
            // TODO: We'll asume 'id' is the unique identifier for now, but confirm this
            // when we integrate with 'fetchCatsWithBreeds'. If not, we might use 'url'.
            const isAlreadyFavorite = state.favorites.some(
                (favCat) => favCat.id === catToAdd.id
            );

            if (isAlreadyFavorite) {
                return state; // If already a favorite, return the current state without changes.
            } else {
                return {
                    ...state,
                    favorites: [...state.favorites, catToAdd],
                };
            }
        }
        case 'REMOVE_FAVORITE': {
            // The payload (action.payload) will be the cat object (or just its ID) to remove.
            const catToRemoveId = action.payload.id; // TODO: Again, assuming 'id' is unique.

            // Return a 'new state object', filtering out the cat to be removed.
            return {
                ...state,
                favorites: state.favorites.filter(
                    (favCat) => favCat.id !== catToRemoveId
                ),
            };
        }
        default: {
            // If an unknow action type is dispatched, it's a good practice to throw an error.
            // This helps in debugging and ensures that all state transitions are intentional.
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}
