import react from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import useTranslation from '../../hooks/useTranslation';

const CopyNotification = ({ text }) => {
    const { t } = useTranslation();

    return (
        <AnimatePresence>
            {text && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-8 right-8 bg-custom-brown-300 text-custom-brown-900 px-4 py-2 rounded shadow-lg z-50"
                >
                    {t('contact.copied')}: {text}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const handleCopy = (text, setCopiedText) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);

        setTimeout(() => {
            setCopiedText(null);
        }, 2000); // 2 segundos visible
    };

export default CopyNotification;
export { handleCopy };
