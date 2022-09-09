import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function useThemeStore() {
  const [state, dispatch] = useContext(ThemeContext);
  return [state, dispatch];
}
