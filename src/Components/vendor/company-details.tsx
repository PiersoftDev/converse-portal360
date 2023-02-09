import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { postVendorCompanyInformation } from "../../services/vendor-onboarding-service";
import { IVendor } from "../../models/vendor-onboarding-service-model";

export const CompanyDetails = () => {
  const [companyName, setCompanyName] = useState("");
  const [isValidCompanyName, setIsValidCompanyName] = useState(true);
  const [invalidCompanyValidationMsg, setInvalidCompanyValidationMsg] = useState("");

  const [companyType, setCompanyType] = useState("");
  const [isValidCompanyType, setIsValidCompanyType] = useState(true);
  const [invalidCompanyTypeValidationMsg, setInvalidCompanyTypeValidationMsg] = useState("");

  const [service, setService] = useState("");
  const [isValidService, setIsValidService] = useState(true);
  const [invalidServiceValidationMsg, setInvalidServiceValidationMsg] = useState("");

  const [companyProfile, setCompanyProfile] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");

  const validateCompanyName = () => {
    console.log({ companyName });
    if (companyName?.trim().length === 0) {
      setIsValidCompanyName(false);
      setInvalidCompanyValidationMsg("Company name cannot be empty");
    } else {
      setIsValidCompanyName(true);
      setInvalidCompanyValidationMsg("");
    }
  };

  const validateCompanyType = () => {
    console.log({ companyType });
    if (companyType?.trim().length === 0) {
      setIsValidCompanyType(false);
      setInvalidCompanyTypeValidationMsg("Company type cannot be empty");
    } else {
      setIsValidCompanyType(true);
      setInvalidCompanyTypeValidationMsg("");
    }
  };

  const validateService = () => {
    console.log("company service:" + service?.trim().length);
    if (service?.trim().length === 0) {
      setIsValidService(false);
      setInvalidServiceValidationMsg("Company service details cannot be empty");
    } else {
      setIsValidService(true);
      setInvalidServiceValidationMsg("");
    }
  };

  const onSubmit = () => {
    const vendor: IVendor = {
      id: "",
      companyDetails: {
        name: companyName,
        profile: companyProfile,
        type: companyType,
        service,
        websiteURL,
      },
    };
    try {
      postVendorCompanyInformation(vendor);
    } catch (ex) {
      console.log({ ex });
    }
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
          required
          sx={{ mt: 3, width: "75ch" }}
          onChange={(e) => setCompanyName(e.target.value)}
          error={!isValidCompanyName}
          onBlur={validateCompanyName}
          helperText={invalidCompanyValidationMsg}
        />
        <TextField
          id="outlined-basic"
          label="Company Type"
          variant="outlined"
          required
          sx={{ mt: 3, width: "75ch" }}
          onChange={(e) => setCompanyType(e.target.value)}
          error={!isValidCompanyType}
          onBlur={validateCompanyType}
          helperText={invalidCompanyTypeValidationMsg}
        />
        <TextField
          id="outlined-basic"
          label="Service"
          variant="outlined"
          required
          sx={{ mt: 3, width: "75ch" }}
          onChange={(e) => setService(e.target.value)}
          error={!isValidService}
          onBlur={validateService}
          helperText={invalidServiceValidationMsg}
        />
        <TextField id="outlined-basic" label="Company website" variant="outlined" sx={{ mt: 3, width: "75ch" }} onChange={(e) => setWebsiteURL(e.target.value)} />
        <TextField id="outlined-basic" label="Company Profile" required variant="outlined" sx={{ mt: 3, width: "75ch" }} onChange={(e) => setCompanyProfile(e.target.value)} multiline minRows={2} />
      </Box>
    </React.Fragment>
  );
};
