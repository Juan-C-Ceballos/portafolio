import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { GrTechnology, GrProjects } from "react-icons/gr";
import { MdPermContactCalendar, MdOutlineWork } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen, mostrarNavbar }) => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        setShake((prev) => !prev);
      }, 2000);

      return () => clearInterval(interval);
    } else {
      setShake(false);
    }
  }, [isOpen]);

  return (
    <div className="bg-custom-black text-white font-montserrat p-4 relative flex items-center space-x-4">
      {/* Boton desplegable */}
      <button
        onClick={mostrarNavbar}
        className={`bg-custom-gray px-4 py-2 rounded-md z-20 
          ${!isOpen ? "transform scale-[1.0] transition-transform duration-300 hover:scale-[1.03]" : "hover:scale-[1.03]"} 
          ${shake ? "animate-shake" : ""}
        `}
      >
        <div
          className={`transition-transform duration-300 transform ${isOpen ? "rotate-90" : "rotate-0"}`}
        >
          {!isOpen ? (
            <FiMenu className="text-white" size={24} />
          ) : (
            <IoCloseOutline className="text-white" size={24} />
          )}
        </div>
      </button>

      {/*Opciones de la Navbar*/}
        <div
          className={`absolute bg-custom-gray/80 rounded-md left-[0vh] lg:left-[-10vh] flex transition-transform duration-300 transform z-10 transform-opacity transition-opacity duration-500 opacity-100
            ${isOpen ? "translate-y-[16vh] lg:translate-x-[10vh] lg:translate-y-[0vh] " : "-translate-y-full lg:-translate-x-full lg:-translate-y-[0vh] opacity-15"
            }`}
        >
          <div className="flex flex-col lg:flex-row space-y-1 lg:space-x-1 lg:space-y-0">
            <div className="lg:px-7"></div>
            <Link to="/" className="flex items-center text-white hover:bg-custom-light-gray/20 hover:scale-[1.03] rounded-lg px-5 py-2 transition-all duration-300">
              Inicio
              <FaHome className="ml-2" />
            </Link>
            <Link to="sobre-mi" className="flex items-center text-white hover:bg-custom-light-gray/20 hover:scale-[1.03] rounded-lg px-5 py-2 transition-all duration-300">
              Sobre Mí
              <IoMdPerson className="ml-2" />
            </Link>
            <Link to="tecnico" className="flex items-center text-white hover:bg-custom-light-gray/20 hover:scale-[1.03] rounded-lg px-5 py-2 transition-all duration-300">
              Tecnología
              <GrTechnology className="ml-2" />
            </Link>
            <Link to="proyectos" className="flex items-center text-white hover:bg-custom-light-gray/20 hover:scale-[1.03] rounded-lg px-5 py-2 transition-all duration-300">
              Proyectos
              <GrProjects className="ml-2" />
            </Link>
            <Link to="experiencia" className="flex items-center text-white hover:bg-custom-light-gray/20 hover:scale-[1.03] rounded-lg px-5 py-2 transition-all duration-300">
              Experiencia
              <MdOutlineWork className="ml-2" />
            </Link>
            <Link to="contacto" className="flex items-center text-white hover:bg-custom-light-gray/20 hover:scale-[1.03] rounded-lg px-5 py-2 transition-all duration-300">
              Contacto
              <MdPermContactCalendar className="ml-2" />
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
