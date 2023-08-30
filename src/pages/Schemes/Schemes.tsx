import Container from "./Schemes.styled";
import { ReactionSchemePreview } from "../../components";
import { testSchemesPreviewData } from "../../testData";

import { CustomSelect } from "../../components";
import React, { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import { SelectChangeEvent } from "@mui/material/Select";

import { SortingRadioGroup } from "../../components";

import { IReactionPreviewData } from "../../types";

const Schemes = () => {
  const [currentSchemesType, setCurrentSchemesType] = useState("all");
  const [sortingParam, setSortingParam] = useState("dateCreated");
  const [sortingDireaction, setSortingDireaction] = useState("up");

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

    console.log(schemePreviews);

    const sortedData = filteredData.sort((a, b) =>
      sortingDireaction === "up"
        ? a[sortingParam] - b[sortingParam]
        : b[sortingParam] - a[sortingParam]
    );
    return sortedData;
  };

  const [dataToShow, setDataToShow] = useState(
    formatOutput(testSchemesPreviewData)
  );

  useEffect(() => {
    setDataToShow(formatOutput(testSchemesPreviewData));
  }, [currentSchemesType, sortingParam, sortingDireaction]);

  return (
    <Container>
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
      <div className="schemes-preview-container container">
        {dataToShow.map((item) => (
          <ReactionSchemePreview schemePreviewData={item} key={nanoid()} />
        ))}
      </div>
    </Container>
  );
};

export default Schemes;
