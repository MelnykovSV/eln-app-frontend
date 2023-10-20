import Container from "./Schemes.styled";
import { ReactionSchemePreview } from "../../components";
import { CustomSelect } from "../../components";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { SelectChangeEvent } from "@mui/material/Select";
import { SortingRadioGroup } from "../../components";
import { IReactionPreviewData } from "../../types";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DNALoader, SearchTextInput } from "../../ui";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  getSchemePreviews,
  updateSearchSubstring,
} from "../../redux/schemes/schemesSlice";
import { getSchemes } from "../../redux/schemes/operations";
import { getIsLoadingSchemes } from "../../redux/schemes/schemesSlice";
import { Outlet } from "react-router-dom";
import {
  updateSortingParam,
  updateSortingDirection,
} from "../../redux/schemes/schemesSlice";
import {
  getSortingParam,
  getSortingDirection,
  getTotalPages,
} from "../../redux/schemes/schemesSlice";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

dayjs.extend(customParseFormat);

const Schemes = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const isLoadingSchemes = useAppSelector(getIsLoadingSchemes);
  const sortingParam = useAppSelector(getSortingParam);
  const sortingDirection = useAppSelector(getSortingDirection);
  const totalPages = useAppSelector(getTotalPages);

  // const realSchemes = useAppSelector(getSchemePreviews);
  const [currentSchemesType, setCurrentSchemesType] = useState("all");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(18);
  // const [sortingParam, setSortingParam] = useState("createdAt");
  // const [sortingDirection, setSortingDirection] = useState("up");

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    navigate(`${currentSchemesType}/${page}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, searchValue, currentSchemesType]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    dispatch(updateSearchSubstring(e.target.value));
  };

  const schemesTypeSelectHandler = (event: SelectChangeEvent) => {
    setCurrentSchemesType(event.target.value as string);
  };

  const sortingParamChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(updateSortingParam(e.target.value));
  };

  const sortingDireactionChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(updateSortingDirection(e.target.value));
  };
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleNavigateNewScheme = () => {
    navigate("/newScheme");
  };

  return (
    <Container>
      <div className="utility-panel container">
        <div className="utility-panel-outer-block">
          <CustomSelect
            currentSchemesType={currentSchemesType}
            schemesTypeSelectHandler={schemesTypeSelectHandler}
          />

          <div className="utility-panel-block">
            <SearchTextInput
              label="Enter SMILES"
              changeHandler={searchHandler}
            />
            <Button
              size="large"
              variant="contained"
              onClick={handleNavigateNewScheme}
              sx={{ fontSize: 12 }}>
              New Scheme
            </Button>
          </div>
        </div>

        <SortingRadioGroup
          sortingParam={sortingParam}
          sortingParamChangeHandler={sortingParamChangeHandler}
          sortingDireaction={sortingDirection}
          sortingDireactionChangeHandler={sortingDireactionChangeHandler}
        />

        {/* <Link to="/newScheme">New Scheme</Link> */}
      </div>
      <div className="scheme-previews-container container">
        <Outlet />

        {totalPages && totalPages >= 2 ? (
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            className="pagination"
            color="primary"
          />
        ) : null}
      </div>
    </Container>
  );
};

export default Schemes;
