import React from 'react';
import useTranslation from "../../../hooks/useTranslation"
import { useSidebar } from '../../../context/SidebarContext';

const ContactMeBTN = () => {
    const { t } = useTranslation();
    const { openSidebar } = useSidebar();

    return (
        <button className='
        bg-custom-brown-500 py-2 px-6 rounded-full 
        hover:bg-custom-brown-450 hover:scale-105
        transition ease-in-out duration-300
        cursor-pointer'
        onClick={openSidebar}>

            {t("navbar.contactBtn")}
        </button>
    )
}

export default ContactMeBTN;