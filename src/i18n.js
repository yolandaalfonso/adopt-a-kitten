import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import es from './locales/es.json'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(LanguageDetector) // ← usa el detector
    .use(initReactI18next)
    .init({
        resources: {
            es: { translation: es },
            en: { translation: en },
        },
        fallbackLng: 'es',
        detection: {
            // Aquí se define el orden y almacenamiento
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
