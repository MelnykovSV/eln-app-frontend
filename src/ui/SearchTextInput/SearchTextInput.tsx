import Container from "./SearchTextInput.styled";
import { InputAdornment } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import { ISearchTextInput } from "../../types";

const SearchTextInput = ({ label, changeHandler }: ISearchTextInput) => {
  return (
    <Container
      label={label}
      onChange={changeHandler}
      defaultValue=""
      sx={{ width: "100%" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <AiOutlineSearch />
          </InputAdornment>
        ),
      }}></Container>
  );
};

export default SearchTextInput;
