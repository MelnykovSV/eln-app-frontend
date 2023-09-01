import Container from "./SingleSchemePage.styled";
import { Scheme } from "../../modules";
import { schemeTestData } from "../../testData";

const SingleSchemePage = () => {
  return (
    <Container>
      <Scheme schemeData={schemeTestData} />
    </Container>
  );
};

export default SingleSchemePage;
