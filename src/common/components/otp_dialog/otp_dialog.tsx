import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import OtpInput from "../otp_input/otp_input";

export const OTPDialog = ({ openDialog, dialogClosed }: any) => {
  const [open, setOpen] = React.useState<boolean>(openDialog);
  const [otp, setOTP] = React.useState("");

  const handleClose = () => {
    setOpen(false);
    dialogClosed();
  };

  const handleReset = () => {
    setOTP("");
  };

  const handleConfirm = () => {
    console.log("Verifying otp:" + otp);
  };

  const onChange = (value: string) => setOTP(value);

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
        {"Enter OTP"}
      </DialogTitle>
      <DialogContent>
        <OtpInput value={otp} valueLength={6} onChange={onChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleConfirm} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
