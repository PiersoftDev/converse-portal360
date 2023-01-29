import * as React from "react";
import Box from "@mui/material/Box";
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material/";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const steps = ["Company Details", "Contact Information", "KYC", "Listings"];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ ml: "20px", width: "80%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box
              component="form"
              sx={{
                mt: 5,
              }}
              noValidate
              autoComplete="off"
              display="grid"
              justifyContent="space-between"
            >
              <TextField
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
                sx={{ mt: 3, ml: 6, width: "75ch" }}
              />
              <TextField
                id="outlined-basic"
                label="Company Type"
                variant="outlined"
                sx={{ mt: 3, ml: 6, width: "75ch" }}
              />
              <TextField
                id="outlined-basic"
                label="Company URL"
                variant="outlined"
                sx={{ mt: 3, ml: 6, width: "75ch" }}
              />
              <TextField
                id="outlined-basic"
                label="Service"
                variant="outlined"
                sx={{ mt: 3, ml: 6, width: "75ch" }}
              />
              <TextField
                id="outlined-basic"
                label="Enter Store Description"
                variant="outlined"
                sx={{ mt: 3, ml: 6, width: "75ch" }}
              />

              <FormControl fullWidth>
                
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  sx={{ mt: 1, ml: 6, width: "75ch" }}
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
