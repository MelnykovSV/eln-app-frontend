import "./App.css";
import { Schemes } from "../../pages";
import { ModernNormalize } from "emotion-modern-normalize";
import Container from "./App.styled";

import { Route, Routes } from "react-router";
import SharedLayout from "../SharedLayout/SharedLayout";

function App() {
  return (
    <Container>
      <ModernNormalize />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Schemes />}></Route>
          <Route path="/scheme" element={"Scheme"}></Route>
          <Route path="/stage" element={"Stage"}></Route>
          <Route path="/tasks" element={"Tasks"}></Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
