import { Box, Button, Grid } from "@mui/material";
import OtpInput from "../../common/components/otp_input/otp_input";
import { useState } from "react";
import { postConfirmSignUp } from "../../services/login-service";
import { useNavigate } from "react-router-dom";

export type Props = {
    signUpEmail : string
  };

export const VerifyOTP = ({signUpEmail}: Props) => {
  const [otp, setOtp] = useState("");
  const onChange = (value: string) => setOtp(value);
  const navigate = useNavigate();

  const confirmSignUp = async () => {
    try {
      await postConfirmSignUp(signUpEmail, otp);
      navigate("/");
    } catch (e) {
      // show error message
    }
  };
  return (
    <>
      <Grid container spacing={2} sx={{ mb: 5 }}>
        <Grid item sm={12}>
          <OtpInput value={otp} valueLength={6} onChange={onChange} />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="space-evenly" alignItems="center">
        <Button
          type="button"
          onClick={() => setOtp("")}
          fullWidth
          variant="contained"
          sx={{ mb: 2 }}
        >
          Reset
        </Button>
        <Button
          type="button"
          onClick={confirmSignUp}
          fullWidth
          variant="contained"
          sx={{ mb: 2, ml: 2 }}
        >
          Confirm Code
        </Button>
      </Box>
    </>
  );
};
