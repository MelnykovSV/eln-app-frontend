import Container from "./SchemePreviewsPage.styled";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getSchemePreviews } from "../../redux/schemes/schemesSlice";
import { getIsLoadingSchemes } from "../../redux/schemes/schemesSlice";
import React, { useState, useEffect } from "react";
import { getSchemes } from "../../redux/schemes/operations";
import { IReactionPreviewData } from "../../types";
import dayjs from "dayjs";
import { DNALoader, SearchTextInput } from "../../ui";
import { nanoid } from "nanoid";
import { ReactionSchemePreview } from "../../components";
import {
  getSortingParam,
  getSortingDirection,
  getSearchSubstring,
} from "../../redux/schemes/schemesSlice";
import { useParams } from "react-router";

const SchemePreviewsPage = () => {
  const dispatch = useAppDispatch();
  const { schemesType, page } = useParams();
  const isLoadingSchemes = useAppSelector(getIsLoadingSchemes);
  const sortingParam = useAppSelector(getSortingParam);
  const sortingDirection = useAppSelector(getSortingDirection);
  const searchSubstring = useAppSelector(getSearchSubstring);

  const realSchemes = useAppSelector(getSchemePreviews);

  const [limit, setLimit] = useState(18);
  // const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (page && schemesType) {
      dispatch(
        getSchemes({
          page: Number(page),
          limit,
          schemeStatus: schemesType,
          sortingParam,
          sortingDirection,
          substring: searchSubstring,
        })
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, schemesType, searchSubstring, sortingParam, sortingDirection]);

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
