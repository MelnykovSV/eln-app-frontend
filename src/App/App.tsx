import "./App.css";
import { useEffect } from "react";
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
import { useAppDispatch } from "../redux/hooks";
import { getCurrentUser } from "../redux/auth/operations";

function App() {
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getCurrentUser());
  // }, []);

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
