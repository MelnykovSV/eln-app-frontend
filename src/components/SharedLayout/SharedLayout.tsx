import Container from "./SharedLayout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router";
import { ResponsiveAppBar } from "./ResponsiveAppBar";

const SharedLayout = () => {
  return (
    <Container>
      <header className="header">
        <ResponsiveAppBar />
      </header>
      <main>
        <Suspense fallback={"Loading..."}>
          <Outlet></Outlet>
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
