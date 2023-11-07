import Container from "./SchemePreviewsPage.styled";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  getSchemePreviews,
  getIsLoadingSchemes,
} from "../../redux/schemes/schemesSlice";
import { Fragment, useEffect } from "react";
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
  const sortingParam = searchParams.get("sortingParam") || "createdAt";
  const sortingDirection = searchParams.get("sortingDirection") || "asc";
  const substring = searchParams.get("substring") || "";
  const schemeStatus = searchParams.get("schemeStatus") || "all";
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 18;

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
        <Fragment>
          {realSchemes.length ? (
            <div className="schemes-preview-container container">
              {realSchemes.map((item) => (
                <ReactionSchemePreview
                  schemePreviewData={item}
                  key={nanoid()}
                />
              ))}
            </div>
          ) : (
            <p className="no-schemes-message">No schemes found</p>
          )}
          <div className="schemes-preview-container container"></div>
        </Fragment>
      )}
    </Container>
  );
};

export default SchemePreviewsPage;
