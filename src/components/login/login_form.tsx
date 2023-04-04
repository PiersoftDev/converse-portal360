import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { login } from "../../services/login-service";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { validateEmail } from "../../services/validation-service";

export let UserContext = createContext(null);

export type Props = {
  onChange: (value: boolean) => void;
};

export const LoginForm = ({ onChange }: Props) => {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isSignUpEmailValid, setIsSignEmailValid] = useState(true);
  const [emailValidationErrorHelperText, setEmailvalidationErrorHelperText] =
    useState("");
  const navigate = useNavigate();

  const userLogin = async () => {
    try {
      if (!validateEmail(loginEmail)) {
        setIsSignEmailValid(false);
        setEmailvalidationErrorHelperText("Invalid Email");
        return;
      }
      setLoading(true);
      const user = await login(loginEmail, loginPassword);
      navigate("/vendor-onboarding");
      setLoading(false);
      UserContext = createContext(user);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Log In
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              error={!isSignUpEmailValid}
              helperText={emailValidationErrorHelperText}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
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
              autoComplete="off"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="button"
          onClick={userLogin}
          fullWidth
          variant="contained"
          disabled={loading}
          sx={{ mt: 3, mb: 5 }}
        >
          Log In
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
            {/* <Button variant="text" onClick={() => onChange(false)}>
              New? Create Account
            </Button> */}
            <Button variant="text" onClick={() => onChange(false)} sx={{color: "#9C27B0"}}>
              Forgot Password
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
