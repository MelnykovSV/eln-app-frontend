import Container from "./CustomSelect.styled";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ICustomSelectProps } from "../../types";

const schemesTypes = [
  { value: "all", label: "All", color: "#000000" },
  { value: "active", label: "Active", color: "#757575" },
  { value: "success", label: "Finished", color: "#388E3C" },
  { value: "fail", label: "Failed", color: "#E64A19" },
  { value: "chosen", label: "Chosen", color: "#ba68c8" },
];

const CustomSelect = ({
  currentSchemesType,
  schemesTypeSelectHandler,
}: ICustomSelectProps) => {
  return (
    <Container className="select-container">
      <FormControl fullWidth sx={{ width: 320 }}>
        <InputLabel id="schemes-type-select-label">Schemes type</InputLabel>
        <Select
          labelId="schemes-type-select-label"
          id="schemes-type-select"
          value={currentSchemesType}
          label="Schemes type"
          onChange={schemesTypeSelectHandler}
          sx={{
            color: schemesTypes.find(
              (item) => item.value === currentSchemesType
            )?.color,
            fontWeight: 700,
          }}>
          {schemesTypes.map((schemesType) => (
            <MenuItem
              className={schemesType.value}
              value={schemesType.value}
              key={schemesType.label}
              sx={{ color: schemesType.color, fontWeight: 700 }}>
              {schemesType.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default CustomSelect;
