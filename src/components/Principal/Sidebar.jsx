import React, { useState, useEffect } from "react";
import { FiChevronsRight } from "react-icons/fi";
import CVpdfBtn from "../Botones/CVpdfBtn";
import { toggleShadow, calcularEdad } from "../../functions/funciones";
import GmailBtn from "../Botones/GmailBtn";
import InstagramBtn from "../Botones/InstagramBtn";
import LinkedinBtn from "../Botones/LinkedinBtn";
import GithubBtn from "../Botones/GithubBtn";

const Sidebar = ({ isOpen, mostrarSidebar }) => {
  const [showText, setShowText] = useState(false);
  const [isShadowActive, setIsShadowActive] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setImageOpacity(1);
    } else {
      setImageOpacity(0);
      setTimeout(() => setImageOpacity(1), 500);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 250);

      return () => clearTimeout(timer);
    } else {
      setShowText(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const clearIntervalFn = toggleShadow(setIsShadowActive, 1000);
    return clearIntervalFn;
  });

  return (
    <div
      className={`flex transition-all duration-500 h-screen bg-custom-gray
        
          ${isShadowActive ? 
            "drop-shadow-[-2px_0px_6px_rgba(243,113,43,0.7)]" 
            : 
            "drop-shadow-[-2px_0px_6px_rgba(243,113,43,0.5)]"} 
        
          ${isOpen ? 
            "w-[40vh]"
            :
            "w-[7vh]"}`}
    >
      <div className={`flex flex-col ${!isOpen ? "justify-between" : ""}`}>
        {/* Boton Sidebar */}
        <button className="text-white m-4" onClick={mostrarSidebar}>
          <FiChevronsRight
            className={`bg-custom-orange/60 hover:bg-custom-orange/45 hover:scale-[1.05] p-0.5 rounded-full transition-transform duration-300 transform ${isOpen ? "-rotate-180" : "rotate-360"}`}
            size={40}
          />
        </button>

        {/* Imagen */}
        <div className="w-full flex flex-col justify-center transition-all duration-500 transform mb-4 items-center">
          <div
            className={`overflow-hidden rounded-full transition-all hover:scale-[1.1] hover:drop-shadow-[0px_4px_6px_rgba(243,113,43,0.7)] shadow-sm duration-500 ${isOpen ? "w-[30vh] h-[30vh]" : "w-[5vh] h-[5vh] hidden sm:block"}  
              `}
          >
            <img
              src="foto juan.jpg"
              alt="Foto de Perfil"
              onClick={!isOpen ? mostrarSidebar : undefined}
              className="w-full h-full rounded-full object-cover transition-all duration-500 transform"
              style={{
                transform: isOpen ? "scale(1)" : "scale(0.7)",
                opacity: imageOpacity,
              }}
            />
          </div>

          {!isOpen && (
          <div className="text-center text-gray-300 m-1 transition-all duration-500 transform" style={{opacity: imageOpacity}}>
            J.C.C
          </div>
        )}
        </div>

        {/* Texto*/}
        {isOpen && (
          <div className="flex flex-col h-[52vh] justify-between">
            <div className={`text-white m-5 text-center transition-opacity duration-1000 ${showText ? "opacity-100" : "opacity-0"}`}>
              <h1 className="text-2xl font-bold mb-2">Juan Cruz Ceballos</h1>
              <h2 className="text-lg mb-1">Edad: {calcularEdad()}</h2>
              <h3 className="text-md text-gray-300 mb-1">
                Título: <span className="font-semibold">Analista Desarrollador Universitario de Sistemas de Información,</span>
              </h3>
              <h3 className="text-md text-gray-300 mb-1">
                Estudios: <span className="font-semibold">Estudiante de Ingeniería en Sistemas de Información</span>
              </h3>

              <CVpdfBtn />
            </div>

            <div className={`flex flex-row space-x-4 justify-center transition-opacity duration-1000 ${showText ? "opacity-100" : "opacity-0"}`}>
              <InstagramBtn />
              <LinkedinBtn />
              <GithubBtn />
              <GmailBtn />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
