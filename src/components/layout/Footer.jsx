import React from 'react';
import useTranslation from '../../hooks/useTranslation';


const Footer = () => {
    const { t } = useTranslation();

    const handleLinkClick = (link) => {
        window.open(link, '_blank');
    }

    return (
        <footer className='bg-zinc-900 p-4 flex flex-col items-center text-custom-brown-100'>
            <div className='flex flex-row items-center justify-between w-full px-40'>
                <div className='flex flex-col'>
                    <span className='font-bold'>{t('footer.name')}</span>
                    <span>{t('home.description.student')}</span>
                    <span>{t('home.description.analyst')}</span>
                    <span>{t('home.description.developer')}</span>
                </div>
            <div className='flex flex-col'>
                <span 
                    className='cursor-pointer'
                    onClick={() => handleLinkClick(t('contact.linkedin.link'))}>
                        <span className='font-bold'>{t('contact.linkedin.name')}: </span>
                        {t('contact.linkedin.link')}
                </span>
                <span className='cursor-pointer' onClick={() => handleLinkClick(t('contact.github.link'))}>
                    <span className='font-bold'>{t('contact.github.name')}: </span>
                    {t('contact.github.link')}
                </span>
                
                <span><span className='font-bold'>{t('contact.mail.name')}: </span>{t('contact.mail.link')}</span>
                <span> <span className='font-bold'>{t('contact.phone.name')}: </span>{t('contact.phone.link')}</span>
            </div>
        </div>
        <p>&copy; {new Date().getFullYear()} {t('footer.copyright')} v.1.0.0</p>
    </footer>
    );
};

export default Footer;