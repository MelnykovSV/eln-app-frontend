import Container from "./SingleMolCanvas.styled";
import React, { useRef, useEffect } from "react";
import { ISingleMolCanvasProps } from "../../types";
const SmilesDrawer = require("smiles-drawer");

const SingleMolCanvas = ({
  smiles,
  options = {
    width: 110,
    height: 110,
  },
}: ISingleMolCanvasProps) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Create an instance of SmilesDrawer.Drawer
      let smilesDrawer = new SmilesDrawer.Drawer(options);
      // console.log(SmilesDrawer);
      // Parse and draw the molecular structure
      SmilesDrawer.parse(smiles, function (tree: any) {
        // console.log(tree);

        smilesDrawer.draw(tree, canvasRef.current, "light", false);

        // console.log(tree);

        // console.log(calc(smilesDrawer.getMolecularFormula(tree)));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

//https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CCCCBr/property/IUPACName/JSON
// GET IUPACName !!!
