import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";

import AppBar from "../components/AppBar";
import Hero from "../components/Hero";
import Sketch from "../components/sketch/SketchComponent";
import Tech from "../components/Technologies";

const Home = () => {
  const gridSettings = {
    spacing: 0,
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const size = 600;
  const gridItemStyle = { width: size, paddingTop: 10 };

  return (
    <>
      <CssBaseline />
      <AppBar />
      <Hero />
      <Grid container {...gridSettings}>
        <Grid item>
          <Sketch width={size} height={size} />
        </Grid>
        <Grid item style={gridItemStyle}>
          <Tech />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
