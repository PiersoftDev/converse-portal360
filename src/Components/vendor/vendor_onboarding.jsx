import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { Topbar } from "../../common/components/top_bar/topbar";
import { Sidebar } from "../../common/components/side_bar/side_bar";
import { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import VerticalLinearStepper from "./vendor_onboarding_form";

export const VendorOnboarding = () => {
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
            <Box m="30px"><VerticalLinearStepper/></Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
