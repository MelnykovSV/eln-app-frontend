import Container from "./Schemes.styled";
import { CustomSelect, SortingRadioGroup } from "../../components";
import React, { useState, useEffect } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { SearchTextInput } from "../../ui";
import { useAppSelector } from "../../redux/hooks";
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
import { getTotalPages } from "../../redux/schemes/schemesSlice";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import { generateQueryString } from "../../helpers/generateQueryString";

dayjs.extend(customParseFormat);

const Schemes = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sortingParam = searchParams.get("sortingParam");
  const sortingDirection = searchParams.get("sortingDirection");
  const substring = searchParams.get("substring");
  const schemeStatus = searchParams.get("schemeStatus");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const totalPages = useAppSelector(getTotalPages);
  const [currentSchemeStatus, setCurrentSchemeStatus] = useState(
    schemeStatus || "all"
  );
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const [currentLimit] = useState(Number(limit) || 18);
  const [currentSubstring, setCurrentSubstring] = useState(substring || "");
  const [currentSortingParam, setCurrentSortingParam] = useState(
    sortingParam || "createdAt"
  );
  const [currentSortingDirection, setCurrentSortingDirection] = useState(
    sortingDirection || "asc"
  );

  useEffect(() => {
    const queryString = generateQueryString({
      currentSchemeStatus,
      currentPage,
      currentLimit,
      currentSubstring,
      currentSortingParam,
      currentSortingDirection,
    });
    navigate(queryString ? `?${queryString}` : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentSchemeStatus,
    currentPage,
    currentLimit,
    currentSubstring,
    currentSortingParam,
    currentSortingDirection,
  ]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    setCurrentSubstring(e.target.value);
  };

  const schemesTypeSelectHandler = (event: SelectChangeEvent) => {
    setCurrentPage(1);
    setCurrentSchemeStatus(event.target.value as string);
  };

  const sortingParamChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentPage(1);
    setCurrentSortingParam(e.target.value);
  };

  const sortingDireactionChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentPage(1);
    setCurrentSortingDirection(e.target.value);
  };
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handleNavigateNewScheme = () => {
    navigate("/newScheme");
  };

  return (
    <Container>
      <div className="utility-panel container">
        <div className="utility-panel-outer-block">
          <CustomSelect
            currentSchemesType={currentSchemeStatus}
            schemesTypeSelectHandler={schemesTypeSelectHandler}
          />

          <div className="utility-panel-block">
            <SearchTextInput
              label="Enter SMILES"
              changeHandler={searchHandler}
              value={currentSubstring}
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
          sortingParam={currentSortingParam}
          sortingParamChangeHandler={sortingParamChangeHandler}
          sortingDireaction={currentSortingDirection}
          sortingDireactionChangeHandler={sortingDireactionChangeHandler}
        />
      </div>
      <div className="scheme-previews-container container">
        <Outlet />

        {totalPages && totalPages >= 2 ? (
          <Pagination
            count={totalPages}
            page={currentPage}
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
