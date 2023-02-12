/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { VendorContext, UpdateVendorContext } from "../../context-config";
import { debounce } from "../../common/helpers/debounce";

export const CompanyDetails = () => {
  const vendorDetails = useContext(VendorContext);
  const updateVendorDetails = useContext(UpdateVendorContext);

  let { name, type, service, websiteURL, profile } = vendorDetails?.companyDetails;

  const setValue = debounce((e: any) => {
    const { name: key, value } = e.target;
    const newCompanyDetails = { ...vendorDetails.companyDetails };
    newCompanyDetails[key] = value;
    updateVendorDetails({
      companyDetails: newCompanyDetails,
    });
  });

  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          mt: 5,
        }}
        autoComplete="off"
        display="grid"
        justifyContent="center"
      >
        <TextField
          id="outlined-basic"
          label="Company Name"
          variant="outlined"
          name="name"
          required
          defaultValue={name}
          sx={{ mt: 3, width: "75ch" }}
          onChange={setValue}
          error={!name?.length}
          helperText={!name?.length ? "Company name cannot be empty" : ""}
        />
        <TextField
          id="outlined-basic"
          label="Company Type"
          variant="outlined"
          required
          defaultValue={type}
          name="type"
          sx={{ mt: 3, width: "75ch" }}
          onChange={setValue}
          error={!type?.length}
          helperText={!type ? "Company type cannot be empty" : ""}
        />
        <TextField
          id="outlined-basic"
          label="Service"
          variant="outlined"
          required
          defaultValue={service}
          name="service"
          sx={{ mt: 3, width: "75ch" }}
          onChange={setValue}
          error={!service?.length}
          helperText={!service ? "Company service details cannot be empty" : ""}
        />
        <TextField id="outlined-basic" label="Company website" variant="outlined" defaultValue={websiteURL} sx={{ mt: 3, width: "75ch" }} name="websiteURL" onChange={setValue} />
        <TextField
          id="outlined-basic"
          label="Company Profile"
          required
          name="profile"
          defaultValue={profile}
          variant="outlined"
          sx={{ mt: 3, width: "75ch" }}
          onChange={setValue}
          multiline
          minRows={2}
        />
      </Box>
    </React.Fragment>
  );
};
