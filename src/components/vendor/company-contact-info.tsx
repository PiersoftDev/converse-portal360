import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material/";
import TextField from "@mui/material/TextField";
import { forwardRef, useContext, useImperativeHandle, useLayoutEffect, useRef } from "react";
import { VendorContext, UpdateVendorContext } from "../../context-config";
import { debounce } from "../../common/helpers/debounce";
import { IVendor } from "../../models/vendor-onboarding-service-model";
import { updateCompanyContactInformation } from "../../services/vendor-onboarding-service";

export const CompanyContactInfo = forwardRef((props: any, ref: any) => {
  const vendorDetails = useContext(VendorContext);
  const updateVendorDetails = useContext(UpdateVendorContext);
  const errorMap = useRef<Map<string, boolean>>(new Map());

  const { addressLine1, addressLine2, city, state, postalCode, country, email, phoneNo } = vendorDetails?.contactInformation;

  useLayoutEffect(() => {
    // Enable the save button only after the required data is filled.
    const map = errorMap.current;
    const { addressLine1, addressLine2, city, state, postalCode, country, email, phoneNo } = vendorDetails?.contactInformation;
    const isValid =
      !map.get("emailError") &&
      email.length > 0 &&
      !map.get("phoneNo") &&
      phoneNo.length > 0 &&
      !map.get("addressLine1Error") &&
      addressLine1.length > 0 &&
      !map.get("addressLine2Error") &&
      addressLine2.length > 0 &&
      !map.get("cityError") &&
      city.length > 0 &&
      !map.get("postalCodeError") &&
      postalCode.length > 0 &&
      !map.get("stateError") &&
      state.length > 0 &&
      !map.get("countryError") &&
      country.length > 0;
    props.setIsValid(isValid);
  });

  useImperativeHandle(ref, () => ({
    async onSubmit() {
      const vendor: IVendor = {
        id: "NEED_TO_REPLACE",
        vendorId: "51bc368c-33c8-4386-8460-44f21ff75161",
        contactInformation: vendorDetails.companyDetails,
      };
      try {
        updateCompanyContactInformation(vendor);
      } catch (ex) {
        console.log({ ex });
      }
    },
  }));

  const setValue = debounce((e: any) => {
    const { name: key, value } = e.target;
    const contactInfo = { ...vendorDetails.contactInformation };
    contactInfo[key] = value;
    updateVendorDetails({
      contactInformation: contactInfo,
    });

    // Updating the error map to validate the fields.
    errorMap.current.set(`${key}Error`, value?.trim().length === 0);
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
          label="Company Email"
          variant="outlined"
          name="email"
          required
          defaultValue={email}
          sx={{ mt: 3, width: "75ch" }}
          onChange={setValue}
          error={errorMap.current.get("emailError")}
          helperText={errorMap.current.get("emailError") ? "Company email cannot be empty" : ""}
          InputProps={{
            endAdornment: <Button variant="contained">Verify</Button>,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Company Phone Number"
          variant="outlined"
          name="phoneNo"
          required
          defaultValue={phoneNo}
          sx={{ mt: 3, width: "75ch" }}
          onChange={setValue}
          error={errorMap.current.get("phoneNoError")}
          helperText={errorMap.current.get("phoneNoError") ? "Company Phone Number cannot be empty" : ""}
          InputProps={{
            endAdornment: <Button variant="contained">Verify</Button>,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Company Address Line 1"
          variant="outlined"
          name="addressLine1"
          required
          defaultValue={addressLine1}
          sx={{ mt: 3, width: "75ch" }}
          onChange={setValue}
          error={errorMap.current.get("addressLine1Error")}
          helperText={errorMap.current.get("addressLine1Error") ? "Company Address Line 1 cannot be empty" : ""}
        />
        <TextField
          id="outlined-basic"
          label="Company Address Line 2"
          variant="outlined"
          name="addressLine2"
          required
          defaultValue={addressLine2}
          sx={{ mt: 3, width: "75ch" }}
          onChange={setValue}
          error={errorMap.current.get("addressLine2Error")}
          helperText={errorMap.current.get("addressLine2Error") ? "Company Address Line 2 cannot be empty" : ""}
        />
        <Box display="flex" flexDirection={"row"}>
          <TextField
            id="outlined-basic"
            label="city"
            variant="outlined"
            name="city"
            required
            defaultValue={city}
            sx={{ mt: 3, width: "35ch" }}
            onChange={setValue}
            error={errorMap.current.get("cityError")}
            helperText={errorMap.current.get("cityError") ? "City cannot be empty" : ""}
          />

          <TextField
            id="outlined-basic"
            label="postalCode"
            variant="outlined"
            name="postalCode"
            required
            defaultValue={postalCode}
            sx={{ mt: 3, ml: 5, width: "35ch" }}
            onChange={setValue}
            error={errorMap.current.get("postalCodeError")}
            helperText={errorMap.current.get("postalCodeError") ? "PostalCode cannot be empty" : ""}
          />
        </Box>
        <Box display="flex" flexDirection={"row"}>
          <TextField
            id="outlined-basic"
            label="state"
            variant="outlined"
            name="state"
            required
            defaultValue={state}
            sx={{ mt: 3, width: "35ch" }}
            onChange={setValue}
            error={errorMap.current.get("stateError")}
            helperText={errorMap.current.get("stateError") ? "State cannot be empty" : ""}
          />

          <TextField
            id="outlined-basic"
            label="country"
            variant="outlined"
            name="country"
            required
            defaultValue={country}
            sx={{ mt: 3, ml: 5, width: "35ch" }}
            onChange={setValue}
            error={errorMap.current.get("countryError")}
            helperText={errorMap.current.get("countryError") ? "Country cannot be empty" : ""}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
});
