import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import OtpInput from "../otp_input/otp_input";

export default function OTPDialog(openDialog: any) {
    console.log(openDialog);
  const [open, setOpen] = React.useState(openDialog);
  const [otp, setOTP] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    setOTP("");
  };

  const handleConfirm = () => {
    console.log("Verifying otp:" + otp);
  };

  const onChange = (value: string) => setOTP(value);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Enter OTP Sent to entered phone number"}
        </DialogTitle>
        <DialogContent>
          <OtpInput
            value={otp}
            valueLength={6}
            onChange={onChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={handleConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
