import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CompanyDetails } from "./company-details";
import { CompanyContactInfo } from "./company-contact-info";
import { VendorListings } from "./vendor-listings";
import { CompanyKYC } from "./company-kyc";

const steps = ["Company Details", "Contact Information", "KYC", "Listings"];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Map());

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

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = { ...completed };
    newCompleted.set(activeStep, true);
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Map());
  };

  return (
    <Box sx={{ ml: "20px", width: "80%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed.get(index)}>
            <StepButton color="inherit">{label}</StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {_renderStepContent(activeStep)}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mt: 4, ml: "auto", mr: "auto", width: "75ch", justifyContent: "center" }}>
              <Button variant="contained" color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* <Button onClick={handleNext} sx={{ mr: 1 }} variant="contained">
                Save
              </Button> */}
              {activeStep !== steps.length &&
                (completed.get(activeStep) ? (
                  <Typography variant="caption" sx={{ display: "inline-block" }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={completedSteps() === totalSteps() - 1 ? handleComplete : handleNext} variant="contained">
                    {" "}
                    {completedSteps() === totalSteps() - 1 ? "Finish" : "Save"}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}

function _renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <CompanyDetails />;
    case 1:
      return <CompanyContactInfo />;
    case 2:
      return <CompanyKYC />;
    case 3:
      return <VendorListings />;
    default:
      <div>Empty Page</div>;
  }
}
