import React, { useState, useEffect } from "react";

import GmailBtn from "../../Botones/GmailBtn";
import InstagramBtn from "../../Botones/InstagramBtn";
import LinkedinBtn from "../../Botones/LinkedinBtn";
import GithubBtn from "../../Botones/GithubBtn";

import { VscChevronRight } from "react-icons/vsc";
import CVpdfBtn from "../../Botones/CVpdfBtn";

const Inicio = () => {
    const [copied, setCopied] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState({
        image: false
    });

    const [finished, setFinished] = useState(false);

    const [activeEffect, setActiveEffect] = useState(false);

    useEffect(() => {
        const toggleEffect = () => {
            if (!hovered.image) {
                setActiveEffect((prev) => !prev);
            }
        };

        const interval = setInterval(() => {
            toggleEffect();
        }, Math.random() * (2000 - 1500) + 1500);

        return () => clearInterval(interval);
    }, [hovered.image, activeEffect]);


    useEffect(() => {
        const timer = setTimeout(() => {
            setFinished(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleCopyClick = (text) => {
        navigator.clipboard.writeText(text).then(
            () => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 1000);
            }
        ).catch((error) => {
            console.log(error);
        });
    };


    return (
        <div className="bg-custom-black min-h-screen flex items-start md-lg:items-center text-white overflow-y-auto">
            {/* Figuras esquina superior derecha */}
            <div className="hidden sm:block z-0">
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
            <div className="hidden sm:block z-0">
                <img
                    src="rectangulos.png"
                    className={`absolute bottom-[3vh] left-[0vh] h-[55vh] rotate-180 md-lg:opacity-50 transition-all duration-1000 ${!activeEffect ? "scale-[1.02]" : undefined}`}>
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

            {copied && (
                <div
                    className="absolute bg-custom-orange/80 text-white text-sm py-1 px-3 rounded-lg transition-all opacity-80"
                    style={{
                        top: cursorPosition.y - 30,
                        left: cursorPosition.x - 60,
                        transition: "opacity 0.5s ease-out",
                    }}
                >
                    ¡Texto copiado!
                </div>
            )}

            <div className="flex flex-col justify-center md-lg:grid z-10 md-lg:grid-cols-[0.4fr,2fr,0.1fr,2fr,1fr,1fr] md-lg:grid-rows-[6fr,1fr] md-lg:gap-4 ">
                <div className="md-lg:col-start-2 flex flex-col items-center md-lg:row-start-1">
                    <div
                        className={`md-lg:h-[50vh] md-lg:w-[50vh] h-[20vh] w-[20vh] m-4 transition-all duration-500 hover:scale-[1.05] hover:drop-shadow-[0px_4px_6px_rgba(243,113,43,0.7)]
                            ${activeEffect && !hovered.image ? "drop-shadow-[0px_2px_10px_rgba(243,113,43,0.7)]" : undefined}`}
                        onMouseEnter={() => setHovered((prev) => ({ ...prev, image: true }))}
                        onMouseLeave={() => setHovered((prev) => ({ ...prev, image: false }))}
                    >
                        <img
                            src="fotoJuan.jpg"
                            alt="Foto de Perfil"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div className="flex flex-col p-4 space-y-2 bg-custom-gray/30 rounded-[2vh] md-lg:w-[10vh] 
                    transition-all duration-1000 ease-in-out md-lg:hover:w-[40vh] hover:duration-700 hover:ease-in-out items-center"
                    >
                        <div className="md-lg:hidden flex flex-row items-center justify-center space-x-[1vh]">
                            <LinkedinBtn onMouseEnter={() => handleMouseEnter("linkedin")} />
                            <GithubBtn onMouseEnter={() => handleMouseEnter("github")} />
                            <InstagramBtn onMouseEnter={() => { handleMouseEnter("instagram") }} />
                            <GmailBtn onMouseEnter={() => handleMouseEnter("gmail")} />
                        </div>

                        <div className="hidden md-lg:block flex md-lg:flex-col flex-row items-center md-lg:space-y-4 justify-center">
                            <div
                                className="flex flex-row items-center justify-center group relative space-x-6"
                                onMouseMove={handleMouseMove}
                            >
                                <LinkedinBtn onMouseEnter={() => handleMouseEnter("linkedin")} />
                                <span
                                    className="hidden group-hover:opacity-100 hover:scale-[1.03] transition-all duration-200 cursor-pointer text-ellipsis whitespace-nowrap overflow-hidden"
                                    onClick={() => handleCopyClick("Juan Cruz Ceballos")}

                                >
                                    Juan Cruz Ceballos
                                </span>
                            </div>
                            <div
                                className="flex flex-row items-center justify-center group relative space-x-6"
                                onMouseMove={handleMouseMove}
                            >
                                <GithubBtn onMouseEnter={() => handleMouseEnter("github")} />
                                <span
                                    className="hidden group-hover:opacity-100 hover:scale-[1.03] transition-all duration-200 cursor-pointer text-ellipsis whitespace-nowrap overflow-hidden"
                                    onClick={() => handleCopyClick("Juan-C-Ceballos")}

                                >
                                    Juan-C-Ceballos
                                </span>
                            </div>
                            <div
                                className="flex flex-row items-center justify-center group relative space-x-6"
                                onMouseMove={handleMouseMove}
                            >
                                <InstagramBtn onMouseEnter={() => { handleMouseEnter("instagram") }} />
                                <span
                                    className="hidden group-hover:opacity-100 hover:scale-[1.03] transition-all duration-200 cursor-pointer text-ellipsis whitespace-nowrap overflow-hidden"
                                    onClick={() => handleCopyClick("@juan_cruz_ceballos")}

                                >
                                    @juan_cruz_ceballos
                                </span>
                            </div>
                            <div
                                className="flex flex-row items-center justify-center group relative space-x-6"
                                onMouseMove={handleMouseMove}
                            >
                                <GmailBtn onMouseEnter={() => handleMouseEnter("gmail")} />
                                <span
                                    className="hidden group-hover:opacity-100 hover:scale-[1.03] transition-all duration-200 cursor-pointer text-ellipsis whitespace-nowrap overflow-hidden"
                                    onClick={() => handleCopyClick("juancruzceballos0@gmail.com")}

                                >
                                    juancruzceballos0@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md-lg:col-start-4 md-lg:col-end-6 md-lg:row-start-1 flex flex-col md-lg:grid md-lg:grid-rows-[3.5fr,2.5fr]">
                    <div className="md-lg:row-span-1 md-lg:row-start-1 bg-custom-gray/30 rounded-[2vh] flex flex-col justify-end p-5 items-start md-lg:text-6xl m-4 font-semibold overflow-hidden relative">
                        <span
                            className={`typing-title ${finished ? "finished" : undefined} text-white`}>
                            Juan Cruz Ceballos
                        </span>
                    </div>

                    <div className="md-lg:row-span-1 md-lg:row-start-2 flex flex-col justify-start text-start overflow-y-auto">
                        <div className="bg-custom-gray/30 rounded-[2vh] px-6 py-10 m-4 ">
                            <div className="flex flex-row items-center space-x-2 mb-2">
                                <VscChevronRight className="text-xl flex-none" />
                                <span>Soy Analista en Sistemas de Información, y además me gustan mucho los videojuegos, el vóley y dibujar.</span>
                            </div>
                            <div className="flex flex-row items-center space-x-2">
                                <VscChevronRight className="text-xl flex-none" />
                                <span>Me interesa tanto el desarrollo Frontend como Backend, pero sé que aún me queda mucho por aprender, y eso me motiva a seguir explorando en el mundo del desarrollo.</span>
                            </div>
                        </div>
                    </div>
                    <CVpdfBtn />
                </div>
            </div>
        </div >
    );
};

export default Inicio;
