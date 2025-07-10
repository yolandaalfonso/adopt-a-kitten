const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = import.meta.env.VITE_CAT_API_KEY || null;

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

/**
 * Trae la información completa de un gato por su ID.
 * Incluye imagen, raza, descripción, temperamento, etc.
 * @param {string} catId - ID de la imagen del gato (por ejemplo: "4-5SzDNIL")
 * @returns {Promise<Object|null>}
 */
export const fetchCatById = async (catId) => {
    try {
        const res = await fetch(`${API_URL}/images/${catId}`, {
            headers: getHeaders()
        });
        if (!res.ok) throw new Error('Cat not found');
        return await res.json();
    } catch (error) {
        console.error(`Error fetching cat with ID "${catId}":`, error);
        return null;
    }
};