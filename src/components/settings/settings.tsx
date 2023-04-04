import { Box, Tab, Typography, Tabs, Grid } from "@mui/material";
import { useState } from "react";
import { Members } from "./members";
import { Divider } from "antd";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Settings = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid p={6}>
      <div>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Partner Info" {...a11yProps(0)} />
            <Tab label="Members" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}></TabPanel>
        <TabPanel value={value} index={1}>
          <Members />
          <Divider />
          <Members />
          <Divider />
          <Members />
          <Divider />
        </TabPanel>
      </div>
    </Grid>
  );
};
