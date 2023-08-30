import Container from "./SortingRadioGroup.styled";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { ISortingRadioGroupProps } from "../../types";

const SortingRadioGroup = ({
  sortingParam,
  sortingParamChangeHandler,
  sortingDireaction,
  sortingDireactionChangeHandler,
}: ISortingRadioGroupProps) => {
  return (
    <Container className="sorting-container">
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        onChange={sortingParamChangeHandler}
        value={sortingParam}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className="radio-buttons-container">
        <FormControlLabel
          value="createdAt"
          control={<Radio />}
          label="Date created"
        />
        <FormControlLabel
          value="updatedAt"
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
        name="row-radio-buttons-group"
        className="arrows-container">
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
