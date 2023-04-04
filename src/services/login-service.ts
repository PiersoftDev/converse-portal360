import Axios from "axios";
import { ILoginRequest } from "../models/login-service-model";
import { Auth } from "aws-amplify";

var firebaseConfig = {
  apiKey: "AIzaSyChLpRqEj3eJgEeuF5nulZtS9ixcdeBzA0",
  authDomain: "gatepass-380112.firebaseapp.com",
  projectId: "gatepass-380112",
  storageBucket: "gatepass-380112.appspot.com",
  messagingSenderId: "800428311109",
  appId: "1:800428311109:web:74602dd50cb3adc5c8d92c",
  measurementId: "G-SWSXX8Y876",
};

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
  givenName: string
) => {
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

export const login = async function signIn(username: string, password: string) {
  try {
    const response = await Auth.signIn(username, password);
    return response.signInUserSession;
  } catch (error) {
    console.log("error signing in", error);
  }
};

export const forgotPassword = async function forgotPassword(username: string) {
  try {
    Auth.forgotPassword(username)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log("error signing in", error);
  }
};

export const forgotPasswordSubmit = async function forgotPasswordSubmit(
  username: string,
  code: string,
  newPassword: string
) {
  try {
    Auth.forgotPasswordSubmit(username, code, newPassword)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log("error signing in", error);
  }
};
