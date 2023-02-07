import * as React from "react";
import Box from "@mui/material/Box";
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material/";
import { useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";

export const CompanyDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

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
          label="Company Name"
          variant="outlined"
          required
          sx={{ mt: 3, ml: 6, width: "75ch" }}
          {...register("companyName")}
        />
        <TextField
          id="outlined-basic"
          label="Company Type"
          variant="outlined"
          required
          sx={{ mt: 3, ml: 6, width: "75ch" }}
        />
        <TextField
          id="outlined-basic"
          label="Company URL"
          variant="outlined"
          sx={{ mt: 3, ml: 6, width: "75ch" }}
        />
        <TextField
          id="outlined-basic"
          label="Service"
          variant="outlined"
          required
          sx={{ mt: 3, ml: 6, width: "75ch" }}
        />
        <TextField
          id="outlined-basic"
          label="Enter Store Description"
          variant="outlined"
          required
          sx={{ mt: 3, ml: 6, width: "75ch" }}
        />

        <Box sx={{ mt: 3, ml: 6, width: "75ch" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Company Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Company Type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Non-IT">Non-IT</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      
    </React.Fragment>
  );
};
