import React, { useState } from "react";
import "@fontsource/montserrat";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // Importar para las transiciones

import Sidebar from "./components/Principal/Sidebar";
import Navbar from "./components/Principal/Navbar";

import Inicio from "./components/Secciones/Inicio/Inicio";
import SobreMi from "./components/Secciones/SobreMi/SobreMi";
import Tecnico from "./components/Secciones/Tecnico/Tecnico";
import ResumenProyectos from "./components/Secciones/Proyectos/ResumenProyectos";
import Contacto from "./components/Secciones/Contacto/Contacto";

const App = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Funciones para manejar el estado de la Navbar y Sidebar
  const mostrarNavbar = () => {
    setNavbarOpen((prevState) => !prevState);
  };

  const mostrarSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
      <div
        className="flex h-screen font-montserrat transition-all duration-300 overflow-hidden"
      >
        <div className="flex-1">
          <Navbar isOpen={navbarOpen} mostrarNavbar={mostrarNavbar} />

          <TransitionGroup className="flex-1 bg-custom-black">
            <CSSTransition key={location.key} timeout={500} classNames="fade">
              <div>
                <Routes location={location}>
                  <Route path="/#" element={<Inicio />} />
                  <Route path="/sobre-mi" element={<SobreMi />} />
                  <Route path="/tecnico" element={<Tecnico />} />
                  <Route path="/proyectos" element={<ResumenProyectos />} />
                  <Route path="/contacto" element={<Contacto />} />
                </Routes>
              </div>
            </CSSTransition>
          </TransitionGroup>

        </div>
        <div>
          <Sidebar isOpen={sidebarOpen} mostrarSidebar={mostrarSidebar} />
        </div>
      </div>
  );
};

export default App;
