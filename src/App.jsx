import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/home";
import { Login } from "./components/login/login";
import { LandingPage } from "./components/landing_page/landing_page";
import "./common/styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Topbar } from "./components/landing_page/top_bar/topbar";
import { Sidebar } from "./components/landing_page/side_bar/side_bar";
import { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={isSidebar} />
            <Routes>
              {/* Header */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/dashboard" element={<LandingPage />} /> */}
              {/* Footer */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
