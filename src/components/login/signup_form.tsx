import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { VerifyOTP } from "./otp_verification";
import { validateEmail } from "../../services/validation-service";
import { signUp } from "../../services/login-service";

export type Props = {
  onChange: (value: boolean) => void;
};

export const SignUpForm = ({ onChange }: Props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [signUpEmail, setSignUpEmail] = useState<string>("");
  const [signUpPassword, setSignUpPassword] = useState<string>("");
  const [isVerificationCodeSent, setIsVerificationCodeSent] =
    useState<Boolean>(false);
  const [loading, setLoading] = useState(false);
  const [isSignUpEmailValid, setIsSignEmailValid] = useState(true);
  const [emailValidationErrorHelperText, setEmailvalidationErrorHelperText] =
    useState("");
  const [isLogin, setIsLogin] = useState<Boolean>(true);

  const signup = async () => {
    try {
      if (!validateEmail(signUpEmail)) {
        setIsSignEmailValid(false);
        setEmailvalidationErrorHelperText("Invalid Email");
        return;
      }
      setLoading(true);
      await signUp(signUpEmail, signUpPassword, `${firstName} ${lastName}`);
      setIsVerificationCodeSent(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setIsVerificationCodeSent(false);
    }
  };
  return (
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
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!isSignUpEmailValid}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  helperText={emailValidationErrorHelperText}
                />
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
            <Button
              type="button"
              onClick={signup}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
            <Grid container justifyContent="flex-end" sx={{ mb: 5 }}>
              <Grid item>
                <Button variant="text" onClick={() => onChange(true)}>
                  Already have an account? Log in
                </Button>
              </Grid>
            </Grid>
          </>
        )}
        {isVerificationCodeSent && <VerifyOTP signUpEmail={signUpEmail} />}
      </Box>
    </>
  );
};
