import React, { useState, useEffect } from "react";

const Fondo = () => {

    const [activeEffect, setActiveEffect] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveEffect((prev) => !prev);
        }, Math.random() * (2000 - 1500) + 1500);

        return () => clearInterval(interval);
    }, [activeEffect]);

    return (
        <div className="bg-custom-black h-screen flex items-center justify-center text-white">
            <div className="hidden sm:block z-0 ">
                <img
                    src="rectangulos.png"
                    className={`absolute top-[3vh] right-[10vh] h-[55vh] md-lg:opacity-70 transition-all duration-1000 ${activeEffect ? "scale-[1.02]" : undefined}`}>
                </img>
                <img
                    src="cuadrado.png"
                    className={`absolute top-[-19.7vh] right-[21.2vh] h-[55vh] md-lg:opacity-70 scale-[0.25] transition-all duration-1000 ${!activeEffect ? "scale-[0.27]" : undefined}`}>
                </img>
                <img
                    src="cuadrado.png"
                    className={`absolute top-[-23.7vh] right-[18.9vh] h-[55vh] md-lg:opacity-70 scale-[0.16] transition-all duration-1000 ${!activeEffect ? "scale-[0.18]" : undefined}`}>
                </img>
                <img
                    src="cuadrado.png"
                    className={`absolute top-[15vh] right-[-20vh] h-[55vh] md-lg:opacity-60 scale-[0.5] transition-all duration-1000 ${activeEffect ? "scale-[0.55]" : undefined}`}>
                </img>
                <img
                    src="cuadrado.png"
                    className={`absolute top-[21vh] right-[-24vh] h-[55vh] md-lg:opacity-60 scale-[0.2] transition-all duration-1000 ${!activeEffect ? "scale-[0.22]" : undefined}`}>
                </img>
            </div>

            {/* Figuras esquina inferior izquierda*/}
            <div className="hidden sm:block z-0 ">
                <img
                    src="rectangulos.png"
                    className={`absolute bottom-[3vh] left-[0vh] h-[55vh] rotate-180 md-lg:opacity-50 scale-[0.96] transition-all duration-1000 ${!activeEffect ? "scale-[1.00]" : undefined}`}>
                </img>
                <img
                    src="cuadrado.png"
                    className={`absolute bottom-[12vh] left-[-35.5vh] h-[55vh] md-lg:opacity-70 scale-[0.3] transition-all duration-1000 ${activeEffect ? "scale-[0.32]" : undefined}`}>
                </img>
                <img
                    src="cuadrado.png"
                    className={`absolute bottom-[15vh] left-[-40vh] h-[55vh] md-lg:opacity-70 scale-[0.14] transition-all duration-1000 ${activeEffect ? "scale-[0.16]" : undefined}`}>
                </img>
                <img
                    src="cuadrado.png"
                    className={`absolute bottom-[-20vh] left-[13vh] h-[55vh] md-lg:opacity-70 scale-[0.23] transition-all duration-1000 ${!activeEffect ? "scale-[0.27]" : undefined}`}>
                </img>
                <img
                    src="cuadrado.png"
                    className={`absolute bottom-[-20.8vh] left-[17.5vh] h-[55vh] md-lg:opacity-70 scale-[0.15] transition-all duration-1000 ${!activeEffect ? "scale-[0.18]" : undefined}`}>
                </img>
            </div>
        </div>
    )
}

export default Fondo;