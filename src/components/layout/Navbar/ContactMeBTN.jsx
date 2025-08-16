import React from 'react';
import useTranslation from "../../../hooks/useTranslation"
import { useSidebar } from '../../../context/SidebarContext';

import { IoIosContact  } from "react-icons/io";

import useIsLargeScreen from '../../../hooks/useIsLargeScreen';

const ContactMeBTN = () => {
    const { t } = useTranslation();
    const { openSidebar } = useSidebar();

    const isLarge = useIsLargeScreen();

    return (
        <button className='
        bg-custom-brown-500 lg:py-2 lg:px-6 p-2 text-zinc-900 rounded-full 
        hover:bg-custom-brown-450 hover:scale-105
        transition ease-in-out duration-300
        cursor-pointer'
        onClick={openSidebar}>

            {isLarge ? <>{t("navbar.contactBtn")}</> : <IoIosContact  size={40} />}
        </button>
    )
}

export default ContactMeBTN;