import Axios from "axios";
import { ILoginRequest } from "../models/login-service-model";

export const postUserLogin = (request: ILoginRequest) => {
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
