import { CssBaseline, Box } from "@mui/material";
import { Topbar } from "../../common/components/top_bar/topbar";
import { Sidebar } from "../../common/components/side_bar/side_bar";
import "react-pro-sidebar/dist/css/styles.css";
import VerticalLinearStepper from "./vendor_onboarding_form";

export const VendorOnboarding = () => {
  return (
    <>
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
    </>
  );
};
