import * as React from "react";
import Box from "@mui/material/Box";
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material/";
import TextField from "@mui/material/TextField";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export const CompanyKYC = () => {
  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          mt: 5,
        }}
        noValidate
        autoComplete="off"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Button variant="contained" sx={{ width: "15%", mt: 2 }} endIcon = {<UploadFileIcon />}>
          Upload GST Certificate
        </Button>
        <Button variant="contained" sx={{ width: "15%", mt: 2 }}  endIcon = {<UploadFileIcon />}>
          Upload Aadhar Details
        </Button>
        <Button variant="contained" sx={{ width: "15%", mt: 2 }}  endIcon = {<UploadFileIcon />}>
          Upload Cancelled Cheque
        </Button>
      </Box>
    </React.Fragment>
  );
};
