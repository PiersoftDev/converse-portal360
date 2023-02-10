import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { VendorContext, UpdateVendorContext } from "../../context-config";

export const CompanyDetails = () => {
  const vendorDetails = useContext(VendorContext);
  const updateVendorDetails = useContext(UpdateVendorContext);

  const setValue = (key: string, value: string) => {
    const newCompanyDetails: any = { ...vendorDetails.companyDetails };
    newCompanyDetails[key] = value;
    updateVendorDetails({
      companyDetails: newCompanyDetails,
    });
  };

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
          sx={{ mt: 3, width: "75ch" }}
          value={vendorDetails.companyDetails?.name}
          onChange={(e) => setValue("name", e.target.value)}
          error={!vendorDetails.companyDetails?.name.length}
          helperText={!vendorDetails.companyDetails?.name.length ? "Company name cannot be empty" : ""}
        />
        <TextField
          id="outlined-basic"
          label="Company Type"
          variant="outlined"
          required
          value={vendorDetails.companyDetails?.type}
          sx={{ mt: 3, width: "75ch" }}
          onChange={(e) => setValue("type", e.target.value)}
          error={!vendorDetails.companyDetails?.type}
          helperText={!vendorDetails.companyDetails?.type ? "Company type cannot be empty" : ""}
        />
        <TextField
          id="outlined-basic"
          label="Service"
          variant="outlined"
          required
          value={vendorDetails.companyDetails?.service}
          sx={{ mt: 3, width: "75ch" }}
          onChange={(e) => setValue("service", e.target.value)}
          error={!vendorDetails.companyDetails?.service}
          helperText={!vendorDetails.companyDetails?.service ? "Company service details cannot be empty" : ""}
        />
        <TextField
          id="outlined-basic"
          label="Company website"
          variant="outlined"
          value={vendorDetails.companyDetails?.websiteURL}
          sx={{ mt: 3, width: "75ch" }}
          onChange={(e) => setValue("websiteURL", e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Company Profile"
          required
          value={vendorDetails.companyDetails?.profile}
          variant="outlined"
          sx={{ mt: 3, width: "75ch" }}
          onChange={(e) => setValue("profile", e.target.value)}
          multiline
          minRows={2}
        />
      </Box>
    </React.Fragment>
  );
};
