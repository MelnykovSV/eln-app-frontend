import Container from "./SharedLayout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router";
import { ResponsiveAppBar } from "./ResponsiveAppBar";
import LinearProgress from "@mui/material/LinearProgress";

const SharedLayout = () => {
  return (
    <Container>
      <header className="header">
        <ResponsiveAppBar />
      </header>
      <main>
        <Suspense fallback={<LinearProgress color="secondary" />}>
          <Outlet></Outlet>
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
