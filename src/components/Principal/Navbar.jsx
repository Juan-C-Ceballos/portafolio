import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { GrTechnology, GrProjects } from "react-icons/gr";
import { MdPermContactCalendar } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen, mostrarNavbar }) => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        setShake((prev) => !prev);
      }, 2000); // Sacudida cada segundo

      return () => clearInterval(interval); // Limpiar el intervalo al desmontarse
    } else {
      setShake(false); // Detener la sacudida cuando el menú está abierto
    }
  }, [isOpen]);

  return (
    <div className="bg-custom-black text-white font-montserrat p-4 relative flex items-center space-x-4">
      <button
        onClick={mostrarNavbar}
        className={`bg-custom-gray px-4 py-2 rounded-md z-10 
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

      <div
        className={`absolute bg-custom-gray/80 rounded-md left-[-10vh] flex transition-transform duration-300 transform z-0 ${isOpen ? "translate-x-[10vh]" : "-translate-x-full"
          }`}
      >
        <div className="flex space-x-1">
          <div className="px-7"></div>
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
