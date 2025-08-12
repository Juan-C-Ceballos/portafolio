import { createContext, useState, useContext } from "react";

// Crea el contexto de idioma (sin valor)
const LanguageContext = createContext();

// Crea el provedor que envuelve componentes y provee el estado del idioma
export const LanguageProvider = ({ children }) => {

    // Crea el estado para el idioma seleccionado (inicializado en español)
    const [language, setLanguage] = useState("es");

    // Crea la función para cambiar el idioma
    const changeLanguage = (lang) => setLanguage(lang);

    // Se expone el estado y la funcion para que los hijos accedan a ellos
    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
// Se crea un Hook personalizado para consumer el contexto facilmente
export const useLanguage = () => useContext(LanguageContext);