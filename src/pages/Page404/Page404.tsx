import * as S from "./Page404.styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <S.Container className="container">
      <h1>Error 404</h1>
      <p>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>

      <Button variant="contained" component={Link} to="/">
        Home page
      </Button>
    </S.Container>
  );
};

export default Page404;
