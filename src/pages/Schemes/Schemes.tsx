import Container from "./Schemes.styled";
import { ReactionSchemePreview } from "../../components";
import {
  testSchemePreviewDataActive,
  testSchemePreviewDataSuccess,
  testSchemePreviewDataFail,
  testSchemePreviewDataChosen,
} from "../../testData";

import { CustomSelect } from "../../components";
import React, { useState } from "react";

import { nanoid } from "nanoid";

import { SelectChangeEvent } from "@mui/material/Select";

import { SortingRadioGroup } from "../../components";

const data = [
  testSchemePreviewDataActive,
  testSchemePreviewDataSuccess,
  testSchemePreviewDataSuccess,
  testSchemePreviewDataActive,
  testSchemePreviewDataFail,
  testSchemePreviewDataChosen,
  testSchemePreviewDataFail,
  testSchemePreviewDataFail,

  testSchemePreviewDataActive,
  testSchemePreviewDataActive,
  testSchemePreviewDataSuccess,
  testSchemePreviewDataFail,
  testSchemePreviewDataActive,
  testSchemePreviewDataActive,
  testSchemePreviewDataActive,
  testSchemePreviewDataSuccess,
  testSchemePreviewDataFail,
  testSchemePreviewDataActive,
  testSchemePreviewDataSuccess,
  testSchemePreviewDataActive,
  testSchemePreviewDataFail,
  testSchemePreviewDataFail,
  testSchemePreviewDataChosen,

  testSchemePreviewDataChosen,
  testSchemePreviewDataChosen,
  testSchemePreviewDataChosen,

  testSchemePreviewDataSuccess,
  testSchemePreviewDataActive,
  testSchemePreviewDataChosen,
  testSchemePreviewDataChosen,
];

const Schemes = () => {
  const [currentSchemesType, setCurrentSchemesType] = useState("All");

  const schemesTypeSelectHandler = (event: SelectChangeEvent) => {
    setCurrentSchemesType(event.target.value as string);
  };

  const [sortingParam, setSortingParam] = useState("dateCreated");

  const sortingParamChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSortingParam(e.target.value);
  };

  const [sortingDireaction, setSortingDireaction] = useState("up");

  const sortingDireactionChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSortingDireaction(e.target.value);
  };

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
        {data.map((item) => (
          <ReactionSchemePreview schemePreviewData={item} key={nanoid()} />
        ))}
      </div>
    </Container>
  );
};

export default Schemes;
