import Container from "./SingleMolCanvas.styled";
import { useRef, useEffect } from "react";
import { ISingleMolCanvasProps } from "../../types";

if (process.env.REACT_APP_CONSOLE_LOGS !== "enabled") {
  console.log = () => {};
}

const SmilesDrawer = require("smiles-drawer");

const SingleMolCanvas = ({
  smiles = "",
  options = {
    width: 110,
    height: 110,
  },
}: ISingleMolCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      if (!smiles) {
        const context = canvasRef.current.getContext("2d");
        if (context) {
          context.clearRect(0, 0, options.width, options.height);
        }
      }
      let smilesDrawer = new SmilesDrawer.Drawer(options);
      SmilesDrawer.parse(smiles, function (tree: any) {
        smilesDrawer.draw(tree, canvasRef.current, "light", false);
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
