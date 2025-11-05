// src/context/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";

// 🎨 Theme definitions
const lightTheme = {
  mode: "light",
  background: "#FFFFFF",
  text: "#222222",
  subText: "#555555",
  primary: "#FFB347",
  gradient: ["#FFF8E1", "#FFD54F", "#FFA000"],
};

const darkTheme = {
  mode: "dark",
  background: "#121212",
  text: "#FFD700",
  subText: "#E0E0E0",
  primary: "#FF9933",
  gradient: ["#1C1C1C", "#2A2A2A", "#3B3B3B"],
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme(); // "dark" or "light"
  const [theme, setTheme] = useState(systemScheme === "dark" ? darkTheme : lightTheme);

  // Automatically detect system changes
  useEffect(() => {
    setTheme(systemScheme === "dark" ? darkTheme : lightTheme);
  }, [systemScheme]);

  // Optional toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev.mode === "dark" ? lightTheme : darkTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
