import { TOGGLE_THEME } from "./types";

const theme = {
  light: {
    primaryColor: "#ededed",
    secondaryColor: "#cfcfcf",
    textColor: "#000",
  },
  dark: {
    primaryColor: "#212121",
    secondaryColor: "#383838",
    textColor: "#fff",
  },
};

const initState = theme.dark;

const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === theme.dark ? theme.light : theme.dark;
    default:
      throw new Error("type did not defined.");
  }
};

export { initState, themeReducer };
