import React from 'react';
import useTranslation from '../../hooks/useTranslation';

import useIsLargeScreen from '../../hooks/useIsLargeScreen';

const Footer = () => {
    const { t } = useTranslation();
    const isLarge = useIsLargeScreen();

    const handleLinkClick = (link) => {
        window.open(link, '_blank');
    }

    return (
        <footer className='bg-zinc-900 p-4 flex flex-col lg:gap-0 gap-2 items-center text-custom-brown-100'>
            <div className='flex lg:flex-row flex-col items-center justify-between w-full lg:px-40 px-10 gap-2 lg:gap-0'>
                <div className='flex flex-col'>
                    <span className='font-bold'>{t('footer.name')}</span>
                    {isLarge && (
                        <>
                            <span>{t('home.description.student')}</span>
                            <span>{t('home.description.analyst')}</span>
                            <span>{t('home.description.developer')}</span>
                        </>
                    )}
                </div>
                <div className='flex flex-col lg:justify-start lg:items-start justify-center items-center'>
                    <span
                        className='cursor-pointer text-center'
                        onClick={() => handleLinkClick(t('contact.linkedin.link'))}>
                        <span className='font-bold'>{t('contact.linkedin.name')}: {!isLarge && <br/>} </span>
                        {t('contact.linkedin.link')}
                    </span>
                    <span 
                        className='cursor-pointer text-center' 
                        onClick={() => handleLinkClick(t('contact.github.link'))}>
                        <span className='font-bold'>{t('contact.github.name')}: {!isLarge && <br/>} </span>
                        {t('contact.github.link')}
                    </span>

                    <span className='text-center'><span className='font-bold'>{t('contact.mail.name')}: {!isLarge && <br/>} </span>{t('contact.mail.link')}</span>
                    <span className='text-center'><span className='font-bold'>{t('contact.phone.name')}: {!isLarge && <br/>} </span>{t('contact.phone.link')}</span>
                </div>
            </div>
            <p className='text-center lg:text-start lg:pb-0 pb-2'>&copy; {new Date().getFullYear()} {t('footer.copyright')} v.1.3.1</p>
        </footer>
    );
};

export default Footer;