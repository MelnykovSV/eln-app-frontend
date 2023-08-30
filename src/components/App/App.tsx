import "./App.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Schemes } from "../../pages";
import { ModernNormalize } from "emotion-modern-normalize";
import Container from "./App.styled";

dayjs.extend(customParseFormat);

console.log(dayjs("22-12-2023", "DD-MM-YYYY"));

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
