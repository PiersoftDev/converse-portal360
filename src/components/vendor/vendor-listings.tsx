import * as React from "react";
import Box from "@mui/material/Box";

export const VendorListings = () => {
  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          mt: 5,
        }}
        noValidate
        autoComplete="off"
        display="grid"
        justifyContent="space-between"
      ></Box>
    </React.Fragment>
  );
};
