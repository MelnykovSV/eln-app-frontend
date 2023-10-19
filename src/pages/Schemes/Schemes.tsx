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
import { getSchemePreviews } from "../../redux/schemes/schemesSlice";
import { getSchemes } from "../../redux/schemes/operations";
import { getIsLoadingSchemes } from "../../redux/schemes/schemesSlice";

dayjs.extend(customParseFormat);

const Schemes = () => {
  const dispatch = useAppDispatch();
  const isLoadingSchemes = useAppSelector(getIsLoadingSchemes);

  const realSchemes = useAppSelector(getSchemePreviews);
  const [currentSchemesType, setCurrentSchemesType] = useState("all");
  const [sortingParam, setSortingParam] = useState("createdAt");
  const [sortingDireaction, setSortingDireaction] = useState("up");
  const [searchValue, setSearchValue] = useState("");

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(18);

  useEffect(() => {
    dispatch(getSchemes({ page, limit, schemeStatus: currentSchemesType }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getSchemes({ page, limit, schemeStatus: currentSchemesType }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, currentSchemesType]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const schemesTypeSelectHandler = (event: SelectChangeEvent) => {
    setCurrentSchemesType(event.target.value as string);
  };

  const sortingParamChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSortingParam(e.target.value);
  };

  const sortingDireactionChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSortingDireaction(e.target.value);
  };

  const formatOutput = (schemePreviews: IReactionPreviewData[]) => {
    let filteredData = [];
    if (currentSchemesType !== "all") {
      filteredData = schemePreviews.filter(
        (item) => item.status === currentSchemesType
      );
    } else {
      filteredData = [...schemePreviews];
    }

    const sortedData = filteredData.sort(
      (a: IReactionPreviewData, b: IReactionPreviewData) => {
        if (sortingParam === "price" || sortingParam === "mass") {
          return sortingDireaction === "up"
            ? a[sortingParam] - b[sortingParam]
            : b[sortingParam] - a[sortingParam];
        }

        if (
          sortingParam === "createdAt" ||
          sortingParam === "updatedAt" ||
          sortingParam === "deadline"
        ) {
          return sortingDireaction === "up"
            ? dayjs(a[sortingParam], "DD.MM.YYYY").valueOf() -
                dayjs(b[sortingParam], "DD.MM.YYYY").valueOf()
            : dayjs(b[sortingParam], "DD.MM.YYYY").valueOf() -
                dayjs(a[sortingParam], "DD.MM.YYYY").valueOf();
        }
        return 0;
      }
    );
    if (searchValue) {
      const dataAfterSearch = sortedData.filter(
        (item) => item.targetCompound === searchValue
      );
      return dataAfterSearch;
    }

    return sortedData;
  };

  const [dataToShow, setDataToShow] = useState(formatOutput(realSchemes));

  useEffect(() => {
    setDataToShow(formatOutput(realSchemes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentSchemesType,
    sortingParam,
    sortingDireaction,
    searchValue,
    realSchemes,
  ]);

  return (
    <Container>
      <div className="utility-panel container">
        <CustomSelect
          currentSchemesType={currentSchemesType}
          schemesTypeSelectHandler={schemesTypeSelectHandler}
        />
        <SortingRadioGroup
          sortingParam={sortingParam}
          sortingParamChangeHandler={sortingParamChangeHandler}
          sortingDireaction={sortingDireaction}
          sortingDireactionChangeHandler={sortingDireactionChangeHandler}
        />
        <SearchTextInput label="Enter SMILES" changeHandler={searchHandler} />
        <Link to="/newScheme">New Scheme</Link>
      </div>

      {isLoadingSchemes ? (
        <DNALoader />
      ) : (
        <div className="schemes-preview-container container">
          {dataToShow.map((item) => (
            <ReactionSchemePreview schemePreviewData={item} key={nanoid()} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Schemes;
