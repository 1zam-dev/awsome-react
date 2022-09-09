import React, { useReducer } from "react";
import { initState, themeReducer } from "./themeReducer";

export const ThemeContext = React.createContext({});

export default function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initState);

  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      {children}
    </ThemeContext.Provider>
  );
}
