import * as S from "./StagePage.styled";
import { Stage } from "../../modules";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  getCurrentScheme,
  getSchemesError,
  initialUpdateCurrentStage,
} from "../../redux/schemes/schemesSlice";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getSchemeAndStage } from "../../redux/schemes/operations";

const StagePage = () => {
  const navigate = useNavigate();
  const schemesError = useAppSelector(getSchemesError);
  const dispatch = useAppDispatch();
  const currentScheme = useAppSelector(getCurrentScheme);
  const { schemeId, stageId } = useParams();
  useEffect(() => {
    if (schemesError.code === 404 || schemesError.code === 400) {
      navigate("/page404");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schemesError]);

  useEffect(() => {
    if (schemeId && stageId) {
      if (currentScheme._id === schemeId) {
        dispatch(initialUpdateCurrentStage(stageId));
      } else {
        dispatch(getSchemeAndStage({ schemeId, stageId }));
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <Stage />
    </S.Container>
  );
};

export default StagePage;
