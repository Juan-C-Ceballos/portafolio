import { useLanguage } from "../../../context/LanguageContext";
import { motion } from "framer-motion";

const Language = ({ code, isActive, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer text-zinc-950 hover:font-bold hover:text-zinc-950 
                ${isActive ? 'font-bold' : 'text-zinc-800'}`}
      whileHover={{
        scale: 1.2,
        y: -2,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15
      }}
    >
      {code}
    </motion.div>
  )
}


const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'es' },
    { code: 'en' },
    { code: 'de' }
  ]

  return (
    <div className="flex flex-row gap-4">
      {languages.map(({ code }) => (
        <Language
          key={code}
          code={code.toUpperCase()}
          isActive={language === code}
          onClick={() => changeLanguage(code)}
        />
      ))}
    </div>
  );
};

export default LanguageSelector;
