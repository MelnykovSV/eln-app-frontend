import "./App.css";
import {
  Schemes,
  SingleSchemePage,
  NewSchemePage,
  LoginPage,
  RegisterPage,
} from "../pages";
import { ModernNormalize } from "emotion-modern-normalize";
import Container from "./App.styled";

import { Route, Routes } from "react-router";
import { SharedLayout } from "../modules";

function App() {
  return (
    <Container>
      <ModernNormalize />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Schemes />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/scheme" element={<SingleSchemePage />}></Route>
          <Route path="/stage" element={"Stage"}></Route>
          <Route path="/tasks" element={"Tasks"}></Route>
          <Route path="/newScheme" element={<NewSchemePage />}></Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
