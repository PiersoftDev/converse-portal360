import Axios from "axios";
import { ILoginRequest } from "../models/login-service-model";
import { Auth } from "aws-amplify";

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

export const signUp = async (username: string, password: string, givenName: string) => {
  try {
    const response = await Auth.signUp({
      username,
      password,
      attributes: {
        name: givenName,
      },
      autoSignIn: {
        enabled: true,
      },
    });
    return response.user;
  } catch (error) {
    console.log("error signing up:", error);
  }
};

export const postConfirmSignUp = async (username: string, code: string) => {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log("error confirming sign up", error);
  }
};
