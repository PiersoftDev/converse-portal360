import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export const CompanyDetails = () => {
  const [companyName, setCompanyName] = useState("");
  const [isValidCompanyName, setIsValidCompanyName] = useState(true);
  const [invalidCompanyValidationMsg, setInvalidCompanyValidationMsg] =
    useState("");

  const [companyType, setCompanyType] = useState("");
  const [isValidCompanyType, setIsValidCompanyType] = useState(true);
  const [invalidCompanyTypeValidationMsg, setInvalidCompanyTypeValidationMsg] =
    useState("");

  const [service, setService] = useState("");
  const [isValidService, setIsValidService] = useState(true);
  const [invalidServiceValidationMsg, setInvalidServiceValidationMsg] =
    useState("");

  const [companyProfile, setCompanyProfile] = useState("");
  const [isValidCompanyProfile, setIsValidCompanyProfile] = useState(true);
  const [
    invalidCompanyProfileValidationMsg,
    setInvalidCompanyProfileValidationMsg,
  ] = useState("");

  const validateCompanyName = () => {
    console.log("company name:" + companyName?.trim().length);
    if (companyName?.trim().length == 0) {
      setIsValidCompanyName(false);
      setInvalidCompanyValidationMsg("Company name cannot be empty");
    } else {
      setIsValidCompanyName(true);
      setInvalidCompanyValidationMsg("");
    }
  };

  const validateCompanyType = () => {
    console.log("company type:" + companyType?.trim().length);
    if (companyType?.trim().length == 0) {
      setIsValidCompanyType(false);
      setInvalidCompanyTypeValidationMsg("Company type cannot be empty");
    } else {
      setIsValidCompanyType(true);
      setInvalidCompanyTypeValidationMsg("");
    }
  };

  const validateCompanyProfile = () => {
    console.log("company profile:" + companyProfile?.trim().length);
    if (companyProfile?.trim().length == 0) {
      setIsValidCompanyProfile(false);
      setInvalidCompanyProfileValidationMsg("Company profile cannot be empty");
    } else {
      setIsValidCompanyProfile(true);
      setInvalidCompanyProfileValidationMsg("");
    }
  };

  const validateService = () => {
    console.log("company service:" + service?.trim().length);
    if (service?.trim().length == 0) {
      setIsValidService(false);
      setInvalidServiceValidationMsg("Company service details cannot be empty");
    } else {
      setIsValidService(true);
      setInvalidServiceValidationMsg("");
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
        justifyContent="space-between"
      >
        <TextField
          id="outlined-basic"
          label="Company Name"
          variant="outlined"
          required
          sx={{ mt: 3, ml: 6, width: "75ch" }}
          onChange={(e) => setCompanyName(e.target.value)}
          error={!isValidCompanyName}
          onBlur={() => validateCompanyName()}
          helperText={invalidCompanyValidationMsg}
        />
        <TextField
          id="outlined-basic"
          label="Company Type"
          variant="outlined"
          required
          sx={{ mt: 3, ml: 6, width: "75ch" }}
          onChange={(e) => setCompanyType(e.target.value)}
          error={!isValidCompanyType}
          onBlur={() => validateCompanyType()}
          helperText={invalidCompanyTypeValidationMsg}
        />
        <TextField
          id="outlined-basic"
          label="Company Profile"
          required
          variant="outlined"
          sx={{ mt: 3, ml: 6, width: "75ch" }}
          onChange={(e) => setCompanyProfile(e.target.value)}
          error={!isValidCompanyProfile}
          onBlur={() => validateCompanyProfile()}
          helperText={invalidCompanyProfileValidationMsg}
        />
        <TextField
          id="outlined-basic"
          label="Service"
          variant="outlined"
          required
          sx={{ mt: 3, ml: 6, width: "75ch" }}
          onChange={(e) => setService(e.target.value)}
          error={!isValidService}
          onBlur={() => validateService()}
          helperText={invalidServiceValidationMsg}
        />
        <TextField
          id="outlined-basic"
          label="Company website"
          variant="outlined"
          sx={{ mt: 3, ml: 6, width: "75ch" }}
        />
      </Box>
    </React.Fragment>
  );
};
