import "./App.css";
import { lazy } from "react";
import { ModernNormalize } from "emotion-modern-normalize";
import Container from "./App.styled";
import { Route, Routes } from "react-router";
import { SharedLayout } from "../modules";
import { PrivateRoute } from "../userMenu/PrivateRoute";
import { PublicRoute } from "../userMenu/PublicRoute";
const Schemes = lazy(() => import("../pages/Schemes/Schemes"));
const SingleSchemePage = lazy(
  () => import("../pages/SingleSchemePage/SingleSchemePage")
);

const NewSchemePage = lazy(
  () => import("../pages/NewSchemePage/NewSchemePage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const StagePage = lazy(() => import("../pages/StagePage/StagePage"));

function App() {
  return (
    <Container>
      <ModernNormalize />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Schemes />
              </PrivateRoute>
            }></Route>

          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }></Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }></Route>
          <Route
            path="/scheme/:schemeId"
            element={
              <PrivateRoute>
                <SingleSchemePage />
              </PrivateRoute>
            }></Route>
          <Route
            path="/stage"
            element={
              <PrivateRoute>
                <StagePage />
              </PrivateRoute>
            }></Route>
          <Route
            path="/tasks"
            element={<PrivateRoute>Tasks</PrivateRoute>}></Route>
          <Route
            path="/newScheme"
            element={
              <PrivateRoute>
                <NewSchemePage />
              </PrivateRoute>
            }></Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
