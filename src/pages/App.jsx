import React, { useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Particles from "react-particles-js";
import styles from "./App.module.css";
import Header from "../components/Header";
import Home from "./Home";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // Dark Mode 테마 설정
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#3B82EA",
          },
          secondary: {
            main: "#05121B",
          },
          background: {
            default: "#05121B",
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Particles
        className={styles.background}
        params={{
          color: "#75A5B7",
          maxParticles: 130,
          connectParticles: true,
          responsive: [
            {
              breakpoint: 768,
              options: {
                maxParticles: 80,
              },
            },
            {
              breakpoint: 375,
              options: {
                maxParticles: 50,
              },
            },
          ],
        }}
      />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
