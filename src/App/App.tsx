import "./App.css";
import { lazy, Suspense } from "react";
import { ModernNormalize } from "emotion-modern-normalize";
import Container from "./App.styled";
import { Route, Routes } from "react-router";
import { SharedLayout } from "../modules";
import { PrivateRoute } from "../userMenu/PrivateRoute";
import { PublicRoute } from "../userMenu/PublicRoute";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { refresh } from "../redux/auth/operations";
import { getIsRefreshing } from "../redux/auth/authSlice";
import { DNALoader } from "../ui";
import { ToastContainer } from "react-toastify";

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
const SchemePreviewsPage = lazy(
  () => import("../pages/SchemePreviewsPage/SchemePreviewsPage")
);

function App() {
  const isRefreshing = useAppSelector(getIsRefreshing);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(refresh());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <ModernNormalize />

      <Suspense fallback={<DNALoader />}>
        {!isRefreshing ? (
          <Routes>
            <Route element={<SharedLayout />}>
              <Route element={<PublicRoute />}>
                <Route path="/" element={<div>MainPage</div>} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="schemes" element={<Schemes />}>
                  <Route index element={<SchemePreviewsPage />} />
                </Route>
                <Route
                  path="/scheme/:schemeId"
                  element={<SingleSchemePage />}
                />
                <Route
                  path="/stage/:schemeId/:stageId"
                  element={<StagePage />}
                />
                {/* <Route path="/tasks" element={<div>Tasks</div>} /> */}
                <Route path="/newScheme" element={<NewSchemePage />} />
              </Route>

              <Route path="*" element={<div>404 page</div>} />
            </Route>
          </Routes>
        ) : (
          <DNALoader />
        )}
      </Suspense>

      <ToastContainer />

      {/* <Routes>
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
            path="/stage/:schemeId/:stageId"
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
      </Routes> */}
    </Container>
  );
}

export default App;
