import { CssBaseline, Box } from "@mui/material";
import { Topbar } from "../../common/components/top_bar/topbar";
import { Sidebar } from "../../common/components/side_bar/side_bar";
import "react-pro-sidebar/dist/css/styles.css";
import VerticalLinearStepper from "./vendor_onboarding_form";
import { ColorModeContext, useMode } from "../../theme";
import { ThemeProvider } from "@mui/material";

export const VendorOnboarding = () => {
  const [theme, colorMode] = useMode();

  return (
    <>
      {/* <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}> */}
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Box m="30px">
                <VerticalLinearStepper />
              </Box>
            </main>
          </div>
        {/* </ThemeProvider>
      </ColorModeContext.Provider> */}
    </>
  );
};
