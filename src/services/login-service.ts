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

export const signUp = async (
  username: string,
  password: string,
  givenName: string,
  middleName: string
) => {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        givenName,
        middleName,
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
};
