import Container from "./Schemes.styled";
import { ReactionSchemePreview } from "../../components";
import { testSchemesPreviewData } from "../../testData";
import { CustomSelect } from "../../components";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { SelectChangeEvent } from "@mui/material/Select";
import { SortingRadioGroup } from "../../components";
import { IReactionPreviewData } from "../../types";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { SearchTextInput } from "../../ui";
dayjs.extend(customParseFormat);

const Schemes = () => {
  const [currentSchemesType, setCurrentSchemesType] = useState("all");
  const [sortingParam, setSortingParam] = useState("createdAt");
  const [sortingDireaction, setSortingDireaction] = useState("up");
  const [searchValue, setSearchValue] = useState("");

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

  const [dataToShow, setDataToShow] = useState(
    formatOutput(testSchemesPreviewData)
  );

  useEffect(() => {
    setDataToShow(formatOutput(testSchemesPreviewData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSchemesType, sortingParam, sortingDireaction, searchValue]);

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
      </div>

      <div className="schemes-preview-container container">
        {dataToShow.map((item) => (
          <ReactionSchemePreview schemePreviewData={item} key={nanoid()} />
        ))}
      </div>
    </Container>
  );
};

export default Schemes;
