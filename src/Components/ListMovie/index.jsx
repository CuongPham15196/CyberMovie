import React, { useState } from "react";
import TabPanel from "./tabPanel";
import { useStyles } from "Components/ListMovie/style";
import { StyledTabs } from "./styleTabs";
import { StyledTab } from "./styleTab";
import Showing from "Components/Showing";
import { Container } from "@material-ui/core";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ListMovie() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container id="lichChieu" maxWidth="xl" className={classes.root}>
      <StyledTabs value={value} onChange={handleChange} centered textColor="secondary">
        <StyledTab label="Đang chiếu" {...a11yProps(0)} />
        <StyledTab label="Sắp chiếu" {...a11yProps(1)} />
      </StyledTabs>

      <TabPanel value={value} index={0}>
        <Showing />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Showing />
      </TabPanel>
    </Container>
  );
}

export default ListMovie;
