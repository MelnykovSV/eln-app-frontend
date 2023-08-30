import "./App.css";
import { Schemes } from "../../pages";
import { ModernNormalize } from "emotion-modern-normalize";
import Container from "./App.styled";

function App() {
  return (
    <Container>
      <ModernNormalize />
      <div className="App">
        <Schemes></Schemes>
      </div>
    </Container>
  );
}

export default App;
