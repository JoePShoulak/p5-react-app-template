import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "./sketch";

const SketchComponent = ({ width, height }) => {
  return <ReactP5Wrapper sketch={sketch} width={width} height={height} />;
};

export default SketchComponent;
