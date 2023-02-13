import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material/";
import TextField from "@mui/material/TextField";
import { useContext, useRef, forwardRef, useImperativeHandle, useLayoutEffect } from "react";
import { VendorContext, UpdateVendorContext } from "../../context-config";
import { IVendor } from "../../models/vendor-onboarding-service-model";
import { updateCompanyKYC } from "../../services/vendor-onboarding-service";

export const CompanyKYC = forwardRef((props: any, ref: any) => {
  const vendorDetails = useContext(VendorContext);
  const updateVendorDetails = useContext(UpdateVendorContext);
  const errorMap = useRef<Map<string, boolean>>(new Map());

  let { gstNumber, aadhaarNumber } = vendorDetails?.kyc;

  useLayoutEffect(() => {
    const map = errorMap.current;
    const { gstNumber, aadhaarNumber } = vendorDetails?.kyc;
    const isValid = !map.get("gstNumberError") && gstNumber.length > 0 && !map.get("aadhaarNumberError") && aadhaarNumber.length > 0;
    props.setIsValid(isValid);
  });

  useImperativeHandle(ref, () => ({
    async onSubmit() {
      const vendor: IVendor = {
        id: "NEED_TO_REPLACE",
        vendorId: "51bc368c-33c8-4386-8460-44f21ff75161",
        kyc: vendorDetails.kyc,
      };
      try {
        updateCompanyKYC(vendor);
      } catch (ex) {
        console.log({ ex });
      }
    },
  }));

  const setValue = (e: any) => {
    const { name: key, value } = e.target;
    const kyc = { ...vendorDetails.kyc };
    kyc[key] = value;
    updateVendorDetails({
      kyc: kyc,
    });

    // Updating the error map to validate the fields.
    errorMap.current.set(`${key}Error`, value?.trim().length === 0);
  };

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
          error={errorMap.current.get("gstNumberError")}
          helperText={errorMap.current.get("gstNumberError") ? "GSTIN cannot be empty" : ""}
          InputProps={{
            endAdornment: <Button variant="contained">Verify</Button>,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Aadhaar Number"
          variant="outlined"
          name="aadhaarNumber"
          required
          defaultValue={aadhaarNumber}
          sx={{ mt: 3, width: "75ch" }}
          onChange={setValue}
          error={errorMap.current.get("aadhaarNumberError")}
          helperText={errorMap.current.get("aadhaarNumberError") ? "Aadhaar number cannot be empty" : ""}
          InputProps={{
            endAdornment: <Button variant="contained">Verify</Button>,
          }}
        />
      </Box>
    </React.Fragment>
  );
});
