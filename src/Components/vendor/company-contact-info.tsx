import * as React from "react";
import Box from "@mui/material/Box";
import { InputLabel, Select, MenuItem, FormControl, Button } from "@mui/material/";
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
            justifyContent="space-between"
          >
            <TextField
              id="outlined-basic"
              label="Company Address"
              variant="outlined"
              sx={{ mt: 3, ml: 6, width: "75ch" }}
              
            />
            <TextField
              id="outlined-basic"
              label="Company Email"
              variant="outlined"
              sx={{ mt: 3, ml: 6, width: "75ch" }}
              InputProps={{endAdornment: <Button variant="contained">Verify</Button>}}
            />
            <TextField
              id="outlined-basic"
              label="Company Mobile No"
              variant="outlined"
              sx={{ mt: 3, ml: 6, width: "75ch" }}
              InputProps={{endAdornment: <Button variant="contained">verify</Button>}}
            />
            </Box>
          
        </React.Fragment>
      );
}