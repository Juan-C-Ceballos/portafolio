import React from "react";

const CVpdfBtn = () => {
    
    const descargarCVpdf = () => {
        const link = document.createElement('a');
        link.href = 'CV_Juan_Cruz_Ceballos.pdf';
        link.download = 'CV_Juan_Cruz_Ceballos.pdf';
        link.click();
    }
    
    const abrirCVpdf = () => {
        window.open('CV_Juan_Cruz_Ceballos.pdf', '_blank');
      };
    
    return (
        <button 
            className="m-3 px-8 py-1 bg-custom-red/80 text-gray-300 text-xl font-montserrat rounded-lg font-bold transform
            transition-transform duration-200 hover:drop-shadow-[0px_2px_6px_rgba(192,33,56,1)] hover:scale-[1.05]"
            onClick={abrirCVpdf}
         >
            Descargar CV
        </button>
    )
}

export default CVpdfBtn;