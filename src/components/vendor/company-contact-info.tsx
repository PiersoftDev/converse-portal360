import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material/";
import TextField from "@mui/material/TextField";

export const CompanyContactInfo = () => {
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
        justifyContent="center"
      >
        <TextField id="outlined-basic" label="Company Email" variant="outlined" required sx={{ mt: 3, width: "75ch" }} InputProps={{ endAdornment: <Button variant="contained">Verify</Button> }} />
        <TextField id="outlined-basic" label="Company Mobile No" variant="outlined" required sx={{ mt: 3, width: "75ch" }} InputProps={{ endAdornment: <Button variant="contained">verify</Button> }} />
        <TextField id="outlined-basic" label="company Address Lane 1" variant="outlined" required sx={{ mt: 3, width: "75ch" }} />
        <TextField id="outlined-basic" label="company Address Lane 2" variant="outlined" required sx={{ mt: 3, width: "75ch" }} />
        <TextField id="outlined-basic" label="city" variant="outlined" required sx={{ mt: 3, width: "40ch" }} />
        <TextField id="outlined-basic" label="state" variant="outlined" required sx={{ mt: 3, width: "40ch" }} />
        <TextField id="outlined-basic" label="postal Code" variant="outlined" required sx={{ mt: 3, width: "30ch" }} />
        <TextField id="outlined-basic" label="country" variant="outlined" required sx={{ mt: 3, width: "30ch" }} />
      </Box>
    </React.Fragment>
  );
};
