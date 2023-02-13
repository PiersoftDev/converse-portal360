import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material/";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { VendorContext, UpdateVendorContext } from "../../context-config";
import { debounce } from "../../common/helpers/debounce";

export const CompanyKYC = () => {
  const vendorDetails = useContext(VendorContext);
  const updateVendorDetails = useContext(UpdateVendorContext);

  let { gstNumber, aadhaarNumber } = vendorDetails?.kyc;

  const setValue = debounce((e: any) => {
    const { name: key, value } = e.target;
    const kyc = { ...vendorDetails.kyc };
    kyc[key] = value;
    updateVendorDetails({
      kyc: kyc,
    });
  });

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
        <TextField
          id="outlined-basic"
          label="GST Number"
          variant="outlined"
          name="gstNumber"
          required
          defaultValue={gstNumber}
          sx={{ mt: 3, width: "75ch" }}
          onChange={setValue}
          error={!gstNumber?.length}
          helperText={!gstNumber?.length ? "GSTIN cannot be empty" : ""}
          InputProps={{
            endAdornment: <Button variant="contained">Verify</Button>,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Company Phone Number"
          variant="outlined"
          name="aadhaarNumber"
          required
          defaultValue={aadhaarNumber}
          sx={{ mt: 3, width: "75ch" }}
          onChange={setValue}
          error={!aadhaarNumber?.length}
          helperText={!aadhaarNumber?.length ? "Aadhaar number cannot be empty" : ""}
          InputProps={{
            endAdornment: <Button variant="contained">Verify</Button>,
          }}
        />
      </Box>
    </React.Fragment>
  );
};
