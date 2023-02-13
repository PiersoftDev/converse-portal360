/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { forwardRef, useContext, useRef, useImperativeHandle, useLayoutEffect } from "react";
import { VendorContext, UpdateVendorContext } from "../../context-config";
import { debounce } from "../../common/helpers/debounce";
import { IVendor } from "../../models/vendor-onboarding-service-model";
import { postVendorCompanyInformation } from "../../services/vendor-onboarding-service";

export const CompanyDetails = forwardRef((props: any, ref: any) => {
  const vendorDetails = useContext(VendorContext);
  const updateVendorDetails = useContext(UpdateVendorContext);
  const errorMap = useRef<Map<string, boolean>>(new Map());

  const { name, type, service, websiteURL, profile } = vendorDetails?.companyDetails;

  useLayoutEffect(() => {
    const map = errorMap.current;
    const { name, type, service } = vendorDetails?.companyDetails;
    const isValid = !map.get("nameError") && name.length > 0 && !map.get("serviceError") && service.length > 0 && !map.get("typeError") && type.length > 0;
    props.setIsValid(isValid);
  });

  useImperativeHandle(ref, () => ({
    async onSubmit() {
      const vendor: IVendor = {
        id: "NEED_TO_REPLACE",
        vendorId: "51bc368c-33c8-4386-8460-44f21ff75161",
        companyDetails: vendorDetails.companyDetails,
      };
      try {
        postVendorCompanyInformation(vendor, null);
      } catch (ex) {
        console.log({ ex });
      }
    },
  }));

  const setValue = debounce((e: any) => {
    const { name: key, value } = e.target;
    const newCompanyDetails = { ...vendorDetails.companyDetails };
    newCompanyDetails[key] = value.trim();

    // Updating the context to make the vendor details available across the components.
    updateVendorDetails({
      companyDetails: newCompanyDetails,
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
          error={errorMap.current.get("nameError")}
          helperText={errorMap.current.get("nameError") ? "Company name cannot be empty" : ""}
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
          error={errorMap.current.get("typeError")}
          helperText={errorMap.current.get("typeError") ? "Company type cannot be empty" : ""}
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
          error={errorMap.current.get("serviceError")}
          helperText={errorMap.current.get("serviceError") ? "Company service details cannot be empty" : ""}
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
});
