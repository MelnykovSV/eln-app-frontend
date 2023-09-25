import Container from "./StagePage.styled";
import { Stage } from "../../modules";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  getCurrentScheme,
  initialUpdateCurrentStage,
} from "../../redux/schemes/schemesSlice";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getSchemeAndStage } from "../../redux/schemes/operations";

const StagePage = () => {
  const dispatch = useAppDispatch();
  // const currentStage = useAppSelector(getCurrentStage);
  // const [_yield] = useState(currentStage._yield);
  // const [_id] = useState(currentStage._id);
  const currentScheme = useAppSelector(getCurrentScheme);
  const { schemeId, stageId } = useParams() as any;

  useEffect(() => {
    if (currentScheme._id === schemeId) {
      dispatch(initialUpdateCurrentStage(stageId));
    } else {
      dispatch(getSchemeAndStage({ schemeId, stageId }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Stage />
    </Container>
  );
};

export default StagePage;
