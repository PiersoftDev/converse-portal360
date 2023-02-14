import Axios from "axios";
import { IVendor } from "../models/vendor-onboarding-service-model";

export const postVendorCompanyInformation = (request: IVendor, setId: any) => {
  console.log(request);
  let docId : string = "";
  Axios.post("http://localhost:8080/converse/v1/vendor/onboard", request)
    .then((response) => {
      console.log(response);
      docId = response.data;
      setId(docId);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  return docId;
};

export const updateCompanyDetails = (request: IVendor) => {
  console.log(request);
  Axios.post(
    "http://localhost:8080/converse/v1/vendor/updateVendorCompanyDetails",
    request
  )
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

export const updateCompanyContactInformation = (request: IVendor) => {
  console.log(request);
  Axios.post(
    "http://localhost:8080/converse/v1/vendor/updateVendorContactInfo",
    request
  )
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

export const updateCompanyKYC = (request: IVendor) => {
  console.log(request);
  Axios.post(
    "http://localhost:8080/converse/v1/vendor/updateVendorKYC",
    request
  )
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

export const verifyPhoneNumber = (phoneNumber: IVendor) => {
  console.log(phoneNumber);
  Axios.post(
    "http://localhost:8080/converse/v1/verifications/test/send-otp/+91"+phoneNumber
  )
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
