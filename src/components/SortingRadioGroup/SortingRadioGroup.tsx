import Container from "./SortingRadioGroup.styled";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import React, { ChangeEvent } from "react";
import { ISortingRadioGroupProps } from "../../types";

const SortingRadioGroup = ({
  sortingParam,
  sortingParamChangeHandler,
  sortingDireaction,
  sortingDireactionChangeHandler,
}: ISortingRadioGroupProps) => {
  return (
    <Container>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        onChange={sortingParamChangeHandler}
        value={sortingParam}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel
          value="dateCreated"
          control={<Radio />}
          label="Date created"
        />
        <FormControlLabel
          value="dateUpdated"
          control={<Radio />}
          label="Date updated"
        />
        <FormControlLabel value="price" control={<Radio />} label="Price" />
        <FormControlLabel value="mass" control={<Radio />} label="Mass" />
        <FormControlLabel
          value="deadline"
          control={<Radio />}
          label="Deadline"
        />
      </RadioGroup>
      <RadioGroup
        row
        onChange={sortingDireactionChangeHandler}
        value={sortingDireaction}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel
          value="up"
          control={
            <Radio
              checkedIcon={<FaArrowUp fill="blue" />}
              icon={<FaArrowUp />}
            />
          }
          label=""
        />
        <FormControlLabel
          value="down"
          control={
            <Radio
              checkedIcon={<FaArrowDown fill="blue" />}
              icon={<FaArrowDown />}
            />
          }
          label=""
        />
      </RadioGroup>
    </Container>
  );
};

export default SortingRadioGroup;
