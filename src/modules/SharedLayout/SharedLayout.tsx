import * as S from "./SharedLayout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router";
import { ResponsiveAppBar } from "./ResponsiveAppBar";
import LinearProgress from "@mui/material/LinearProgress";

const SharedLayout = () => {
  return (
    <S.Container>
      <header className="header">
        <ResponsiveAppBar />
      </header>
      <main>
        <Suspense fallback={<LinearProgress color="secondary" />}>
          <Outlet></Outlet>
        </Suspense>
      </main>
    </S.Container>
  );
};

export default SharedLayout;
