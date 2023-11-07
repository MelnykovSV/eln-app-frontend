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
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const EmailVerificationPage = lazy(
  () => import("../pages/EmailVerificationPage/EmailVerificationPage")
);
const Page404 = lazy(() => import("../pages/Page404/Page404"));

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
                <Route path="/" element={<HomePage />} />
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
              <Route
                path="emailVerification"
                element={<EmailVerificationPage />}
              />

              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        ) : (
          <DNALoader />
        )}
      </Suspense>
      <ToastContainer />
    </Container>
  );
}

export default App;
