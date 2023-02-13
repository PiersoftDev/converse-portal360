import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material/";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { VendorContext, UpdateVendorContext } from "../../context-config";
import { debounce } from "../../common/helpers/debounce";

export const CompanyContactInfo = () => {
  const vendorDetails = useContext(VendorContext);
  const updateVendorDetails = useContext(UpdateVendorContext);

  let { addressLine1, addressLine2, city, state, postalCode, country, email, phoneNo } = vendorDetails?.contactInformation;

  const setValue = debounce((e: any) => {
    const { name: key, value } = e.target;
    const contactInfo = { ...vendorDetails.contactInformation };
    contactInfo[key] = value;
    updateVendorDetails({
      contactInformation: contactInfo,
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
          label="Company Email"
          variant="outlined"
          name="email"
          required
          defaultValue={email}
          sx={{ mt: 3, width: "75ch" }}
          onChange={setValue}
          error={!email?.length}
          helperText={!email?.length ? "Company email cannot be empty" : ""}
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
          error={!phoneNo?.length}
          helperText={!phoneNo?.length ? "Company Phone Number cannot be empty" : ""}
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
          error={!addressLine1?.length}
          helperText={!addressLine1?.length ? "Company Address Line 1 cannot be empty" : ""}
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
          error={!addressLine2?.length}
          helperText={!addressLine2?.length ? "Company Address Line 2 cannot be empty" : ""}
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
            error={!city?.length}
            helperText={!city?.length ? "City cannot be empty" : ""}
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
            error={!postalCode?.length}
            helperText={!postalCode?.length ? "PostalCode cannot be empty" : ""}
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
            error={!state?.length}
            helperText={!state?.length ? "State cannot be empty" : ""}
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
            error={!country?.length}
            helperText={!country?.length ? "Country cannot be empty" : ""}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};
