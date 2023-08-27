import Container from "./SingleMolCanvas.styled";
import React, { useRef, useEffect } from "react";
import { ISingleMolCanvasProps } from "../../types";
const SmilesDrawer = require("smiles-drawer");

const SingleMolCanvas = ({
  smiles,
  options = {
    width: 150,
    height: 150,
  },
}: ISingleMolCanvasProps) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Create an instance of SmilesDrawer.Drawer
      let smilesDrawer = new SmilesDrawer.Drawer(options);
      // Parse and draw the molecular structure
      SmilesDrawer.parse(smiles, function (tree: any) {
        smilesDrawer.draw(tree, canvasRef.current, "light", false);
      });
    }
  }, [smiles]);
  return (
    <Container>
      <canvas
        id="canvas"
        ref={canvasRef}
        width={`${options.width}px`}
        height={`${options.height}px`}
      />
    </Container>
  );
};

export default SingleMolCanvas;