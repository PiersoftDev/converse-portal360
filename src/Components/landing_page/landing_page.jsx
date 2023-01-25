import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Topbar } from "./top_bar/topbar";
import { Sidebar } from "./side_bar/side_bar";
import { useState } from "react";

export const LandingPage = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar}/>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
   
    
  );
};
