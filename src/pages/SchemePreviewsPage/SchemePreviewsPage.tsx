import Container from "./SchemePreviewsPage.styled";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getSchemePreviews } from "../../redux/schemes/schemesSlice";
import { getIsLoadingSchemes } from "../../redux/schemes/schemesSlice";
import { useEffect } from "react";
import { getSchemes } from "../../redux/schemes/operations";
import { DNALoader } from "../../ui";
import { nanoid } from "nanoid";
import { ReactionSchemePreview } from "../../components";
import { useSearchParams } from "react-router-dom";

const SchemePreviewsPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const isLoadingSchemes = useAppSelector(getIsLoadingSchemes);
  const realSchemes = useAppSelector(getSchemePreviews);
  const sortingParam = searchParams.get("sortingParam");
  const sortingDirection = searchParams.get("sortingDirection");
  const substring = searchParams.get("substring");
  const schemeStatus = searchParams.get("schemeStatus");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  useEffect(() => {
    dispatch(
      getSchemes({
        page: Number(page),
        limit: Number(limit),
        schemeStatus,
        sortingParam,
        sortingDirection,
        substring,
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, schemeStatus, sortingParam, sortingDirection, substring]);

  return (
    <Container>
      {isLoadingSchemes ? (
        <div className="schemes-preview-container loader-container container">
          <DNALoader />
        </div>
      ) : (
        <div className="schemes-preview-container container">
          {realSchemes.map((item) => (
            <ReactionSchemePreview schemePreviewData={item} key={nanoid()} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default SchemePreviewsPage;
