import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext({
    isDark: false,
    setIsDark: (isDark: boolean) => {}
});

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    // 🔹 Inicializamos el estado directamente desde localStorage o preferencia del sistema
    const getInitialDark = () => {
        if (typeof window === "undefined") return false; // SSR
        const savedMode = localStorage.getItem("dark-mode");
        if (savedMode !== null) return savedMode === "true";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    const [isDark, setIsDark] = useState(getInitialDark);

    // 🔹 Cada vez que cambie isDark, actualizar DOM y localStorage
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("dark-mode", isDark.toString());
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
