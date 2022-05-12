import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InputDetailsForm from "./pages/InputDetailsForm";
import appReducer from "./context/AppReducer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Questions from "./pages/Questions";
import ResultsPage from "./pages/Results";
import AuthLayout from "./components/AuthLayout";

const initContextData = { answers: {} };
const AppContext: any = React.createContext([]);

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      // main: "#5893df",
      main: "#e6c300",
    },
    secondary: {
      main: "#cc0066",
    },
    tertiary: {
      main: "#00e6e6",
    },
    background: {
      default: "#192231",
      paper: "#24344d",
    },
    text: {
      primary: "#fff",
    },
  },

  typography: {
    allVariants: {
      fontFamily: "Open Sans",
      fontWeight: "bold",
    },
    body1: {
      fontWeight: "normal",
    },
    button: {
      fontWeight: "bold",
    },
  },
});

const App = () => {
  const [appData, dispatchAppData] = useReducer(appReducer, initContextData);

  return (
    <AppContext.Provider value={[appData, dispatchAppData]}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<InputDetailsForm />} path="/" />
            <Route element={<Questions />} path="/questions" />
            <Route element={<AuthLayout />}>
              <Route element={<ResultsPage />} path="/results" />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
export { AppContext };
