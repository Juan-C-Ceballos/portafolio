import { useLanguage } from "../context/LanguageContext";
import translations from "../translation";

const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = Array.isArray(key) ? key : key.split('.');
    let result = translations[language];
    for (let k of keys) {
      result = result?.[k];
      if (result === undefined) return "";
    }
    return result;
  };

  return { t };
};

export default useTranslation;
