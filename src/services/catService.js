const API_URL = 'https://api.thecatapi.com/v1';
// For Create React App or Vite, environment variables are injected at build time
const API_KEY = import.meta.env.VITE_CAT_API_KEY || null; // For Vite
// const API_KEY = process.env.REACT_APP_CAT_API_KEY || null; // For Create React App (uncomment if using CRA)

// Header opcional
const getHeaders = () => {
    return API_KEY ? { 'x-api-key': API_KEY } : {};
};

/**
 * Trae gatos aleatorios sin necesidad de raza.
 * @param {number} limit - Número de gatos a traer
 * @returns {Promise<Array>}
 */
export const fetchCats = async (limit = 10) => {
    try {
        const res = await fetch(`${API_URL}/images/search?limit=${limit}`, {
            headers: getHeaders()
        });
        return await res.json();
    } catch (error) {
        console.error('Error fetching cats:', error);
        return [];
    }
};

/**
 * Trae gatos aleatorios con información de raza.
 * @param {number} limit - Número de gatos
 * @returns {Promise<Array>}
 */
export const fetchCatsWithBreeds = async (limit = 10) => {
    try {
        const res = await fetch(`${API_URL}/images/search?limit=${limit}&has_breeds=1`, {
            headers: getHeaders()
        });
        return await res.json();
    } catch (error) {
        console.error('Error fetching cats with breeds:', error);
        return [];
    }
};

/**
 * Trae la lista completa de razas.
 * @returns {Promise<Array>}
 */
export const fetchBreeds = async () => {
    try {
        const res = await fetch(`${API_URL}/breeds`, {
            headers: getHeaders()
        });
        return await res.json();
    } catch (error) {
        console.error('Error fetching breeds:', error);
        return [];
    }
};

/**
 * Trae gatos de una raza específica por ID.
 * @param {string} breedId - ID de la raza (por ejemplo: "beng")
 * @param {number} limit - Número de gatos a traer
 * @returns {Promise<Array>}
 */
export const fetchCatsByBreed = async (breedId, limit = 10) => {
    try {
        const res = await fetch(`${API_URL}/images/search?limit=${limit}&breed_ids=${breedId}`, {
            headers: getHeaders()
        });
        return await res.json();
    } catch (error) {
        console.error(`Error fetching cats by breed "${breedId}":`, error);
        return [];
    }
};