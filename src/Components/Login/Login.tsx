import { CssBaseline, Box, Avatar, Container } from "@mui/material";
import { useState } from "react";
import { createContext } from "react";
import "./login.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoginForm } from "./login_form";
import { SignUpForm } from "./signup_form";


export const Login = () => {
  const [showLogin, setShowLogin] = useState<Boolean>(true);

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
          {showLogin && <LoginForm onChange={setShowLogin} />}
          {!showLogin && <SignUpForm onChange={setShowLogin} />}
        </Box>
      </Container>
    </div>
  );
};
