import { CssBaseline, Box, TextField, Avatar, Button, Container, Grid, Typography } from "@mui/material";
// import { Avatar, Typography, Grid, Checkbox } from "antd";
import { useState } from "react";
import "./login.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ILoginRequest } from "../../models/login-service-model";
import { postUserLogin, signUp, postConfirmSignUp } from "../../services/login-service";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<Boolean>(true);
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [signUpEmail, setSignUpEmail] = useState<string>("");
  const [signUpPassword, setSignUpPassword] = useState<string>("");
  const [isVerificationCodeSent, setIsVerificationCodeSent] = useState<Boolean>(false);
  const [verificationCode, setVerificationCode] = useState<string>("");

  const login = async () => {
    setIsLogin(true);
    alert(`Trying to login with Email : ${loginEmail} & Password : ${loginPassword}`);
    const request: ILoginRequest = {
      email: loginEmail,
      password: loginPassword,
    };
    // Add validation before doing the api call.
    var response = await postUserLogin(request);
    console.log(response);
  };

  const signup = async () => {
    try {
      await signUp(signUpEmail, signUpPassword, `${firstName} ${lastName}`);
      setIsVerificationCodeSent(true);
    } catch (e) {
      setIsVerificationCodeSent(false);
    }
  };

  const confirmSignUp = async () => {
    try {
      await postConfirmSignUp(signUpEmail, verificationCode);
      navigate("/");
    } catch (e) {
      // show error message
    }
  };

  return (
    <div className="login-container">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          {isLogin && (
            <>
              <Typography component="h1" variant="h5">
                Log In
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button type="button" onClick={login} fullWidth variant="contained" sx={{ mt: 3, mb: 5 }}>
                  Log In
                </Button>
                <Grid container justifyContent="flex-end" sx={{ mb: 5 }}>
                  <Grid item>
                    <Button variant="text" onClick={() => setIsLogin(false)}>
                      New? Create Account
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </>
          )}
          {!isLogin && (
            <>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                {!isVerificationCodeSent && (
                  <>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          value={signUpPassword}
                          onChange={(e) => setSignUpPassword(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Button type="button" onClick={signup} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end" sx={{ mb: 5 }}>
                      <Grid item>
                        <Button variant="text" onClick={() => setIsLogin(true)}>
                          Already have an account? Log in
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                )}
                {isVerificationCodeSent && (
                  <>
                    <Grid container spacing={2} sx={{ mb: 5 }}>
                      <Grid item sm={12}>
                        <TextField
                          autoComplete="verification-code"
                          name="verificationCode"
                          required
                          fullWidth
                          id="verificationCode"
                          label="Verification Code"
                          autoFocus
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Button type="button" onClick={confirmSignUp} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                      Confirm Code
                    </Button>
                  </>
                )}
              </Box>
            </>
          )}
        </Box>
      </Container>
    </div>
  );
};
