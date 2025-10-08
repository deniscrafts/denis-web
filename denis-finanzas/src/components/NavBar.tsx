import { useState, useContext } from 'react';
import { FaSun, FaMoon } from "react-icons/fa6";
import ThemeContext from '../Context/ThemeContext';
import HeroImage from './smallComponents/HeroImage';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {isDark, setIsDark} = useContext(ThemeContext);

    const toggleDarkMode = () => {
        const html = document.documentElement;
        html.classList.toggle("dark");
        setIsDark(html.classList.contains("dark"));
    };
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <nav className="mt-10 fixed top-0 left-1/2 -translate-x-1/2 w-11/12 max-w-7xl z-50 rounded-4xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center 
        bg-[rgba(var(--secondaryBackground),0.7)] shadow-md rounded-xl backdrop-blur-sm ">
            <div className="items-center justify-center flex sm:hidden">
                <HeroImage size={50} />
            </div>
            <div className="text-2xl font-bold text-[rgba(var(--branding))]">DenisFinanzas</div>

            <div className="hidden md:flex items-center ml-auto space-x-6 mr-10">
                <a href="#hero" className="text-[rgba(var(--secondaryText))] hover:text-[rgba(var(--secondaryBranding))] transition">Inicio</a>
                <a href="#whoami" className="text-[rgba(var(--secondaryText))] hover:text-[rgba(var(--secondaryBranding))] transition">¿Quien soy?</a>
                <a href="#about" className="text-[rgba(var(--secondaryText))] hover:text-[rgba(var(--secondaryBranding))] transition">Sobre la enciclopedia</a>
                <a href="#coaching" className="text-[rgba(var(--secondaryText))] hover:text-[rgba(var(--secondaryBranding))] transition">Asesorías</a>
                <a href="#featured" className="text-[rgba(var(--secondaryText))] hover:text-[rgba(var(--secondaryBranding))] transition">Mi contenido</a>
                <a href="#notgonnalearn" className="text-[rgba(var(--secondaryText))] hover:text-[rgba(var(--secondaryBranding))] transition">¿Qué no aprenderás?</a>
                <p className="text-[rgba(var(--secondaryText))] font-bold">|</p>
                <a href="#joincommunity" className="text-[rgba(var(--secondaryText))] hover:text-[rgba(var(--secondaryBranding))] transition">Únete</a>      
            </div>


            {/* Icono modo oscuro / claro con animación */}
            <div
            onClick={toggleDarkMode}
            className="cursor-pointer transition-transform duration-300 ease-in-out
                        hover:scale-110 hover:rotate-12
                        active:scale-90 active:rotate-0"
            >
            {isDark ? 
                <FaSun size={24} color="rgba(var(--secondaryText))" /> :
                <FaMoon size={24} color="rgba(var(--secondaryText))" />
            }
            </div>

            <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none text-[rgba(var(--mainText))]">
                {isOpen ? '✖' : '☰'}
            </button>
            </div>
        </div>

        {isOpen && (
            <div className="md:hidden bg-[rgba(var(--secondaryBackground),0.9)] backdrop-blur-sm rounded-b-xl shadow-md">
            <a href="#hero" className="block px-4 py-2 text-[rgba(var(--mainText))]" onClick={toggleMenu}>Inicio</a>
            <a href="#features" className="block px-4 py-2 text-[rgba(var(--mainText))]" onClick={toggleMenu}>Características</a>
            <a href="#about" className="block px-4 py-2 text-[rgba(var(--mainText))]" onClick={toggleMenu}>Sobre nosotros</a>
            <a href="#contact" className="block px-4 py-2 text-[rgba(var(--mainText))]" onClick={toggleMenu}>Contacto</a>
            </div>
        )}
        </nav>
    );
};

export default Navbar;
