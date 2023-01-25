import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Topbar } from "../../common/components/top_bar/topbar";
import { Sidebar } from "../../common/components/side_bar/side_bar";
import { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { Routes, Route } from "react-router-dom";
import { VendorOnboarding } from "../vendor/vendor_onboarding";

function LandingPage() {
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
              <Route path="/vendor-onboarding" element={<VendorOnboarding />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default LandingPage;
