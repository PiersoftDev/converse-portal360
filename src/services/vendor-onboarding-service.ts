import Axios from "axios";
import { IVendor } from "../models/vendor-onboarding-service-model";

export const postVendorCompanyInformation = (request: IVendor) => {
  console.log(request);
  Axios.post("/api/login", request)
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
