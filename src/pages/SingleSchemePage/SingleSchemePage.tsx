import Container from "./SingleSchemePage.styled";
import { Scheme } from "../../modules";
import { schemeTestData } from "../../testData";

import Button from "@mui/material/Button";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReagentCard } from "../../components";

import { useState } from "react";
import { reagentCardData } from "../../testData";
import { ReagentList } from "../../modules";
import { reagentListShortData } from "../../testData";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <div>
          <Typography>{children}</Typography>
        </div>
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

const SingleSchemePage = () => {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const toggleDrawer = () => {
  //   setIsDrawerOpen(!isDrawerOpen);
  // };

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const anchor = "drawer";
  return (
    <Container className="container">
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example">
          <Tab label="Scheme" {...a11yProps(0)} />
          <Tab label="Reagents calculation" {...a11yProps(1)} />
        </Tabs>
      </div>
      <CustomTabPanel value={value} index={0}>
        <Scheme schemeData={schemeTestData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
        {/* <ReagentCard reagentData={reagentCardData} /> */}
        <ReagentList reagents={reagentListShortData} />
      </CustomTabPanel>
      {/* <Scheme schemeData={schemeTestData} /> */}
    </Container>
  );
};

export default SingleSchemePage;
