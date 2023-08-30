import Container from "./CustomSelect.styled";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ICustomSelectProps } from "../../types";

const schemesTypes = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "success", label: "Finished" },
  { value: "fail", label: "Failed" },
  { value: "chosen", label: "Chosen" },
];

const CustomSelect = ({
  currentSchemesType,
  schemesTypeSelectHandler,
}: ICustomSelectProps) => {
  return (
    <Container>
      <FormControl fullWidth sx={{ width: 320 }}>
        <InputLabel id="schemes-type-select-label">Schemes type</InputLabel>
        <Select
          labelId="schemes-type-select-label"
          id="schemes-type-select"
          value={currentSchemesType}
          label="Schemes type"
          onChange={schemesTypeSelectHandler}>
          {schemesTypes.map((shemesType) => (
            <MenuItem value={shemesType.value} key={shemesType.label}>
              {shemesType.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default CustomSelect;
