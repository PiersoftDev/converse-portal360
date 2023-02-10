import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Topbar } from "../../common/components/top_bar/topbar";
import { Sidebar } from "../../common/components/side_bar/side_bar";
import { useState, useContext } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { UserContext } from "../login/login_form";

function LandingPage() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const user = useContext(UserContext);
  console.log("Inside landing page");
  console.log({ user });

  return {
    ...(user !== undefined ? (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    ) : (
      <div></div>
    )),
  };
}

export default LandingPage;
