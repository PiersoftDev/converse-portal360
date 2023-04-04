import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CompanyDetails } from "../vendor/company-details";
import { CompanyKYC } from "../vendor/company-kyc";
import { CompanyContactInfo } from "../vendor/company-contact-info";
import { IVendor } from "../../models/vendor-onboarding-service-model";
import { useReducer } from "react";
import { VendorContext, UpdateVendorContext } from "../../context-config";

const initialVendorDetails: IVendor = {
  id: "",
  vendorId: "",
  companyDetails: {
    name: "",
    type: "",
    profile: "",
    service: "",
    websiteURL: "",
  },
  contactInformation: {
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    email: "",
    emailVerified: false,
    phoneNo: "",
    phoneNoVerified: false,
  },
  kyc: {
    gstNumber: "",
    gstVerified: false,
    aadhaarNumber: "",
    aadhaarVerified: false,
    bankDetails: {
      accountNumber: "",
      branch: "",
      ifscCode: "",
      accountVerified: false,
    },
  },
};

export const PartnerInfo = () => {
  const vendorDetailsReducer = (prev: IVendor, next: IVendor): IVendor => {
    return { ...prev, ...next };
  };
  const [vendorDetails, updateVendorDetails] = useReducer(vendorDetailsReducer, initialVendorDetails);
  const testRef = React.useRef<any>();
  const [isValid, setIsValid] = React.useState<boolean>(false);
  const [id, setId] = React.useState("");
  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <h3 className="gradient-text">Company Details</h3>
        </AccordionSummary>
        <AccordionDetails>
          <VendorContext.Provider value={vendorDetails}>
            <UpdateVendorContext.Provider value={updateVendorDetails}>
              <CompanyDetails ref={testRef} id={id} setId={setId} setIsValid={setIsValid} />
            </UpdateVendorContext.Provider>
          </VendorContext.Provider>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <h3 className="gradient-text">Company Contact Info</h3>
        </AccordionSummary>
        <AccordionDetails>
          <VendorContext.Provider value={vendorDetails}>
            <UpdateVendorContext.Provider value={updateVendorDetails}>
              <CompanyContactInfo ref={testRef} id={id} setIsValid={setIsValid} />
            </UpdateVendorContext.Provider>
          </VendorContext.Provider>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <h3 className="gradient-text">Company KYC</h3>
        </AccordionSummary>
        <AccordionDetails>
          <VendorContext.Provider value={vendorDetails}>
            <UpdateVendorContext.Provider value={updateVendorDetails}>
              <CompanyKYC ref={testRef} id={id} setIsValid={setIsValid} />
            </UpdateVendorContext.Provider>
          </VendorContext.Provider>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
